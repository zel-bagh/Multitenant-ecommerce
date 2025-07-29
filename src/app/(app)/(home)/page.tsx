import { getPayload } from "payload";
import configPromise from "@payload-config";
import { json } from "stream/consumers";

export default async function home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1,
    where: {
      parent: {
        exists: false,
      },
    },
  });
  console.log(data);

  return (
    <div>
      {JSON.stringify(data, null, 2)} 
    </div>
  );
}