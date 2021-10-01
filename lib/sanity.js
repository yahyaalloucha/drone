import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
  createClient,
} from "next-sanity";

const config = {
  projectId: "oeo2l4f5",

  dataset: "production",

  apivVersion: "2021-06-07",
  token:
    "skZbmaREVcXUIbVKHczsYtdtgFItFuqU5ggGs71v1Vfvprcpf456iNUYn0cB05IpQePOYh66k1ZoyaFHLzXVMFdO1tS9N5k4ll8Qc2tbkCc4EGg54v9U6bnEkRi842djYVRfh99E1bf1bGd2xzfuPYgYEQKP2oh9nkyEkRRiwcG458NF1IOE", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
};

export const sanityclient = createClient(config);

export const usepreviewsubscripton = createPreviewSubscriptionHook(config);

export const useCurrentUser = createCurrentUserHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
  ...config,

  serializers: {},
});
