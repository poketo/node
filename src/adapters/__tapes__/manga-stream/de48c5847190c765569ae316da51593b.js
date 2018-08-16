var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/18
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 04:05:20 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d68e63b5997502258f01fd0b1d98be4d61534133120; expires=Tue, 13-Aug-19 04:05:20 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 13 Aug 2018 05:05:20 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44984d802c4c9619-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8+3PbNtK/56/YsJ1ampqiJFt+xJY6zqvJXJumZzdzvU5HA5FLEREIsAAoWXfT//1m+RL1tJXGPd/3VZmJSRDYNxa7wJKXT1/+8OLm5/evILKxGDy5pD8gmBz3HZQONSALBk8AAC5jtAz8iGmDtu+kNnTPnOKR5Vbg4ApuNOMCVAjPhVIBdHrgwns2RuicgQvfMzlmcG01svjSy8fUQEsWY9+ZcpwlSlsHfCUtStt3ZjywUT/AKffRzW4OgUtuOROu8ZnAfqfVdtZBBWh8zRPLlaxB+zuyAEKNCHFGj5KCSwTBJwjvmE6tOoTnApkfHcIPEuE9Rx8P4U0qLWq4LS+YDAjAHGKlsVViF1xOINIY9p3I2sQ887yY3fqBbI2UssZqltCNr2IvVNK6bIZGxegdt05bbc83Zqm5FXPZ8o1xQKPoO8bOBZoI0TrApcWx5nbed0zEjs6O3dk0/EfyW/LPf3748du/ndxcRb33H8S3P4Q/vntzrV52b0evvv5x8v72xdVr8e4VTtWrN0fXom346IP/w48f5DsHfK2MUZqPuew7TCo5j1VqnMGTGm8ZIdwnieZseiGb0n2L+8oBO0+w7/CYjdG7dfN+3mB1vImUtn5qYW9AGaTyV5e2x4xBazIRZno1mZmR9L45Pz8665x328fnnXVJ5sTlFD51XXhz8/13PTARjw8hVBrevjpxz8CkCRklmXbeAQXGKK0B1x1Ug3/hIQgLb1/B+a9Fa26BYLS/oPGj8Wie9UzEp62Pxhlcenm3EtIvKAMe/kqgl6DkQrF4a72PbMry1oID+s24DNSs5cfJTYQxQh/+vSSwEfMnY61SGTyDgy/CI/p3cLjUJdE8ZnpOz4/OTs99f/PzG7y1GYwwXOlg0FcyKED0er1tj0sI/hoK4u87Lif09PT0dOVpwKc8QF0OrZ79nkuqkuSypdTVUE5M05LcapWweTYfWWDco9ZH8820f9LpONuEvaIrL3eQTy4=", "base64"));
  res.write(new Buffer("RyqY09+AT4EHfUcjC1C7kk1L30BPfMGM6TuSTUdMQ/7HDTBkqbDlbT6yptb1kW5U73M5Sq1VsqA4v3FWBlg1HgsEXwnBEoOBAwGzrGjuO2V72cz0mJz8F7FxcwAOMM2Zi7cJkwEGfSdkwmCdSJMwWSI12lVSzJ3BTY5WsikfM3LElx712zKMprlLyAYP1+3SywVU3LEVOY00k0HlkmgoGzy59AI+LZVb9C8lVmptIUHS/kJuBZ5U1BCVYxbGUbizwSVboH6jYiT0l57gS71KSIFWSaBmsgaj4CmH8YWz2rPQ94ryF3CytTFfpi9HFadMY2b4o1waS7gWfFU4YpTpCknr7GU+2mPWMn8yVHJouWXSGVxlDaAk3FDDOvu7oI1QG9QTZ/A8v9hvdKDZWMnhiAkxNGlCs+tl1gTPmRBwTU37QYwYn8zT1Bm8yS+ePt13/Ece41CqIU8SRWDoHqSCt0mi9oMVz4cRajVkPgsw5swZfD+HN6gVXBUt+8FTEocJRUbOoAqS9oaQpNKPhjEpPgNCt2R++wGSOEUtaNoO3msVc4MBvCvb9gNlIjVJxzjhJHSj0pg5g+uyjQR/TW37wbQRDg1OUQ4DZIGYDw2XxhncRAjX1Awvs2a45tLsCVlN5mo4jlQqNJKvncwVfEu3z/RuZVRzNl9MnfsjdQavUyHgO27sZgyXXipq3mrVd9XgFRG5x5JEcD9bHcgD+TrllmKrjb5vw3hfCaWdwQv6k2UbK2JcULTVC1dLLx9HdqtLLoLATF6VCEMGIXNH1ich8gG8VJLZ3X6bpTZyxykau+KIYxUwsboECzXm0s0fLYhZhCTPLpzBd9TnM+LUOObGor4D7d+LbvdapSAjgf5DaUnfGKwvXMUYWFuwqhVty8q1tPIPU4OacsBq6X/o5cygtVyOjTO4Lq7uOZWXBFriFmqsUpupVaWfNs+W9D5FzUO+Sd47iJDK8rCYl6UaNjCzOhFQCFfB0mBqK+LHiAcByr5jdYr5hFmHiPFGEnyVykxvGK9Kgm0SRC6gPHTLMjuvJdm0itMWiVse3G2K8WLGpUuBPe2E1NpNOtoc1+cP3JlmSbI1hCe/pZUwq9qodRlZ6VKilgBdFamEH7HELkFdnzgjK7MhZUpxz8Cvml7rsNfC6lyF7q2B4srEztrWTzntOr074VXzcTmU36jdT5in+/6W57X22NASZ0MVDkfEmXd05PW6vZ7XWXE6lVycwdERuPAWAiUPLEjEAOYqLRhcGjPlho8EFoPKHls9x+f83c1n1+t1u52dfHbBhQ+K+whcgo0QbMT9Cdo7ee0+Ml47Xq9z2t3JawdcuNKKwr87mOs8MubaXq/T263INhmsDDBBGaCkUP4OHtuPi8fuudfrdHZOyu45KTCkvdtrP1JKwFWgBBqf+P3mLoa754+M4TOv1z4528kw7blfgeGStmCMxeROJs8eGZOnXq/da+9k8hRceKmUvpO300fG24nXa3d3upzuCbjwHKUf3cncySNjruf12u2TnczR2dALzSkVEPBeozGpvtPvdHuPjNFj7/i8d7yT0WNw4TW726d2jx+Et/un+7Btl26F6zv3AGAtP4FFoL3UdFfMm7Ax3ivgLc4lPlPAW55ZbhLQI45dH8zMOz3v+CR3Vq+5NjYXUKPT/HOm4V+//+3f/e3ryBnkc+/oz7Ws+1N4XFJ4/Fgp7JUU9h4rhSclhSePlcLTksLTx0rhWUnh2WOl8Lyk8PyRUthtFxR224+Vwk5JYeexUtgtKew+VgrLNaX7WNeUbrmmdB/rmtIt15TuY11TuifO4DtWRabdkz1D0zvTlQ==", "base64"));
  res.write(new Buffer("1dtFFE85it4RvdcSsETjlGc1dfdehr4STOsLSpCn+4u+hlrirXXu77nf4a2FrzTh3o22drq6fJACK/ldbBjEhrmn3bPhebssk2FlpsdsSIlUJWQ6stkEw62dwlYEvWEWgQUGRqkFY7kQMGPSglUQoUggNd/Ac/RVjMBg44FudUncPn2yovGsEq9OiFYzNxQpD4C0nx34bDgO2pK9Qv3s7S5FXPJ4nMuKcvE8IYaintDj8bi1VO2oYs8PZJG3d47Py2ChlcgxFVAuZaSbCdugsqN2e3jSXteZ4QEuKW1lsmw8U9tiBqFSdOA8qpnBk23Vk6OUi2ClcvKuGskvG84XNRE2W0piwxGKBc4hhKn06ZCx0SwqJqdMgwpDgxb68GXjoDb0oNnKnzSaLYGhha/XO2RFyo0mfA2d9sWT35stKidurGHhYcNG3JDaEoEWm/Bl1tBsEV2NJg29ePLky0Ze2NlsaTT8X9jYSO5sE6UFIRefn6lVvK3yWHMV68ozZq1uHGQFuAeHBzHTVN1AKJ+5B183Zl63+fVBcntQ8k56axXnrc1WwqXEoJEzPaJCVvMMjtuH4Hkwi1DShB/l89xY7k/mWUfjayUEl+NnkHdNlOEkPwhSzeW46JD1jdWIC3wGWXkj9TVUTxNUBcD585y2WrHpkoVTzQSELEAHLBtxGeBt33Gp9lhlm1CcCTXOLX+puGPd3VG7W/YvRis/peqYLYfL+ZCiNGbHCXPeL1otNa267iop9YWqKkUDbmJeASxO+QUbUZX1i6xfseG54fj/K8tjNBfVrme9MHOJmOh4mezs1YGsPILq4FVesZi/VwDMzwoFLr3oeK/txxxycdi/RkFSFZXKUG1x6S+z496ITRGI35wOmKP9ZlulxcICrHLLmhtn8EIjrWdKZmVEINXsELg9MPlbC/TiwW8p9ydPN+w3JiuFz1lrqHRcKy3h0qUWB6SaMsEDZpFKLcrrbQtWTVY0PN+r3Rn2kBVQDX3fwZhx4Qxe0Z9LL3uwYyCXSVo68nzkEuLCmdTFV/RKBPMxUiJA3Xd+VqmGUqgYQNYHWBDQUQO9B/Bbyqnd20FJfa+3wKS10muo3RKaM8jQ5ri4qbAcQiKQGYSQYhNF7EXcQMhRBK1t28dbrPazaCRhxsyUpprJ4mo/vVTj71LNouOSdt5XzZ9LESWimi5KJJ9TE3eqYpudZA1Z2WdmHV5JL9WGAMrcSAOFhrxIzKwfAZNzG9ECxSXk1uwrHZhD8CP0JzRQQ4CWcWFaO8lb8uYmHcXcOltKhuo0j6wsvezCO+8OZ3c4uFDpsbLO4C3kVxDPIamMb9NJiUdGtdGLb3XjeGup9E/sPDQaKzUW6ApGBcc5lStNm6odV0vd8iFF2ee32c1mNthinI8jpSZ7oSkHFYheF7d3oLIzbime3gdTMaZAdJPfrddIbs2Ll6P+Tw2JVmtP/4qK9ouKrorAIy/O1cVbN396NPQ9m5DnqkVCSi4FauR0acOG4hlkZt6CbOksewu0JnONvopJszRcY+a6DXzF4uQCJM7M4UbkBDMbyyQF8LPcVZYx/GgOJh3RPBgRiQ0WuFlkVaPuabMFV4LS3PlqRLczmquM1yo3c3zOoFhuROZGsyNh4NJYZEHrvgHc4p2yAvoOL0e/n1UKTCOwUba+KchelGS00mnasdB2Dkb5nAmIMeCsErpVwEismyLqFvwgfSRJbsQZswlmJYBF98NKAanBQv5bUBaiIakwacW8LCYMU5tqbMHbcCtWtqSjTWQfluDJJjI5EOiNpIRaxQWlRRH3Jg1tXmaXguxKT392nL2oe/+puNovqg==", "base64"));
  res.write(new Buffer("o22TLRFdzG4FyrGN+k73LDf2CttyaPcSTRbPlY+hkaQjwX0xB3q5m40ENj8h7FsY/yK0KlG4qeS/kfO8iZhdIOamMhDLJihb8D6fjFT/Z8gKYswDrICHIWqUdmcIuB9Nizj0pxpBfzgO3Y+Isa0ZA8SpsTBCYORfyfkeZS/0M9+iNiCUHH9G1GIJtc+kVBlyemEebMQkdM8eED0TScRkGi/TQK/7z7OPATDyCUUf1Nyvk9Jg7r8yh9F2z5v/lfzs4TLmTbnyB/JJn5QhV6EA7bO7I6H8Cb0NMK0BrBk9NOYqPRCCzMDQos4gfzclf8cj888k7+QPGECekC85hIqO0hswky0AFgOYcRsBWziAarn7w5a4ujOwVSr/HzcHPv+2wCYVPPSewH5EZL64wr/mi/dzhg+t+6GvZFgj94WSIddxkU48kDXkSDebBDTYmHHZ/NymEXOT7bbkezNls1nZlqk2ZT59j2jvTZiK7GwfptgVvir3t7fmhdt3TR4sZ883dP7K2P9Yxk7be1PU8/9Ctp6nWDvSqOxknRbvKRbbdxZlniyVU6byotmsyZ/la90IhZptTdRnSBGBwSJnp6A8ywV1mh1yGkoRC9EAt61POfUo7PP/zrFHwdCfce5Rolq4zjryBz/5+Ey+tKA586TPccxlbbY9Qk9qUt9HY/7yqP+zHvVbWq6fkmO1ixQkiyDQbN8VPQS8TdC3hc9DnvnjGI2hsrZsgyo1xf7YRrRU5gUhziDmMrVo8vwmTLWNyH3W3OoWR/opxk4ttU9fLb22byIWqFlV07O500jdbqn6KT/WxRJuWvmJS1bl9NFQ0zNfcNq02VgKlNNVfBMtHF2ZufTfSk7FL2sFNPR7/bxFXxVsLH8zjSXJ2yC/fAYHnbPTk+Pe6flR77TdO+4dr3yczFdqwrHoTKa8/Pg2HMUCtj6eojaUBeeopt3WWe3zZkU1ze/5n0UJUHAI5hB40FyQTVU5H80hhB8N9CFojdG+Kj5X93x+w8bvWIwN0/yl/etFNYaH0Kj3fD5/GzR40GzCvzXaVMuL36u+BVg/C0iL/g3TvICPpsUD6AMPLmqdW0b70IdKlb6SEn3bKg+2WhKth3L407VnggnpcjE6/GhaCaO8/J0KsMWlQW2fY6g0NgoWS8E0Sv93CAe5ARwcwkF15PbRmGBy0GxePFmvGVutL5uiDJSmb8HVPx04uHsgS5J7jNr1GT+CQEkQp8I+LoepFtCHA+/gYvVxXoO3owNLePm0NovW6gXXB3IzzMucaKZQHdSiR440nycHu0tXSfq7ixupyKsoESt118wwzCvzhqUZSqVkKy/4HTSrlrLg7PclHS+KEL38E32XXv6t0/8AAAD//wMAzBUzrfxUAAA=", "base64"));
  res.end();

  return __filename;
};