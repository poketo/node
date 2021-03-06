var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/11
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip, deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:27 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d60bec00b361b0bc275eea2abae8578f21541997626; expires=Tue, 12-Nov-19 04:40:26 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 12 Nov 2018 05:40:27 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4786520c6d692e0f-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+xce3PbtrL/P59iw3YqaWqKlmz5EVvqOI8mmdOmaeNmbk+no4HIpQgLBFgAlKxzpt/9zvIl6ukoTXp07q0yE5MggH0BuwvgR14/fv7Ds9tf3r6AyMZi8Oia/oBgctx3UDpUgCwYPAIAuI7RMvAjpg3avpPa0L1wikeWW4GDG7jVjAtQITwVSgXQ6YELb9kYodMBF75ncszgndXI4msvb1PrWrIY+86U4yxR2jrgK2lR2r4z44GN+gFOuY9udnMEXHLLmXCNzwT2O+1jZ72rAI2veWK5krXefkIWQKgRIc74UVJwiSD4BOEN06lVR/BUIPOjI/hBIrzl6OMRvEqlRQ335QWTAXUwh1hpbJfUBZcTiDSGfSeyNjFPPC9m934g2yOlrLGaJXTjq9gLlbQum6FRMXqn7fP2secbs1Tcjrls+8Y4oFH0HWPnAk2EaB3g0uJYczvvOyZiJxen7mwa/k/ye/LPf77/8eU/zm5vot7b9+LlD+GPb169U8+796MXX/84eXv/7OZb8eYFTtWLVyfvxLHho/f+Dz++l28c8LUyRmk+5rLvMKnkPFapcQaParJljHCfNJqL6YVsSvdt7isH7DzBvsNjNkbv3s3reYPV9iZS2vqphb07ynoqf3Vte8wYtCZTYWZXkw0z0t433e7lcfdyXYk5Xzlzj10XXt1+/10PTMTjIwiVhtcvztwLMGlC45FGdV4BBcYorQHXHVSNf+UhCAuvX8Dlb0VpPvjAaH/B3p3xaIr1TMSn7TvjDK69vFrZ068oAx7+Rl0v9ZLrw+K99e7YlOWlhQT0m3EZqFnbj5PbCGOEPvx7SVcj5k/GWqUyeAKNL8IT+tc4WqqSaB4zPafnJxfnl76/+fkt3tusjzBcqWDQVzIouuj1etselz34ayRIvu+4nNDT8/PzlacBn/IAddm0evZHrqlKk+vqL+eiaUtutUrYPJuCLDDuCZlhm3pXrLOfLdjIQh8arHG1wt+1l3s=", "base64"));
  res.write(new Buffer("1UfXIxXM6W/Ap8CDvqORBahdyaalQ6EnvmDG9B3JpiOmIf/jBhiyVNjyNm9ZY2K9pRvV61yPUmuVLITJb5yVBlaNxwLBV0KwxGDgQMAsK4r7TlleFjM9psjwRWzcvAMHmObMxfuEyQCDvhMyYbDOpEmYLIka7Sop5s7gNicr2ZSPGXnva4/qbWlGvsElYoPPV+3ayxVU3LEVPY00k0Hlx6gpIysHfFoat6hfaqy02kKDZP2F3go6qagRKtssBkfhAwfXbEH6lYqRyF97gi/VKnsKtEoCNZO1PgqZ8j6+cFZrFvZeMf6inyyg5rH9elRJyjRmE2iUa2OJ1kKuikaMMl1haV28zLF7zFrmT4ZKDi23TDqDm6wAlIRbKlgXf1dvI9QG9cQZPM0v9msdaDZWcjhiQgxNmtDsep4VwVMmBLyjov16jBifzNPUGbzKLx4/3rf9HY9xKNWQJ4mibugepILXSaL26yueDyPUash8FmDMmTP4fg6vUCu4KUr2609JHCaUTjmDKrPau4cklX40jMnwWSd0S8Nvv44kTlELmraDt1rF3GAAb8qy/boykZqkY5xwUrpRacycwbuyjBT/jsr269NGODQ4RTkMkAViPjRcGmdwGyG8o2J4nhXDOy7Nnj2ryVwNx5FKhUbytZO5gpd0+0TvNkY1Z/Mw7Hw4UWfwbSoEfMeN3Uzh2ktFzVut+q5af0Ua77EkEdzPogN5IF+n3FJWttH3bWjvK6G0M3hGf7IlyooaFxxt9cJV6OXjyG51yUX6mOmrUmHIIGTuyPqkRD6A50oyu9tvs9RG7jhFY1cccawCJlZDsFBjLt380YKZRbby5MoZfEd1PiFNjWNuLOoHyP5UVPugKAUZC/QfSkv2xmA9cBVtYC1gVRFtS+RaivzD1KCmhWMV+j93ODNoLZdj4wzeFVcfOJWXFFrSFmqsUpuZVaUfN8+W7D5FzUO+Sd87mJDK8rCYl6UZNgizOhFQCFfBUmMqK/LHiAcByr5jdYr5hFnvEeONLPgqlZndMF7VBNukiFxBeeqWrQm9tmTTKk9bLPny5G5TjhczLl1K7Gn7pFZu0tHmvD5/4M40S5KtKTz5La2EWbVGrcrISpeWeAnQVbGU8COW2KVe1yfOyMqsSbmk+MDEr5pe632vpdW5Cd17A8WViZ21/aJy2nV6D/ZXzcflVH6jdT9inu77W57X2mNDS5INVTgckWTeybnXOz079jorTqfSizM4OQcXbmZsgpLLcSHZUuUpN3wksKhd1tjqMj7l72EBz7ze6fFuAc9IwLFGzAP1AwKeHZiAPa930u3uFJC2O2/gJdeiYeAnpeIHhewdmJCnXq97frFTyFMScsRkUK3Lt4t3emDinXi9bq+3U7wTcOE1BEo2LEjEAOYqfVDOkwOTs+v1ut3OTjm74MJ7xX0ELsFGCDbi/gQfnpfdA5O14/U657vnJR0+3GhFi7AHhOscmHDHXq/T223IYxqwMsAEZYCSFtQPyHh8WDJ2L71ep7NzUnYvyYAhHbu88yOlBNwESqDxSd5vHhK4e3lgAl94veOznU62e5FFEsMlbYQai8mDQl58FiE/fNkP23brVsR/cC8A1tYpsEi4l4oeyn0TNsYPSnyLk41PlPiWB56bFHTAOexnG++dnnd6lmdO33JtbK6gZqf118zH/5bfB+vxzBlkGjz7a/X3wfydF/ydHyh/FwV/FwfK32XB3+WB8tc5LhjsHB8qh52Sw86hctgtOeweKocnJYcnh8rhacnh6aFy2Cs57B0qh2Uw6RxqNOmU4aRzqPGkUwaUzqFGlE4ZUjqHGlO6ZUzpHg==", "base64"));
  res.write(new Buffer("akzpljGle6gxpVvGlO6hxpRuGVO6hxpTumVM6R5qTOmWMaV7qDGle+YMvmPVOq97tudC78HF/+rtYk1MK369Yy1c285INE55Bm/94KT3K8G0voK3Gqf7q75GWuK9dT48T3yD9xa+0kR7N9kaZmH5eBJWdktiwyA2zD3vXgwvj0vwGSv3TZgNaVuiUjIdhG7qw61hGyqGXjGLwAIDo9SCsVwImDFpwSqIUCSQmm/gKfoqRmCwESZRXZK0jx+tWDxDxtYZ0WrmhiLlAZD1s2PUDYesW/aCoH6i/ZAhrnk8znVFO1v59hIU+F6Px+P2EvBYxZ4fyGIXrHN6WY6jdiLHhGVe2t/ZzNgGk50cHw/PjtdtZniAS0ZbmSwbT6q3DINQKYJxjGrD4NE2NPMo5SJYQTI/hJP9sul8UVNhq60kNh2hWOAcQZhKn47um60CwTxlGlQYGiQ07ZfNRq1po9XOnzRbbYGhha/XK2TvCzRb8DV0jq8e/dFqE7K/uUaFh00bcUNmSwRabMGXWUGrTXw1W9T06tGjL5s5uLfV1mj4v7C5kd3ZJk4LRq4+vVCrdNslWGCV6sozZq1uNjJAfOOoETNNmCEi+cRtfN2ced3W143kvlHKTnZrFyiGVjvhUmLQzIUeEbDcPIHT4yPwPJhFKGnCj/J5biz3J/OsovG1EoLL8RPIqybKcNIfBKnmclxUyOrGasQFPoEMNEx1DaHUggqQnz/PeauBv5dGOCGRIGQBOmDZiMsA7/uO23FAq2xLlzOhxvnIX4JMrbs7KnfL+kVr5ad0lL0FspE3KQBnO3Abeb1oFcBdVd0F1PaFqvDXATcxrzossDOCjeith2dZveL4YAOo5ivLYzRX1RlCHe68xEx0usx29hZPBjqiV1JUjgPOX/EB5mfwm2svOt1rMz/vuYDQrHGQVFBtGaotLv15dnwbsSkCyZvzAXO032zDLy1GgFVuiWRzBs80UjxTMgPngVSzI+C2YfIXiOgdoN9T7k8eb9i9T1beVslKQ6XjGmCLS5dKHJBqygQPmEUCMJXX2wJWTVfUPD/52Jn20Cigd1r6DsaMC2fwgv5ce9mDHQ25TNLSkectlwgXzqSuvqJWIpiPkRIB6r7zi0o1lErFALI6wIJAY/5y0+8pp3JvByf1k5OCktZKr5F2y96cQUY2p8VNReUIEoHMIISUmygSL+IGQo4iaG87jNkyaj+JRRJmzExpQiIXV/vZpWr/kGkWFZes87Yq/lSGKAnVbFES+ZSWeNAU28ZJVpCBqbPR4ZX8EtYDUOaDNFBoyIvEzPoRMDm3EQUoLiEfzb7SgTkCP0J/Qg01BGgZF6a9k70lb27SUcytswWIV+d5ZGXpZRfeeXc6u8PBhUqPlXUGryG/gngOSTX4Np07ejSoNnrxrW4c7y0BasXOI9ixUmOBrmAE48+5XCnahCFeBZDmTQow9cvsZrMYbNHOx5FSk73IlI0KQt8Wtw+QsjNuKZ/eh1LRpiB0m9+tI4+3rouXs/6PTYlWEd1/Z0X7ZUU3ReKRQ9518S7bX54Nfc8m5LlqmZCSS4kaOV3asKF8BpmZtyELnWVtgdZkrtFXMVmWmmvMXLeBr1icXIHEmTnaSJz6zNoySQn8LHeVZQ4/moNJRzQPRsRikwVullnVuHvcasONoGXufDWj25nNVYPXKjdzfM6gCDcic6MZwAK4NBZZ0P7QBG7xpmbR+w4vR79fVApMI7BRFt8UZO8sM4p0mnYstJ2DUT5nAmIMOKuUbhUwUuumjLoNP0gfSZMbacZsghmkr6h+VBkgNVjofwvJQjWkFSatmJfgwDC1qQ==", "base64"));
  res.write(new Buffer("xja8DrdSZUs22sT2Udk9jYlMD9T1RlZCreKC0+LViE0W2hxml5Lsyk5/dZ69eJvk5+Jqv6yOtk22ZHQxuxcoxzbqO92LfLBX1JZTu+dosnyufAzNJB0J7os50HcW2Ehg6yPSvsXgX6RWJQk3lfx3cp63EbMLwtxUA8QSxL0Nb/PJSHg+Q6MgxjzBCngYokZpd6aA+/G0yEN/rjH0p/PQ/ZgY29pggDg1FkYIjPwrOd+T7NsazLeoDQglx5+QtFgi7TMpVUacvl0BNmISuhefkTwTScRkGi/zQF/emGff5WDkE4o6qLlfZ6XJ3H9lDuPYvWz9R9Znn2/FvGmt/J580ketkKtUgPbZ3ZFQ/oTesZnWOqwNemjOVdoQgoaBoaDOIH/jK39zKvPPpO/kTwyAfEG+5BAqPkpvwEwWACwGMOM2ArZwAFW4+9MjcXVnYKtW/j9uDnz6bYFNJvjcewL7MZH54or+mi/ezxl+btsPfSXDGrvPlAy5jovlxGcaDTnRzUMCmmzMuGx96qERc5PttuR7M2WxWdmWqTZlPn6PaO9NmIrtbB+m2BW+Kfe3t64Lt++afLY1e76h8/eK/c+t2Gl7b4p6/h9YredLrB3LqOxknYL3FIvtO4syXyyVU6byotmsyZ/lsW6EQs22LtRnSBmBwWLNTkl5thbUaXbIaWiJWKgGuG1/zKlHMT7/7xx7FAL9FeceJamF66wT/+wnH5/IlxY8Z570KY65rM22A/SkJvV9NOZvj/pf61FfUrh+TI7VLpYgWQaBZvuu6BHgfYK+LXwe8swfx2gMwdqyDarUFPtjG8kSzAtCnEHMZWrR5OubMNU2IvdZc6tbHOnHDHYqqX1QbuljGCZigZpVmJ7NlUbqfgvqp/yIHku4aecnLhnK6c5Q0RNfcNq02QgFyvkqvosXjm7MXPqvJSfwyxqAhn7fPm3TBz6by98wZEnyOsgvn0Cjc3F+dto7vzzpnR/3TnunKx8L9JWacCwq01BefnwfjmIBWx9PURtaBeekpt32Re1zgwWa5o/8zwICFByBOQIetBZsEyrnzhxBeGegD0F7jPZF8fnIp/NbNn7DYmya1q/Hv11VbXgIzXrNp/PXQZMHrRb8W6NNtbz6o6pbdOtnCWlRv2laV3Bn2jyAPvDgqla5bbQPfahM6Ssp0bft8mCrLdF6KIc/v/NMMCFbLlqHd6adMFqXv1EBtrk0qO1TDJXGZiFiqZhm6f+OoJEPgMYRNKojtztjgkmj1bp6tI4ZW8WXTVEGSrfvqq94Dh5uw5Jkd4NdH3CkxrT04QTn43KYakFfcfSKrzjWHufIux0VWMLLp7W5s4YSXG/IzTAHN9H8IPTTokZONJ8djd2AVdL5bkgjQbsKYFhpsVZGYV4NalialwQgW3lJttGqSkqY2R9Lll1AD738c5fXXv6x4f8FAAD//w==", "base64"));
  res.write(new Buffer("AwA2JHYafVgAAA==", "base64"));
  res.end();

  return __filename;
};
