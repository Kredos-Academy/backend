const Moralis = require("moralis-v1/node")

const serverUrl =  "https://jtsu8pemrt9p.usemoralis.com:2053/server"
const appid = "5VjrOMztaqe6dBNV2aliaAVjxEJPESpRp8GCjx1V"
const masterkey = "1dgKrYtMLX33kuqZdfw1SEX4lwWrd8XzJMzqQGzB"

Moralis.start({ serverUrl, appid, masterkey})

const requestAssets = async => {
    try {
      const res =  Moralis.Plugins.opensea.getAsset({
        network: 'testnet',
        tokenAddress: '0xdbe8143c3996c87ecd639ebba5d13b84f56855c2',
        tokenId: '0',
      });
      return res.data.assets;
    } catch (error) {
      console.error(error);
    }
};
  
exports.getAssets = async (req, res, _next) => {
    const collectionSlug = req.params.collectionSlug;
    const assetDocs = await Asset.find({ collectionSlug: collectionSlug })
      .sort("tokenId")
      .limit(limit)
      .skip(offset)
      .exec();
    res.json(assetDocs);
};

exports.syncAssets = async (req, res, next) => {
    const collectionSlug = req.params.tokenAddress;
    let assets;
    let totalAssetsRetrieved = 0;
    let totalAlreadyFoundAssets = 0;
    let newAssets = 0;
    // OpenSea API offset limit is 10,000
    while (offset <= 10000) {
      console.log(`offset: ${offset}`);
      assets = await requestAssets(tokenAddress);
      for (const asset of assets) {
        totalAssetsRetrieved += 1;
        console.log(asset.token_id);
        let assetDoc = await Asset.findOne({
          tokenAddress: tokenAddress,
          tokenId: asset.token_id,
        });
        // console.log("-------------------------------------------------");
        // console.log(asset);
        const traits = asset.traits.map((trait) => ({
          traitType: trait.trait_type,
          value: trait.value,
          traitCount: trait.trait_count,
        }));
        if (!assetDoc) {
          newAssets += 1;
          assetDoc = new Asset({
            collectionSlug: collectionSlug,
            tokenId: Number(asset.token_id),
            imageUrl: asset.image_url,
            numSales: asset.num_sales,
            name: asset.name,
            description: asset.description, // Tends to be same as collection description
            saleListed: asset.sell_orders !== null, // TODO: differentiate between buy now / auction
            traits: traits,
          });
        } else {
          totalAlreadyFoundAssets += 1;
          // TOOD: Logic to update assets if they exist
          console.log("in the else case");
        }
        await assetDoc.save();
      }
      console.log(`totalAssetsRetrieved: ${totalAssetsRetrieved}`);
      console.log(`totalAlreadyFoundAssets: ${totalAlreadyFoundAssets}`);
      console.log(`newAssets: ${newAssets}`);
      offset += 50;
    }
  
    res.json("Success, Sync Complete!");
  };










