import sanityClient from "@sanity/client";
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
  createClient,
} from "next-sanity";

const client = sanityClient({
  projectId: "oeo2l4f5",
  dataset: "production",
  token:
    "skZbmaREVcXUIbVKHczsYtdtgFItFuqU5ggGs71v1Vfvprcpf456iNUYn0cB05IpQePOYh66k1ZoyaFHLzXVMFdO1tS9N5k4ll8Qc2tbkCc4EGg54v9U6bnEkRi842djYVRfh99E1bf1bGd2xzfuPYgYEQKP2oh9nkyEkRRiwcG458NF1IOE", // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

export default client;
