var path = require("path");

/**
 * GET /Yotsubato!
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip, deflate
 * host: raw.senmanga.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:27 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d2c885bc9d495643abd26c0183e0908411541997625; expires=Tue, 12-Nov-19 04:40:25 GMT; path=/; domain=.senmanga.com; HttpOnly; Secure","PHPSESSID=clo173500qv9gp495cc8u75sc5; path=/; domain=raw.senmanga.com; secure; HttpOnly"]);
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-powered-by", "Fat-Free Framework");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("x-xss-protection", "1; mode=block");
  res.setHeader("x-content-type-options", "nosniff");
  res.setHeader("pragma", "no-cache");
  res.setHeader("cache-control", "no-cache, no-store, must-revalidate");
  res.setHeader("expires", "Thu, 01 Jan 1970 00:00:00 +0000");
  res.setHeader("strict-transport-security", "max-age=5184000; includeSubDomains; preload");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "47865209ef8d946f-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA7RZ3W4buRW+F7DvcDIFIhvVaOQgaYJYo0XsOkjSTddNnHYXaWCc4ZyZoc0hJyRHstoU2MboKxQoWhS96GULbJH2qn2aCs1zFJwZSSP5L7txEDgyyY/f+eHhOYfy8MaPv9w9+Hp/DzKbi1Fn6D5AoExDj6TnJgjjUWeYk0VgGWpDNvRKm/j3vPl0Zm3h0+uSj0PvK//FA39X5QVaHgnygClpSdrQe7wXUpzSYpfEnEJvzGlSKG1bwAmPbRbGNOaM/GrQAy655Sh8w1BQuOVILLeCRl8ra8oIrboBPjzDCbyB2dt/z07fwez0z7PTd7O3fxsGNXRFbq4iLsifUORjUfgMC1xVd0pmTdVjmk6UjluYlvAcZYq91oTGSXtoSJ6BGJJn9xmG0qwRnTNJGIOSgkvqrWvRzK9pH5NhmheWK3nWAuAGEIzVKFMCwa0VBCnXAibcZoAQ8RQK0kZJFNxOb8DemCRwCTYjyJWxYDUfcxQ9KKWmHPWx8yeQZKqUlrTpQSPrv9/8wQArNVeG2ymgjIGkzUrD0eTwuuTsWEzBlrompzHpaYxT4NKqeubEalQ65hL19AY8UVyucGM8JmlLTQbQ", "base64"));
  res.write(new Buffer("gKl2FMoN3e6JkjFpAypphlrEgFqVMoaM9GedzzoN2U3Mi23349zNiI8pBpSwd8JICJKM4MEEdQyJ0vC0cjzaivPWYPAjeIIFSnhKMUd4oK2Bh2QsH6Pow2PpIPfgrJwJGpAq5xIt1cSOb+uWzeBLg3kJB/Sr8hhhtxTOwEYB50KH2+NGkm4mf3nzdans9g4ZC/tlJDhDd/YV6U94bJp1YGgpVXrag6i0EPMYpLIw4RKI24x0r6J3iulSStJ+WSwUS7g2FlDKEkXjggPkJvsc0OnQXwtBLG2mdCv66vv6nGS92cHrIAWjWegFLJY+S3mARWECl4iC+OHB05+Xx7fEzgv5ZP/ug+hu8bPxL8bJV/uP+0fGGw2DmmA0FFweg50WTm5RzM0PtDE/PMmFB5mmJPRc6jL3g0DjpD+/on2mcocLlhfLgyqFnNEYfFhNQMRIWnhRxGjr/FGpoUmEnrFTQSYjsl6jl6UTGzBjrlSGGRNU2/sOfZ2smkyhpOHj66cukJGfCDTZtVMfvS5JT/tuJ7qw6OdczoU0AdRiPcIx1rNeHVcXch8tqB3hSjx9NLFzxyegPdcVn0SERjtdZ762E8U45zJINZG89mgpC6EwJn1NEZIItAVnx/rTuTpROv8E7AtHXC8tllYxlReCLH0n6lFnjBoiNHRYagEhXCjG266gPE+vQgY8T73tTkuFoOlgIxVPR51hzMfA49CbaCwK0vMWl3Q1W//qNTitXM6XOOYp1o2Tw1RjBylFFaajITZhuLTtvlAplxtdk6lJd3PbGw05MIHGhB5nSvrVsvMUH8Hs9O+zt9/O3v51dvpuGOBoGAi+RnyhteW80qzxZ9xYpaeNhPd/+ub97799/8d/uv9Pf/e/v/zju8qJuSbWMK5KipQ6No2c56Q5GRDc2BUB8w2GULPMuS4qrVVydd63Kk0FgfOZ30CbyKnh1eV1XVVb/pxzGLgld941eNQZumsEyNzJXWJaTRB4kJPNVBx6qcszyBgV1l978VTnn5Ms/aUpLlAahRZZ+PDQ9TjI5TKWzkISTiJet6m1XuUCt85lUbbvkNf0U8aD9t0LPZUk3ppP672J5mlmPRijKCn0PCgEMsqUiEmH3oGCGg2mOsBeJavq+zJuXXdOuja9hkXqxAPtHnyaYgiczxvfX2DJ8viac69tMWWUc7vorWZv/zU7/c/s9LftGGuxzC1iqrk5raNeHH7Mx60PFwHucx7onasj3TV+CydqU12tPL0iC/I8DRKiuFLOv3Xv5Na9fiFTD1DY0INnxrX/FHsQjNzFmGvUigsmCLWLloXuVXapB05t5/4DVSxUi6z0GdfMPVobB+4gOwaroILVZv7AqsIbnb019XTttUqjq1K1S7+Hj9BMJQvnv7x5Ay9fbXeaUb8oTbbxsvuIG4vW9I1Fbbs96G71tu7euX37zt3e7d6g/jcYbA0Gg0H31eaF2xM0vNp9GchqZMeHGbfGQSvkRlLK6spvbMKvq6qRGQghVqzMSdo+04SW9gS50Ua3tq+7uQ2ZqbooCKG7Zn23WqwUgBCsLmm7k5m+0W640Q0CszXoZ41KdVHcunOIpn9kuk6jheyUbCPY7EwPMP0p5rTRddHd3Xw5eAVv3sAVWFfEKuxm35UvGe9mXMQbmdnc7vxmc2Nzu1X4pJq/heZBH3hgUacunx1GAuVxE9zNcyswzgTOtlaMGfRTnnzeHOHNrcFWE9UTipq3vQeR0lUmGXijOvEvZHfWc73EcYR6Jde7hHp5pq9SboS6leY/bnmZOSTW/YBKEp+hHKOp9VnW9zmNqyRj8q6ulmerscqpKZGPVA==", "base64"));
  res.write(new Buffer("Tt+7+AYfUn2/WK++H95GBFf0Ec279hL2+0GAkue0Sn+GlmFOGhvWB27D5ZyJ0mW+xjnPeg/d2tkOiKncXZ5GRg26XEjNfb6QHaHSc45Vz3s4t95ib5K3RJe8ry46dXGtRK1907D+XeYHVyOhUtUqQReyNbm/dVuMYhyFV9XKZiqJ1h9ak8mknyAjF3+VzOck6+9wlscihJpAaUBJeNhAzytFyXKtVY+Wwu1kXbidcGvde64l9xlOzhd9UIPPLYKLpbbgeYq4tDjX7wTnunXYEjR/aVS9vh+pEz9Xce3ZdkNYnfpoXxAaguc8rb9WVbCrpOWypM4lz4uMx+SeF0sNlCE/shKKUgi/6foat+y6RfjC7YQddXKeR5hWxqz7Y2nNvPVQcdWXVv11M0c5ctE8a67uuRvcvOMulLGe+664rgF5KSwvUNuqf/NjtLjmtNKvVlKtyuL8Dnmlwd1zys27ZqoH53TOqy3tGbMvE1qgMfUfB1YE7y+ma9lL2EeL/z8AAAD//w==", "base64"));
  res.write(new Buffer("7FxLbxvJEb7zV5QnSLxxTFIkRVm05V7QJGVzLZEGSdnwadAkW2Rbw27uPCTTQIA4vixyCQIEyDlBAiQIEuzdueWXLBRs/kZQ3fPoISmLoj2GDzmIM1X9+L6e6WdVjQ4cOmQOmmIfWiPfdWyXzdhsiKtxtHkNFTEJElLWXJL84amgpKehpcp8OuRizF4/tEo7lWiVHk3Z6AyPAQT6Pl2AIycTNgYuDoqK1kYNWHcWIEdyoqpJdvZLW3kUIVZT1+cj5dsxgOZUsHiYqSZpg/NSJ3JwKwQjOeMjC7jPZt5Izpm605zCdcEbTdmMFqQ7KT5S81TuYFpaGr7XL7GGMdlwWuk1Y1oi100kEdw0mA0FdmDsgLOJYjt35fyhxWd0wq4z14zkOXNNy3bh1XxigRTMdbEn+VPuFSJJBI7zQGmw0tsfXG+EzCtuuObcfhCuOqYBnTp8Mn1ojfRpkuQO5gZ3Opm4bEJ91qM+x0Vrs9dRXyqG+z7flWISPS49dejU+wdFnUggNfGhY8wi9XPm0gkLkxJmrir7HEeIRXYLlUo4N0JxJeuQeX5EpBplk4GPrqb11TZw/2yRSi3K7UufOnAufeYV4kl4jg8r2tJid3bDh6SMo8jJAg/11Z09yzwLzzc975p98wanXWN/YXhBzMNuLFy1lHBxKvVWO7Fb4C42HyXgPm1IBjjKDopDch/MsRPv5IakH8xm1F3oPMtP2/R9ktz/fZ5LPs/cwdAl+Bd7PrP2eH5ST6d1pY/TytS7mYtHqNEPGxqQ4ylJdcUbnO4issWGnLExnvb0DQ6eu9vV1J/KQDBRxIVa335MZQ4fMbt7ah/xU6aqRAV0TwEVS4erIak7PnPx/QLaLjZ+HuZkdPnr7y7f/vny7feXb/96a1PmZgXQ+OH9b2H4w/vfCXD+/cetqojmC1/CrY+p4KMK/+zW6vNV7vSbdzNdLl93fe75XrH+JphR+ylfyCk/k0WLKAVEilVYVe6zww4W83AFUEMxPfn71A/CDtYVE8nFJJWu5gZvysb3MQ9ORZVUeo+KM126VLmXRlUL8nPOLsLqazu7pXL6lG+anNMbTO756097Jx5zQe8VvDWroisvlsp5fMxCFakCmlaXTN1G3hkfjx22VAHa3AyfBCynVWHuyonLPA8tZXnPd/kc13Dlew1jsu7DvfJPo20pXE0AyYI+e4aUy/sfzh3l282iabsbNa1U2a5p1c1aVsmiZZWNWrZlw0qbNaycRcPKGzWsumVnTGeGq1pWyqJlpc/Ysq2mpv6UuuzqnXpKR8djPB7aXAUc2h4WtX0pnaF8bc+d128Mi1mKyoZcco0pnfvMVTZtWEMqtiWslg2LemnjpmEWI/XxGA8mac+hURHT7pf11d9kFS/WdoulxAwXtqm2iwFj9Rcx1ViDa9+61mIone1apAwLRl0P6ER+oHt8Ovr7tTX092s64DahH2muo1/53PT3C+V1DdgvlCEPz6jrQ9lohan+8pqytiErb2L/C30T99a/iXvqkaebEOu+vEasbcJqAzajv/u56e+to7+3Qn/vC6VfXUe/ukK/+oXSr6yjX4E8hvkb9EPNF0d/7fAtr9AvfzT9Kxtz9W6hoT2+3rL/bcy9bwPP9qf40USyI4kDFIp37uTuAPRaje7xcavTbDWh0e0cth+f9OqDdrcDz+u9dv3RUat/H1rN9gDqnSacdHTuAQyetKDfaqicj1pH3Rcw6EK702/1BtB82akftxvwvH500urDYa97DC+7Jz14dlQfHHZ7x9DtQeO4X0ACR616rwMvnryEZuuw3Wl3HmPd/VaCD+0+tI8=", "base64"));
  res.write(new Buffer("n3V7g3pncB+iN6YbqN6VjqMNBEczP3VGcsyKPxlJccongauMY/lz6nK0U3p3ijkVHxM+H50LHkIUQAMqgkbZ/+d0wgpG5OU13cR6AFAsQo8pZxg8qz9u2Se9I21YXcjABazwtgcjKqTgI+oAJkfMcsVigsrHTPj8lDMXwU3byIMVjHaz1Rm0D9ut3ipUIPi3AQOjuhjulw9y6bAhrLjZ7dwe6PcdvtUn7T4ctTst/dCMmKK7oCKMrgwtykWxQhgqFD0y46Whp22MwUIqJ/Prvu/yYeCzr26jAyPv8xnzfDqb374LvxDsAprUZ1/9XIUWFdATrQKHCuiWTYcFxVFBuXVhQaHLmQlltf6GntN+GAImAT/LUkbQlenB4P21y07tqDqLhBEXHszlBUM/5nABTZ17OShIj8F1BxM81KhQnSS8Ft1tJHTjr/rKlLt3dRa7KkaAJMEBS9EcYQnwL6LoQkqMAIJ4RkpiCacl8p/3v/nxD3+5fPvPH//19//+/v0qPfWybXlq+1NmXzB2Zm3ilBlIDBUYTXn+SAcKa2df2kWifHnXOfyUU664v/O6VN5Zrlb7/kLHnMNO/U/hCFSAeSHzfDZJOQNj8DAEIQ+X7767fPeny3e/unz31gyCXnYWrjg5SW7zykAvQkNXudXXuQfVcIKGGrxjw0tY3imVP1xQ2x2TIrnI+PiBQmjHNEpoY2aYX1sitZGyVNtJ0COrq05qD7on0KGCzriZQ9lXP5Qj8U3oXNq7AHehP5pK6SgrPkqMCybwZiqDVxLqHO+VqV9qU79RZ+h3UxXmGtMgEHy4kIF2pNUXdMYwhlqgs42JV3LBxQQoKAeZuwAHKzvljsPGesYWFL09OXU/ZS54HEMklJOGCyHV11WnLmdi7N2CwZTBmDmBx6VQzq0Qr1Ao3HyIRbuaG3RTZTrG6fdYuso2nfJypieK8NkvwvA8NU0kTs/IxWJHu5sk6nBE59ynDn+z0V5tjdemPtKfLoTtC0Wir2vD9D8echw4SdyRloi6ZIUXej8NzEhD4ttssPUgSjbFWjQ8d1lAyjMVABBjapmEN9mgNl06S8L7tETUJRu81mg05TGeloi6ZIN3SIVPveRNRjIJb7JBfczQNW8/UpcYW2sh1JKUmA2PJ9RlsxhfS0RdMsJTgcW49U9AExVJ7jOCl7ixSaC1SPQ1G8hvpMeS/qwloi7Z4B2hldvuyHOWPGKlA60jhpANg2OMzqOOjcEgMYVQqSJELGJKWZFILQyhSPQ1I8jAw5DCCFFJRF0ywlt4Pn4qFiOGMglvskF95i1GU4mRvOYgTmtJSsyGR0/OqBgZgfOhTMKbbFD1lllFwsTIxjbaIoaQFQOeP+QGuBKJvmYEqU4GCaQWib5mBKnOIAmkFom+Zglp1/kSKtR5BAx1nh126hGHMjGitzJDXW4yngKjNuv7jOBVXJk8XRpN5onTIikxIx6zIDm1KIHgb0Zg+F+PkmUxFIm+ZgQZzFVAXuAaE3ZKSUwpGxIDDLM2DkyRTMKbbFBfsKEvpUied6wg0V02wC+pTAaVEgj+ZgQWuAYYCgR/Vz9MS5kmLt/9TX0O9g/1+/2KcQJDne25nAeOtss6nJQg+T5LWyNtFR9yHedH8ixwaf6C5o+5EDT/lF5Q7skg+c5OZYALCioDJBlUsHu1VrPIVXnSIYPlLSk+5WIylslRKJYVgXK5ZpFQlcarbIn3zOWeFLbeLiTbKKWFSKuwK3tli6QS0gx2t2TwhArfC+zX9sCl3tQ4A6IaXkOoVhxK1X08FpopaRLVLUkcc0Fn0pf5s0DYx1LICfWp0ZvNdDDT9Q==", "base64"));
  res.write(new Buffer("a6ntWOSKLGl+e1vya0r0wfBRXvVaIY09SZQEqi/qJMWqtr9nkdXUNKF7WxI6dBl7Y1qBEoV+U6V9i0S6NOT+lpADaR/Jc2b3ArtJ3TPBPM8wmwKmQS+AJE1/oFKtWGRNcppTDf4HAAD//w==", "base64"));
  res.write(new Buffer("rF3Nbhs3EL73KZjt1ZRX0lo/AbqAA9WOKtgpIudMUBYt0atdCtxlFN0S91T00AK99Q0K9NwXEvoexXB2JYp2jJTpcb/hkiMu+c2QHI7CdJouZbEQmWSFYpOtupeu74QiUijSiFCjdhecGl96rFA7DiaQsmQf2FSWDoeUJflALITjtdsBGmlQr+VgduWzLZtWYl06KSFmW1JD9deI0gPoNRzKma9lrkylXrB3OdfGbvg7uzooI64MR2i/Dxs9j8SeUt3g0ZptFb1cKrN6+fZ7Z6BmW0UsTF4SEFhlBsMzGKXHMk+T5Gs0Ybbap9TYf5nekQZe42fB7K4FnTgHAACQiSpa9mjj191Pf/3z5x+7jw9NRyDDP13G0ymUTCeqUHS6lDmnhURvYM41p3NBf+A8M0CyQOB0wenU5Af3AF4k9kVSSPQA4EUyh/NrnhkgWXiRLDjBF+1v6sftKP2v73q/NZSn4RSOVYpNuNKHHwIonLPXKNr3eBClRwJPhVDevjBgB9nxhjqCpAZxQna6UeriXvuhHH0jtObsQumca8diAEr2KM6BJInSI4Hn1IWS8sgUC6EKVkg2ElyyjWJXqlK50AYsx4azKzjzW/CqEmysrYFThmXOgQfWAGMHaiAbRZoawITAeNrXQMba2jllCNRQ2+M4SoMr8bqhHW4ty6UpwFxydj7nuWssUQLTACW1rRxYW3ks9NQJtRtvCsF+lMLZvHtTCFIjOCe6SZTuQa/ZUMtwZe45egxveWac3RYUwJdoBPXEBO/Sk3m6JF+xIqKXUq+OlkAEEVzz9Hq45rGg12y4VbhdSjZ2CcFCZOzQQTIES9CgXsu94JbvZS7YtWLj9Vo5rQMM3YtwvdpIQANX4mnRD54IKjON3zhVzsHmXgItogQnQie2O2HHQk+dUIa+VpoveH74GAcAR2CnHaUN5rU5DPYWM0lH7tobxvdov9Zux0kHfEUEvcVuKA9PRVE6W3z4hP0bd2AnuSi9Wd4N5jqeOduZ9gH7cpBEKTx77QQ7v2pDK0UhNQRVBb1ZCjoS7+XKOXJSlt1xIGcQBdSYhE4HTqJ8sadYKM1dqsxkKrMG7pXeFhAS6Bwx11Jo2pHWM78bpU8W8FQL9oiXgt7YmEZRVFTd0amEkyp6LTbYefQcthbk0Vou55I0nbV/mWDBF82Se9jHpd2zhb1fEUqil5oXc/oKUkPsexUgAhB4zp9+2z38vHv4fffp793DL7WKvaQXpc+V87QLJdp3G545e4/NI062QRyliHithRLqlSrgC7IrU5pcwJADL+pa3i7lvcMxdTGCxSypa0MOxdDiddtR+nxJT+tQ3h3RC80XNmr14Oi5GA6qJEod1Gs7lH/H7DxnnL0W+mAFx+Q8J5wghlNxMIhSB/a2/EJ5+FqWwh0d+2ekSHD6augzm8eP7z5DUp59Op7n0tk8jun/TOKsO6WqxwlUbbwv3nf85ny1wmwcNjvDnbCH+nPM0SFLshGzUlaCwGoW4keFrrZ1Egypybq+Fa7LFsYzju8gYpysZGbzXjRF69pBpGb2YqfNmiFOIJE9xCtrMjM2sBEK2ywYohQEIvAhMPGE1PkkVgoC3SHfSLmyofgnZAP1EP6eyxUEYbfIzZIXWWlTUNjg9dKs4UCo9WSvrRnkyP6SgOL/OW3cIY3pk/dMvyCf9Olp2W/V10ebPNLdOD5tbpRu5HwhqtZ9+e3azOT8O83pWdwf9oezs3Zy1rvt3fGjPNOndXbnU/s3Jv8CAAD//wMAmGtQadZkAAA=", "base64"));
  res.end();

  return __filename;
};
