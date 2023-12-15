import { converter } from "./utils";
import type { TSources } from "./utils";

export const iptv_org_filter = (raw: string): [string, number] => {
  const rawArray = raw.split("\n");
  const regExp = /\#EXTINF:-1\s+tvg\-id\=\"([^"]*)\"/;
  const invalidExp = /\#EXTVLCOPT:/;

  let i = 1;
  let sourced: string[] = [];
  let result = [rawArray[0]];

  while (i < rawArray.length) {
    const reg = regExp.exec(rawArray[i]) as RegExpExecArray;
    const invalid = invalidExp.test(rawArray[i + 1]);

    if (!!reg && !invalid) {
      if (!sourced.includes(reg[1]) || !reg[1]) {
        sourced.push(reg[1]);
        result.push(
          rawArray[i]
            .replace(/\@\@[0-9]*/g, "")
            .replace(/\[geo\-blocked\]/, "")
            .replace(/\[Geo\-blocked\]/, "")
            .trim()
        );
        result.push(rawArray[i + 1]);
      }
    }

    i += 2;
  }

  return [converter(result.join("\n")), (result.length - 1) / 2];
};

export const fanmingming_sources: TSources = [
  {
    name: "China domainv6",
    f_name: "cn_domainv6",
    url: "https://cdn.jsdelivr.net/gh/fanmingming/live/tv/m3u/domainv6.m3u",
    filter: iptv_org_filter,
  },
  {
    name: "China ipv6",
    f_name: "cn_ipv6",
    url: "https://cdn.jsdelivr.net/gh/fanmingming/live/tv/m3u/ipv6.m3u",
    filter: iptv_org_filter,
  },
  {
    name: "China v6",
    f_name: "cn_v6",
    url: "https://cdn.jsdelivr.net/gh/fanmingming/live/tv/m3u/v6.m3u",
    filter: iptv_org_filter,
  },
];
