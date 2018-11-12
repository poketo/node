var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/17
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
  res.setHeader("cf-ray", "4786520d3de02e0f-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf8ys2bKeSpqZoy5YfsaWO82iSuW2a1m7m9HQ6GohcirBAgAVAyTpn+t/vLF+ino7SuEfn3iozMQkC+8ZiF1jy6unLH17c/vL+FUQ2Fv0nV/QHBJOjnoPSoQZkQf8JAMBVjJaBHzFt0Pac1IbuuVM8stwK7F/DrWZcgArhuVAqgKMuuPCejRCOzsCF75kcMbixGll85eVjaqAli7HnTDhOE6WtA76SFqXtOVMe2KgX4IT76GY3B8Alt5wJ1/hMYO+ofeisggrQ+JonlitZg/YTsgBCjQhxRo+SgksEwccI75hOrTqA5wKZHx3ADxLhPUcfD+BNKi1quC8vmAwIwAxipbFdYhdcjiHSGPacyNrEPPO8mN37gWwPlbLGapbQja9iL1TSumyKRsXonbTP2oeeb8xCczvmsu0b44BG0XOMnQk0EaJ1gEuLI83trOeYiB2fn7jTSfiP5Pfkn//88OPr/zm9vY667z+I1z+EP757c6Nedu6Hr77+cfz+/sX1t+LdK5yoV2+Ob8Sh4cMP/g8/fpDvHPC1MkZpPuKy5zCp5CxWqXH6T2q8ZYRwnySas+mFbEL3be4rB+wswZ7DYzZC797N+3n95fEmUtr6qYWdAWWQyl9d2h4zBq3JRJjp1WRmRtL7ptO5OOxcrAoxpysn7qnrwpvb77/rgol4fACh0vD21al7DiZNyB7JqvMOKDBGaQ24br8a/CsPQVh4+woufitac+MDo/05eXfGoynWNRGftO+M07/y8m4lpF9RBjz8jUAvQMnlYfHeendswvLWggP6TbkM1LTtx8lthDFCD/69IKsh88cjrVIZPIPGF+Ex/WscLHRJNI+ZntHz4/OzC99f//wW720GIwyXOhj0lQwKEN1ud9PjEoK/goL4+47LMT09OztbehrwCQ9Ql0OrZ3/kkqokuSr+ci6atuRWq4TNsinIAuMekxo2iXdJO7vpgg0t9KDBGpdL9F15uVd9cjU=", "base64"));
  res.write(new Buffer("VMGM/gZ8AjzoORpZgNqVbFI6FHriC2ZMz5FsMmQa8j9ugCFLhS1v85E1IlZHulG9z9UwtVbJgpn8xlkaYNVoJBB8JQRLDAYOBMyyornnlO1lM9MjWhm+iI2bA3CAac5cvE+YDDDoOSETButEmoTJEqnRrpJi5vRvc7SSTfiIkfe+8qjfhmHkG1xC1n+8bldeLqDiji3JaaiZDCo/RkMZaTngk1K5Rf9SYqXW5hIk7c/lVuBJRQ1ROWZuHIUP7F+xOeo3KkZCf+UJvtCrhBRolQRqKmswCp5yGF84yz0LfS8pfw4nW1Dztf1qWHHKNGYTaJhLYwHXnK8KR4wyXSJplb3MsXvMWuaPB0oOLLdMOv3rrAGUhFtqWGV/G7QhaoN67PSf5xe7jQ40Gyk5GDIhBiZNaHa9zJrgORMCbqhpN4gR4+NZmjr9N/nF06e7jr/jMQ6kGvAkUQSG7kEqeJskajdY8WwQoVYD5rMAY86c/vczeINawXXRshs8JXGQUDjl9KvIamcISSr9aBCT4jMgdEvmtxsgiRPUgqZt/71WMTcYwLuybTdQJlLjdIRjTkI3Ko2Z078p20jwN9S2G0wb4cDgBOUgQBaI2cBwaZz+bYRwQ83wMmuGGy7NjpDVeKYGo0ilQiP52vFMwWu6faa3K6Oas/ky7Hw8Uqf/bSoEfMeNXY/hyktFzVst+64avCKM91iSCO5nqwN5IF+n3FJUttb3rRnvK6G0039Bf7IUZUmMc4o2euFq6eWjyG50yUX4mMmrEmHIIGTu0PokRN6Hl0oyu91vs9RG7ihFY5cccawCJpaXYKFGXLr5ozkx82jl2aXT/476fEacGkfcWNQPoP2p6PZRqxRkJNB/KC3pG4PVhasYAysLVrWibVi5Flb+QWpQU+JYLf2PvZwZtJbLkXH6N8XVR07lBYGWuIUaqdRmalXpp82zBb1PUPOQr5P3FiKksjws5mWphjXMLE8EFMJVsDCY2or4MeJBgLLnWJ1iPmFWIWK8lgRfpTLTG8bLkmDrBJELKA/dspzQa0s2qeK0ecqXB3frYryYcelSYE/bJ7V2kw7Xx/X5A3eqWZJsDOHJb2klzLI2al2GVrqU4iVAV0Uq4UcssQtQVyfO0MpsSJlSfGTgV02vVdgrYXWuQvfeQHFlYmdlv6icdkfdB+FV83ExlF+r3U+Yp7v+Fue19tjAEmcDFQ6GxJl3fOZ1T04PvaMlp1PJxekf0xbZ9ZSNUXI5Kjhb6Dzhhg8FFr3LHhtdxuf8Pczgqdc9OdzO4CkxONKI+UL9AIOne8Zg1+sedzpbGaTtzmt4zbVoGPhJqfhBJrt7xuSJ1+2cnW9l8oSYHDIZVHn5ZvZO9oy9Y6/b6Xa3sncMLryFQMmGBYkYwEylD/J5vGd8drxup3O0lc8OuPBBcR+BS7ARgo24P8aH52Vnz3g98rpHZ9vn5RGZrFaUhD3A3NGeMXfodY+62xV5SAYrA0xQBigpoX6Ax8P94rFz4XWPjrZOys4FKTCkY5cbP1JKwHWgBBqf+P3mIYY7F3vG8LnXPTzd6mQ759lKYrikjVBjMXmQyfNHYfLj037YtFu3xP6DewGwkqfAPOBeaHoo9k3YCD8q8C1ONj5T4FseeK4T0B7HsI9m70dd7+Q0j5y+5drYXEDNo9ZfMx///u3n7+PtpuP08znV+Wst5uMpPC4pPN5XCk9KCk/2lcJuSWF3Xyk8LSk83VcKz0oKz/aVwvOSwvN9pfCipPBiTynsHBYUdg73lcKjksKjfaWwXFM6+7qmdMo1pbOva0qnXFM6+7qmdMo1pbOva0rn1Ol/x6qYuA==", "base64"));
  res.write(new Buffer("c7pjUPxgorR8O88fKDvSW/KGWuqXaJzwrBTwoxfKrwTT+hLea5zsLvoaaon31vn4teUd3lv4ShPu7Whr57uLRzmwlFnGhkFsmHvWOR9cHJaFOqzMMZkNKYWrhEyHRutguLVz4IqgN8wisMDAMLVgLBcCpkxasAoiFAmk5ht4jr6KERisPVKuLonbp0+WNJ5VEdYJ0WrqhiLlAZD2syOnNQdSG/JmqJ/+PaSIKx6PclnRLkCeikNRC+nxeNReKNJUsecHstgxODq5KMOZdiJHVPe5kAuvJ2yNyo4PDwenh6s6MzzABaUtTZa1p3obzCBUio68hzUzeLKp8nOYchEsVX0+VFP4ZdP5oibCVltJbDpCscA5gDCVPh1zNltFteeEaVBhaJAqD79sNmpDG612/qTZagsMLXy92iGrrW624Gs4Orx88kerTVXQzRUsPGzaiBtSWyLQYgu+zBpabaKr2aKhl0+efNnMCyFbbY2G/wuba8mdrqO0IOTy8zO1jLddHqwuY116xqzVzUZWPNw4aMRMU30FoXzmNr5uTr1O6+tGct8oeSe9tYsT31Y74VJi0MyZHlIRrnkGJ4cH4HkwjVDShB/m89xY7o9nWUfjayUEl6NnkHdNlOEkPwhSzeWo6JD1jdWQC3wGWYEl9TVU0RNUxcv585y2WqHsgoVT1QaELEAHLBtyGeB9z3GPHNAq2/7iTKhRbvkL5SWr7o7a3bJ/MVr5KR37bTjezocUxTlbzrjzftFysWvVdVtRqy9UVasacBPzCmBRZyDYkCrEX2T9iq3WNQUIX1keo7ms9lvrpaELxEQni2RnbzxkBRpUvq/ymsn8dQhgflaqcOVFJzttfOaQi3KDFQqSqqxVhmqDS3+ZHXVFbIJA/OZ0wAztN5tqPeYWYJVbVv04/RcaaT1TMitkAqmmB8Btw+QvW9D7Er+n3B8/XbPTmSxV9metodJxrbiFS5daHJBqwgQPmEUq9iivNy1YNVnR8HyXeGvYQ1ZA9f89B2PGhdN/RX+uvOzBloFcJmnpyPORC4gLZ1IXX9ErEczHSIkAdc/5RaUaSqFiAFkfYEGgMX8R5PeUU7u3hZL6LnOBSWulV1C7JTSnn6HNcXFTYTmARCAzCCHFJorYi7iBkKMI2ps2rjdY7WfRSMKMmSpNVZvF1W56qcY/pJp5xwXtvK+aP5ciSkQ1XZRIPqcmHlTFJjvJGrLC08w6vJJeOhcHlLmRBgoNeZGYWT8CJmc2ogWKS8it2Vc6MAfgR+iPaaCGAC3jwrS3krfgzU06jLl1NhQt1WkeWll62bl33h7ObnFwodIjZZ3+W8ivIJ5BUhnfujMaj4xqrRff6Mbx3lLxodh6XDVSaiTQFYxKnnMql5rW1VsuF9vlQ4rC09fZzXo22Hycj0OlxjuhKQcViL4tbh9AZafcUjy9C6ZiTIHoNr9brdLcmBcvRv2fGhItV7/+HRXtFhVdF4FHXh6si/d+/vJo6Hs2Js9Vi4SUXAjUyOnShg3FM8jMrA3Z0ln2FmhN5hp9FZNmabjGzHUb+IrFySVInJqDtcgJZjaWSQrgp7mrLGP44QxMOqR5MCQSmyxws8iqRt3TVhuuBaW5s+WIbms0VxmvVW7m+Jx+sdyIzI1mh9HApbHIgvbHBnDzt9oK6Fu8HP1+USkwjcCG2fqmIHu/k9FKp2nHQtsZGOVzJiDGgLNK6FYBI7Gui6jb8IP0kSS5FmfMxpiVPxXdDyoFpAYL+W9AWYiGpMKkFbOykCpMbaqxDW/DjVjZgo7WkX1QgiebyORAoNeSEmoVF5QWZeTrNLR+mV0Isis9/dVx9g==", "base64"));
  res.write(new Buffer("vPL+5+Jqt6iOtk02RHQxuxcoRzbqOZ3z3NgrbIuh3Us0WTxXPoZmkg4F98UM6J10NhTY+oSwb27889CqROGmkv9OzvM2YnaOmJvKQCyVA7fhfT4ZqfbJkBXEmAdYAQ9D1Cjt1hBwN5rmcejPNYL+dBy6GxEjWzMGiFNjYYjAyL+S8z3OvkPAfIvagFBy9BlRiwXUPpNSZcjpPX+wEZPQOX9E9EwkEZNpvEgDfaVgln3DgJFPKPqg5n6dlCZz/5U5jEP3ovUfyc8eL2Nelyt/IJ/0SRlyFQrQPrs7FMof0/sIkxrAmtFDc6bShhBkBoYWdQb52zH5WyaZfyZ5J3/CAPKEfMEhVHSU3oCZbAGwGMCU2wjY3AFUy92ftsTlnYGNUvn/uDnw+bcF1qngsfcEdiMi88UV/hVfvJszfGzdD3wlwxq5L5QMuY6LdOKRrCFHut4koMlGjMvW5zaNmJtstyXfmymbzdK2TLUp8+l7RDtvwlRkZ/swxa7wdbm/vTEv3Lxr8mg5e76h83fG/ucydtrem6Ce/Qey9TzF2pJGZSfrtHhPsNi+syjzZKmcMpUXzWZN/ixf64Yo1HRjoj5FiggMFjk7BeVZLqjT7JDTUIpYiAa4bX/KqUdhn/93jj0Khv6Kc48S1dx11pE/+snHZ/KlBc2ZJ32OIy5rs20PPalJfR+N+duj/td61Ne0XD8lx2rnKUgWQaDZvCt6AHifoG8Ln4c888cxGkNlbdkGVWqK/bG1aKnMC0KcQsxlatHk+U2YahuR+6y51Q2O9FOMnVpqH99a+HCAiVigplVNz/pOQ3W/oeqn/OAYS7hp5ycuWZXTnaGmZ77gtGmzthQop6v4hlg4vDYz6b+VnIpfVgpo6Pft8zZ9DLG5+L03liRvg/zyGTSOzs9OT7pnF8fds8PuSfdk6cNqvlJjjkVnMuXFx/fhMBaw8fEEtaEsOEc16bTPa59mK6pp/sj/zEuAggMwB8CD1pxsqsq5MwcQ3hnoQdAeoX1VfGrv+eyWjd6xGJum9evhb5fVGB5Cs97z+ext0ORBqwX/1mhTLS//qPoWYP0sIC36N03rEu5MmwfQAx5c1jq3jfahB5UqfSUl+rZdHmy1JVoP5eDnG88EY9LlfHR4Z9oJo7z8nQqwzaVBbZ9jqDQ2CxZLwTRL/3cAjdwAGgfQqI7c7owJxo1W6/LJas3Ycn3ZBGWgdPuu+uJh/+ExLEm2D9j2sTsaTKkPp3I+LgepFvTFO6/44l3tcV55t6UDS3j5tDZ3VqoEVwdyM8iLm2h+UPXTvEeONJ8dje0FqyTz7SWNVNpVFIaVGmtlGGaVUcPCvKQCsqUXChutqqUsM/tjQbPz0kMv/zTglZd/mPV/AQAA//8DAKmsF8apVQAA", "base64"));
  res.end();

  return __filename;
};
