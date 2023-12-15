import * as OpenCC from "opencc-js"

export interface ISource {
    name: string
    f_name: string
    url: string
    filter?: (raw: string) => [string, number]
}

export type TSources = ISource[]

<<<<<<< HEAD
export const converter = OpenCC.Converter({ from: "hk", to: "cn" });

export const handle_m3u = (r: string) => {
  return r
    .trim()
    .replace(/\r/g, "")
    .split("\n")
    .filter((r) => !!r);
};

export const replace_github_rawcontent = (url: string) => {
  return url.replace(
    "https://raw.githubusercontent.com/",
    "https://ghproxy.net/https://raw.githubusercontent.com/"
  );
};
=======
export const converter = OpenCC.Converter({ from: "hk", to: "cn" })

export const handle_m3u = (r: string) => {
    return r
        .trim()
        .replace(/\r/g, "")
        .split("\n")
        .filter((r) => !!r)
}

export const replace_github_rawcontent = (url: string) => {
    return url.replace(
        "https://raw.githubusercontent.com/",
        "https://ghproxy.net/https://raw.githubusercontent.com/"
    )
}
>>>>>>> 466b3580b739f7dcdb4f7e9081bf73709966c9bd
