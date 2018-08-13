var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/20
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 03:30:09 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d2b9d8529469ab4193ed76e1114040b871534131008; expires=Tue, 13-Aug-19 03:30:08 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 13 Aug 2018 04:30:08 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "449819f2ab8e9613-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf8ys2bKeWpqYoyZYfsaWOnffcNk1P3Mzt6XQ0ELkUEYEAC4CSdc70v99ZvkQ9HaV2j++9VWZiEgT2jcUusOTl0xc/Pr/55f1LiGwsBk8u6Q8IJsd9B6VDDciCwRMAgMsYLQM/Ytqg7TupDd0zp3hkuRU4uIIbzbgAFcK1UCqATg9ceM/GCN02uPADk2MGH6xGFl96+ZgaaMli7DtTjrNEaeuAr6RFafvOjAc26gc45T662c0hcMktZ8I1PhPY77TazjqoAI2veWK5kjVo/0AWQKgRIc7oUVJwiSD4BOEd06lVh3AtkPnRIfwoEd5z9PEQ3qTSoobb8oLJgADMIVYaWyV2weUEIo1h34msTcwzz4vZrR/I1kgpa6xmCd34KvZCJa3LZmhUjN5x67TV9nxjlppbMZct3xgHNIq+Y+xcoIkQrQNcWhxrbud9x0Ts6OzYnU3D/05+T/75z48/vf6vk5urqPf+o3j9Y/jTuzcf1Ivu7ejltz9N3t8+v3ol3r3EqXr55uiDaBs++uj/+NNH+c4BXytjlOZjLvsOk0rOY5UaZ/CkxltGCPdJojmbXsimdN/ivnLAzhPsOzxmY/Ru3byfN1gdbyKlrZ9a2BtQBqn81aXtMWPQmkyEmV5NZmYkve/Oz4/OOufd9vF5Z12SOXE5hU9dF97c/PB9D0zE40MIlYa3L0/cMzBpQkZJpp13QIExSmvAdQfV4F95CMLC25dw/lvRmlsgGO0vaPxkPJpnPRPxaeuTcQaXXt6thPQryoCHvxHoJSi5UCzeWu8Tm7K8teCAfjMuAzVr+XFyE2GM0Id/LwlsxPzJWKtUBs/g4KvwiP4dHC51STSPmZ7T86Oz03Pf3/z8Bm9tBiMMVzoY9JUMChC9Xm/b4xKCv4aC+Pueywk9PT09XXka8CkPUJdDq2d/5JKqJLlsKXU1lBPTtCS3WiVsns1HFhj3qPXJfDftn3Q6zjZhr+jKyx3kk8s=", "base64"));
  res.write(new Buffer("kQrm9DfgU+BB39HIAtSuZNPSN9ATXzBj+o5k0xHTkP9xAwxZKmx5m4+sqXV9pBvV+1yOUmuVLCjOb5yVAVaNxwLBV0KwxGDgQMAsK5r7TtleNjM9Jif/VWzcHIADTHPm4m3CZIBB3wmZMFgn0iRMlkiNdpUUc2dwk6OVbMrHjBzxpUf9tgyjae4SssHDdbv0cgEVd2xFTiPNZFC5JBrKBk8uvYBPS+UW/UuJlVpbSJC0v5BbgScVNUTlmIVxFO5scMkWqN+oGAn9pSf4Uq8SUqBVEqiZrMEoeMphfOWs9iz0vaL8BZxsbcyX6ctRxSnTmBn+KJfGEq4FXxWOGGW6QtI6e5mP9pi1zJ8MlRxabpl0BldZAygJN9Swzv4uaCPUBvXEGVznF/uNDjQbKzkcMSGGJk1odr3ImuCaCQEfqGk/iBHjk3maOoM3+cXTp/uO/8RjHEo15EmiCAzdg1TwNknUfrDi+TBCrYbMZwHGnDmDH+bwBrWCq6JlP3hK4jChyMgZVEHS3hCSVPrRMCbFZ0DolsxvP0ASp6gFTdvBe61ibjCAd2XbfqBMpCbpGCechG5UGjNn8KFsI8F/oLb9YNoIhwanKIcBskDMh4ZL4wxuIoQP1Awvsmb4wKXZE7KazNVwHKlUaCRfO5kreE23z/RuZVRzNl9Mnc9H6gxepULA99zYzRguvVTUvNWq76rBKyJyjyWJ4H62OpAH8nXKLcVWG33fhvG+Eko7g+f0J8s2VsS4oGirF66WXj6O7FaXXASBmbwqEYYMQuaOrE9C5AN4oSSzu/02S23kjlM0dsURxypgYnUJFmrMpZs/WhCzCEmeXTiD76nPPeLUOObGor4D7T+Kbp+1SkFGAv2H0pK+MVhfuIoxsLZgVSvalpVraeUfpgY15YDV0v/Qy5lBa7kcG2fwobj6zKm8JNASt1BjldpMrSr9snm2pPcpah7yTfLeQYRUlofFvCzVsIGZ1YmAQrgKlgZTWxE/RjwIUPYdq1PMJ8w6RIw3kuCrVGZ6w3hVEmyTIHIB5aFbltl5LcmmVZy2SNzy4G5TjBczLl0K7GknpNZu0tHmuD5/4M40S5KtITz5La2EWdVGrcvISpcStQToqkgl/Igldgnq+sQZWZkNKVOKzwz8qum1DnstrM5V6N4aKK5M7Kxt/ZTTrtO7E141H5dD+Y3a/YJ5uu9veV5rjw0tcTZU4XBEnHlHR16v2+t5nRWnU8nFGRwdgQtvIVDywIJEDGCu0oLBpTFTbvhIYDGo7LHVc9zn724+u16v2+3s5LMLLnxU3EfgEmyEYCPuT9DeyWv3kfHa8Xqd0+5OXjvgwpVWFP7dwVznkTHX9nqd3m5F0vbsWxlggjJASaH8HTy2HxeP3XOv1+nsnJTdc1JgSHu3H/xIKQFXgRJofOL3u7sY7p4/MobPvF775Gwnw2fEMBguaQvGWEzuZPLskTF56vXavfZOJk/BhRdK6Tt5O31kvJ14vXZ3p8vpnoAL1yj96E7mTh4Zcz2v126f7GSOzoaea06pgID3Go1J9Z1+p9t7ZIwee8fnveOdjB6DC6/Y3T61e/wgvH1+ug/bdulWuL5zDwDW8hNYBNpLTXfFvAkb42cFvMW5xD0FvOWZ5SYBPeLY9cHMvNPzjk9yZ/WKa2NzATU6zb9mGv79+/v3ZfbacwaZqXZ6f62lfj6FJyWFJ4+VwtOSwtPHSuFZSeHZY6XwvKTw/JFS2G0XFHbbj5XCTklh57FS2C0p7D5WCo9KCo8eK4XHJYXHj5XCck3pPtY1pXviDL5nVZTWPdkzTLszdF+9XUS0FK/rHZFsLRlJNA==", "base64"));
  res.write(new Buffer("TnlWX/bZLvQbwbS+oGRxur/oa6gl3lrn873OO7y18I0m3LvR1k4alw8VYCXXiQ2D2DD3tHs2PG+XJSOszHqYDSmpqIRMxxebYLi1E8mKoDfMIrDAwCi1YCwXAmZMWrAKIhQJpOY7uEZfxQgMNh5uVpfE7dMnKxrPqtLqhGg1c0OR8gBI+9nhx4ajkS2ZHNTPoe5SxCWPx7msKC/Nk0Moaus8Ho9bS5V/Kvb8QBY5bOf4vFzoWokcUzHhUna2mbANKjtqt4cn7XWdGR7gktJWJsvG86UtZhAqRYevo5oZPNlWSThKuQhWqgjvqhf8uuF8VRNhs6UkNhyhWOAcQphKnw7cGs2ienDKNKgwNGihD183DmpDD5qt/Emj2RIYWvh2vUNWsNtowrfQaV88+aPZotLaxhoWHjZsxA2pLRFosQlfZw3NFtHVaNLQiydPvm7kRY7NlkbD/4WNjeTONlFaEHJx/0yt4m2VR3yrWFeeMWt14yArRj04PIiZppN+QvnMPfi2MfO6zW8PktuDknfSW6s4e2y2Ei4lBo2c6REVdZpncNw+BM+DWYSSJvwon+fGcn8yzzoaXyshuBw/g7xrogwn+UGQai7HRYesb6xGXOAzyEr9qK+h2pKgKobNn+e01Qovlyyc6gcgZAE6YNmIywBv+45Ldbgq25DhTKhxbvlLhQ7r7o7a3bJ/MVr5KVWKbDlozYcUZSI7TlvzftFq2WXVdVd5pS9UVTUZcBPzCmBx4i3YiCqOn2f9is2/DUfh31geo7modgDrRYpLxETHy2RnZfRZqQDVhKu8ei+vsQfmZ4fml150vNdWXA65OPheoyCpCixlqLa49BfZ0WfEpgjEb04HzNF+t63qYGEBVrll/YkzeK6R1jMls5IakGp2CNwemLyCn4rwf0+5P3m6Ye8tWSkCzlpDpeNamQWXLrU4INWUCR4wi1R2UF5vW7BqsqLh+b7lzrCHrIDqyfsOxowLZ/CS/lx62YMdA7lM0tKR5yOXEBfOpC6+olcimI+REgHqvvOLSjWUQsUAsj7AgoC23akm/veUU7u3g5L6vmeBSWul11C7JTRnkKHNcXFTYTmERCAzCCHFJorYi7iBkKMIWtu2UrdY7b1oJGHGzJSm+sHiaj+9VOPvUs2i45J23lfN96WIElFNFyWS+9TEnarYZidZQ1YCmVmHV9JLdRKAMjfSQKEhLxIz60fA5NxGtEBxCbk1+0oH5hD8CP0JDdQQoGVcmNZO8pa8uUlHMbfOlvKZOs0jK0svu/DOu8PZHQ4uVHqsrDN4C/kVxHNIKuPbdGrgkVFt9OJb3TjeWiqDEzsPUMZKjQW6glHxbU7lStOmyr/Vsq98SFEC+Tq72cwGW4zzcaTUZC805aAC0avi9g5UdsYtxdP7YCrGFIhu8rv1esGtefFy1P+lIdFqHebfUdF+UdFVEXjkhaq6eAPlL4+GfmAT8ly1SEjJpUCNnC5t2FA8g8zMW5AtnWVvgdZkrtFXMWmWhmvMXLeBb1icXIDEmTnciJxgZmOZpAB+lrvKMoYfzcGkI5oHIyKxwQI3i6xq1D1ttuBKUJo7X43odkZzlfFa5WaOzxkUy43I3Gh2PApcGossaH1uALd4v6qAvsPL0e8XlQLTCGyUrW8KspcGGa10mnYstJ2DUT5nAmIMOKuEbhUwEuumiLoFP0ofSZIbccZsglk5XNH9sFJAarCQ/xaUhWhIKkxaMS8L68LUphpb8DbcipUt6WgT2YcleLKJTA4EeiMpoVZxQWlR0LxJQ5uX2aUgu9LTXx1nL2rAfy6u9ovqaNtkS0QXs1uBcmyjvtM9yw==", "base64"));
  res.write(new Buffer("jb3CthzavUCTxXPlY2gk6UhwX8yBXnRmI4HNLwj7Fsa/CK1KFG4q+e/kPG8iZheIuakMxLIJyha8zycj1cIZsoIY8wAr4GGIGqXdGQLuR9MiDv25RtCfjkP3I2Jsa8YAcWosjBAY+VdyvkfZy+3Mt6gNCCXH94haLKH2mZQqQ04vj4ONmITu2QOiZyKJmEzjZRro1fd59mI8I59Q9EHN/TopDeb+K3MYbfe8+R/Jzx4uY96UK38kn/RFGXIVCtA+uzsSyp9QZfy0BrBm9NCYq/RACDIDQ4s6g/w9jfx9h8w/k7yTP2EAeUK+5BAqOkpvwEy2AFgMYMZtBGzhAKrl7k9b4urOwFap/H/cHLj/bYFNKnjoPYH9iMh8cYV/zRfv5wwfWvdDX8mwRu5zJUOu4yKdeCBryJFuNglosDHjsnnfphFzk+225HszZbNZ2ZapNmW+fI9o702YiuxsH6bYFb4q97e35oXbd00eLGfPN3T+ztj/XMZO23tT1PP/QLaep1g70qjsZJ0W7ykW23cWZZ4slVOm8qLZrMmf5WvdCIWabU3UZ0gRgcEiZ6egPMsFdZodchpKEQvRALetLzn1KOzz/86xR8HQX3HuUaJauM468gc/+bgnX1rQnHnSaxxzWZttj9CTmtT30Zi/Per/Wo/6mpbrp+RY7SIFySIINNt3RQ8BbxP0beHzkGf+OEZjqKwt26BKTbE/thEtlXlBiDOIuUwtmjy/CVNtI3KfNbe6xZF+ibFTS+0zUEuvsJuIBWpW1fRs7jRSt1uqfsoPV7GEm1Z+4pJVOX0y1PTMF5w2bTaWAuV0Fd8HC0dXZi79t5JT8ctaAQ39Xl236At7jeXvh7EkeRvkl8/goHN2enLcOz0/6p22e8e945UPdflKTTgWncmUlx/fhqNYwNbHU9SGsuAc1bTbOqt96quopvkj/7MoAQoOwRwCD5oLsqkq55M5hPCTgT4ErTHal8Wn267nN2z8jsXYMM1f279dVGN4CI16z+v526DBg2YT/q3Rplpe/FH1LcD6WUBa9G+Y5gV8Mi0eQB94cFHr3DLahz5UqvSVlOjbVnmw1ZJoPZTDnz94JpiQLhejw0+mlTDKy9+pAFtcGtT2GkOlsVGwWAqmUfq/QzjIDeDgEA6qI7dPxgSTg2bz4sl6zdhqfdkUZaA0fRet/hm9wd0DWZJ8xqhdn7QjCJQEcSrs43KYagF9OPAOLlYf5zV4OzqwhJdPa7NorV5wfSA3w7zMiWYK1UEteuRI83lysLt0laS/u7iRiryKErFSd80Mw7wyb1iaoVRKtvKy20GzaikLzv5Y0vGiCNHLP1d36eXf/fwfAAAA//8DALV/QiUIVAAA", "base64"));
  res.end();

  return __filename;
};