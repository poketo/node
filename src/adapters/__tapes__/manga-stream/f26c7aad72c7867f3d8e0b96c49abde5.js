var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/4
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip, deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:26 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d60bec00b361b0bc275eea2abae8578f21541997626; expires=Tue, 12-Nov-19 04:40:26 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 12 Nov 2018 05:40:26 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4786520b3cce2e0f-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf8ys2bKeSpqZoyZYfsaWO82iSuW2aNm7m9nTOaCByKcICARYAJeuc6X+/s3yJejpKkxzde6vMxCQIYF/AvrDk9ePnPz27/e3tC4hsLAaPrukPCCbHfQelQw3IgsEjAIDrGC0DP2LaoO07qQ3dC6d4ZLkVOLiBW824ABXCU6FUAJ0euPCWjRFOwYUfmRwzeGc1svjay4fUZpYsxr4z5ThLlLYO+EpalLbvzHhgo36AU+6jm90cAZfcciZc4zOB/U772FmfKkDja55YrmRttl+QBRBqRIgzfJQUXCIIPkF4w3Rq1RE8Fcj86Ah+kghvOfp4BK9SaVHDfXnBZEATzCFWGtsldMHlBCKNYd+JrE3ME8+L2b0fyPZIKWusZgnd+Cr2QiWty2ZoVIzeafu8fez5xiw1t2Mu274xDmgUfcfYuUATIVoHuLQ41tzO+46J2MnFqTubhv+d/JH84x/vf375X2e3N1Hv7Xvx8qfw5zev3qnn3fvRi29/nry9f3bzvXjzAqfqxauTd+LY8NF7/6ef38s3DvhaGaM0H3PZd5hUch6r1DiDRzXaMkS4TxzNyfRCNqX7NveVA3aeYN/hMRujd+/m/bzB6ngTKW391MLeE2Uzlb86tz1mDFqTsTCTq8mWGXHvu2738rh7uc7EHK8cuceuC69uf/yhBybi8RGESsPrF2fuBZg0ofVIizrvgAJjlNaA6w6qwb/zEISF1y/g8p9Fa774wGh/gd6d8WiH9UzEp+074wyuvbxbOdPvKAMe/pOmXpol54fFe+vdsSnLWwsK6DfjMlCzth8ntxHGCH349xKvRsyfjLVKZfAEGl+FJ/SvcbTUJdE8ZnpOz08uzi99f/PzW7y32RxhuNLBoK9kUEzR6/W2PS5n8NdAEH0/cDmhp+fn5ytPAz7lAepyaPXsz5xTFSfX2V/uRdOW3GqVsHm2BVlg3BMSwzb2rkhnP1mwkYU+NFjjagW/ay9Xqo8=", "base64"));
  res.write(new Buffer("rkcqmNPfgE+BB31HIwtQu5JNS4VCT3zBjOk7kk1HTEP+xw0wZKmw5W0+sobE+kg3qve5HqXWKlkQk984KwOsGo8Fgq+EYInBwIGAWVY0952yvWxmekyG4avYuPkEDjDNmYv3CZMBBn0nZMJgHUmTMFkCNdpVUsydwW0OVrIpHzPS3tce9dsyjHSDS8AGn6/btZczqLhjK3waaSaDSo/RUEZSDvi0FG7Rv+RYKbUFB0n6C74VcFJRA1SOWSyOQgcOrtkC9CsVI4G/9gRf6lXOFGiVBGoma3MUNOVzfOWs9izkvSL8xTyZQc1t+/WoopRpzDbQKOfGEqwFXRWMGGW6gtI6eZli95i1zJ8MlRxabpl0BjdZAygJt9SwTv6u2UaoDeqJM3iaX+w3OtBsrORwxIQYmjSh3fU8a4KnTAh4R037zRgxPpmnqTN4lV88frzv+Dse41CqIU8SRdPQPUgFr5NE7TdXPB9GqNWQ+SzAmDNn8OMcXqFWcFO07DefkjhMyJ1yBpVntfcMSSr9aBiT4LNJ6JaW334TSZyiFrRtB2+1irnBAN6UbftNZSI1Scc44cR0o9KYOYN3ZRsx/h217TenjXBocIpyGCALxHxouDTO4DZCeEfN8Dxrhndcmj1nVpO5Go4jlQqNpGsncwUv6faJ3i2Mas/mZtj5cKDO4PtUCPiBG7sZwrWXipq2WtVdtfkKN95jSSK4n1kH0kC+Trklr2yj7tsw3ldCaWfwjP5kEcoKGxcYbdXClenl48huVcmF+5jxq2JhyCBk7sj6xEQ+gOdKMrtbb7PURu44RWNXFHGsAiZWTbBQYy7d/NECmYW38uTKGfxAfT4hTI1jbizqB8D+UnT7ICsFGQr0H0pL8sZg3XAVY2DNYFUWbYvlWrL8w9SgpsCxMv2f25wZtJbLsXEG74qrD9zKSwwtYQs1VqnNxKrSj9tnS3KfouYh38TvHUhIZXlY7MtSDBuIWd0IKISrYGkwtRX+Y8SDAGXfsTrFfMOsz4jxRhR8lcpMbhivcoJtYkTOoNx1y2JCry3ZtPLTFiFf7txt8vFixqVLjj1lT2rtJh1t9uvzB+5MsyTZ6sKT3tJKmFVp1LqMrHQpxEuAropQwo9YYpdmXd84IyuzIWVI8YGOX7W91udec6tzEbr3BoorEztr6aJy23V6D85X7cdlV36jdD9in+77W97X2mNDS5QNVTgcEWXeybnXOz079jorSqfiizM4OQcXbmZsgpLLcUHZUucpN3wksOhd9tiqMj7l72ECz7ze6fFuAs+IwLFGzA31AwSeHRiBPa930u3uJJCynTfwkmvRMPCLUvGDRPYOjMhTr9c9v9hJJGVyb0ZMBlVcvp280wMj78TrdXu9neSdgAuvIVCyYUEiBjBX6YN0nhwYnV2v1+12dtLZBRfeK+4jcAk2QrAR9yf48L7sHhitHa/XOd+9Lzu0ZLWiIOwB4joHRtyx1+v0dgvymBasDDBBGaCkgPoBGo8Pi8bupdfrdHZuyu4lCTCkY5d3fqSUgJtACTQ+0fvdQwR3Lw+M4Auvd3y2U8l2LzJLYrikRKixmDxI5MVnIfLDw37Ylq1bIf/BXACsxSmwcLiXmh7yfRM2xg9yfIuTjU/k+BbnnZv4c8Au7Gdb7p2ed3qWO07fc21szp9mp/VltuPeeHadQYZh90DxOynwOzlQ/E4L/E4PFL9egV/vQPE7K/A7O1D8zgv8zg8Uv4sCv4sDxe+ywO/yQPHrHBcIdo4PFcNOiWHnUDEsjUjnUK1IpzQjnUO1I53SkHQO1ZJ0SlPSOVRb0imNSedQrUmnNCedQ7UnnQ==", "base64"));
  res.write(new Buffer("0qB0DtWidEqT0vnCNuXv35f5fXjscuYMfmBVjNU92zPIejDuXr1dxKMUbOsdcWgtk5BonPKssvRDA55vBNP6Ct5qnO6/wmuQJd5b54PDhDd4b+EbTaB3Q60VCyyfC8JKmiI2DGLD3PPuxfDyuKz6YmXCgtmQEgIVi+kEctMcbq2ooELoFbMILDAwSi0Yy4WAGZMWrIIIRQKp+Q6eoq9iBAYb6xOqS6L28aMVeWclqXVEtJq5oUh5ACT77Pxyw+nmliQM1I+SH5DDNY/HOasoo5SndaCoq/V4PG4vFfyq2PMDWWSfOqeX+TTHJ+1EjqmGeCmxshmvDRI7OT4enh2vi8zwAJdktrJTNp4Qb1kFoVJUPjGqrYJH26qIRykXwUoF8UP1qV83na9qLGy1lcSmIxQLnCMIU+nTkXmzVVQOT5kGFYYGqYr162ajNrTRaudPmq22wNDCt+sdsjr9Zgu+hc7x1aM/W22qqG+uQeFh00bckNgSgRZb8HXW0GoTXs0WDb169OjrZl5U22prNPxf2NyI7mwTpgUiV5+eqFW47fKQfhXqyjNmrW42skL0xlEjZppqdQjkE7fxbXPmdVvfNpL7Rkk7ya1dVA+02gmXEoNmTvSICrrNEzg9PgLPg1mEkvb7KN/mxnJ/Ms86Gl8rIbgcP4G8a6IMJ/5BkGoux0WHrG+sRlzgE8iKdamvoeqwoCqEz5/nuNWKrpdWOFUAQcgCdMCyEZcB3vcdt+OAVlkqlTOhxvnKXypVWtd21O6W/YvRyk/pCHlLqUQ+pCj02lEvkfeLVgunq667CqR9oaq654CbmFcTFjUrgo3obYNnWb8ibb+hmOUby2M0V1Xuvl5mvIRMdLqMdvb2TFbsQ6+CqLz+Nn+1Bpiflb1ce9HpXkn0fOaidGUNg6QqkZah2qLRn2fHphGbIhC9OR4wR/vdtrqhxQqwyi0ryJzBM41kzpTMiuJAqtkRcNsw+Ys79O7NHyn3J483pM2TlbdEstZQ6bhWKMWlSy0OSDVlggfMIhUOldfb7FWNVzQ8P3HY6fPQKqB3SfoOxowLZ/CC/lx72YMdA7lM0lKR5yOXABfKpM6+olcimI+REgHqvvObSjWUTMUAsj7AgkBj/lLRHymndm8HJvUjiwKS1kqvgXbL2ZxBBjaHxU0F5QgSgcwghOSaKCIv4gZCjiJobzsF2bJqP4lEEmbMTGmqAC6u9pNLNf4h0Sw6LknnbdX8qQRRAqrJogTyKSXxoCi2rZOsIStizlaHV+JLNRaAMl+kgUJDWiRm1o+AybmNyEBxCflq9pUOzBH4EfoTGqghQMu4MO2d6C1pc5OOYm6dLQVwdZxHVpZadqGdd3uzOxRcqPRYWWfwGvIriOeQVItv04GfR4tqoxbfqsbx3lIhq9h59DlWaizQFYzK53MsV5o21e6uFm7mQ4oi5pfZzWYy2GKcjyOlJnuBKQcVgL4vbh8AZWfckj+9D6RiTAHoNr9br/jdGhQve/0f6xKtVlL/7RXt5xXdFI5HXmqui3fIvrg39CObkOaqeUJKLjlqpHQpW0P+DDIzb0NmOsveAq3JVKOvYpIsDdeYqW4D37A4uQKJM3O0ETjNmY1lkhz4Wa4qSx9+NAeTjmgfjAjFJgvczLOqYfe41YYbQWHufNWj2+nNVYvXKjdTfM6gMDciU6NZZQNwaSyyoP2hDtziDcli9h1ajn6/qRSYRmCjzL4pyN4VZmTpNCUstJ2DUT5nAmIMOKuYbhUwYusmj7oNP0kfiZMbYcZsglkpXdH9qBJAarDg/xaQBWuIK0xaMS+L8sLUphrb8DrcCpUtyWgT2g==", "base64"));
  res.write(new Buffer("R+X0tCYyPtDUG1EJtYoLTItXEjZJaLOZXXKyKzl9aT978RbHr8XVfl4dpU22eHQxuxcoxzbqO92LfLFX0JZdu+doMn+ufAzNJB0J7os50PcN2Ehg6yPcvsXiX7hWJQg3lfwPUp63EbMLwNxUC8RSaXkb3uabkeroDK2CGHMHK+BhiBql3ekC7ofTwg/9tYbQX/ZD90NibGuLAeLUWBghMNKvpHxPsk9aMN+iNiCUHH9C0GIJtM+kVBlw+mYE2IhJ6F58RvBMJBGTabyMA33xYp59D4ORTij6oOZ+HZUmc/+VKYxj97L1H4nPPl/EvClWfk866aMi5MoVoDS7OxLKn9C7LdPahLVFD825ShtC0DIwZNQZ5G9a5W8sZfqZ+J38hQWQB+RLCqHCo9QGzGQGwGIAM24jYAsFUJm7v7wSVzMDW7ny/zE58OnTAptE8LlzAvshkeniCv6aLt5PGX5u2Q99JcMaus+UDLmOi3DiM62GHOjmJQFNNmZctj710oi5ybIteW6mbDYraZkqKfPxOaK9kzAV2lkepsgK35T57a1x4fasyWeL2fOEzt8R+1+L2Cm9N0U9/w9E63mItSOMyg7WyXhPsUjfWZR5sFRumUqLZrsmf5bbuhEKNdsaqM+QPAKDRcxOTnkWC+o0O+Q0FCIWrAFu2x9z6lGsz/87xx4FQV/i3KMEtVCddeCf/eTjE+nSAudMkz7FMZe13XaAmtSkvo/G/K1R/9dq1Jdkrh+TYrWLECTzINBsz4oeAd4n6NtC5yHP9HGMxlBNW5agSk2RH9sIloq8IMQZxFymFk0e34SpthGpz5pa3aJIP2axU0vtQ25LH6EwEQvUrKrp2dxppO63VP2UH69jCTft/MQlq3K6M9T0xBeckjYbS4FyvIrv0YWjGzOX/mvJqfhlrYCGft8/bdOHNZvL3w5kSfI6yC+fQKNzcX522ju/POmdH/dOe6crH+nzlZpwLDrTUl5+fB+OYgFbH09RG4qCc1DTbvui9pm/oprmz/zPogQoOAJzBDxoLdCmqpw7cwThnYE+BO0x2hfFZxufzm/Z+A2LsWlavx//86oaw0No1ns+nb8OmjxoteDfGm2q5dWfVd9iWj9zSIv+TdO6gjvT5gH0gQdXtc5to33oQyVKX0mJvm2XB1ttidZDOfz1nWeCCclyMTq8M+2EUVz+RgXY5tKgtk8xVBqbBYklY5ql/juCRr4AGkfQqI7c7owJJo1W6+rRes3Yan3ZFGWgdPuu+nrm4OExLEl2D9j14UQaTKEPp3I+LoepFvT1RK/4emLtcV55t6MDS3j5tLZ31qoE1wdyM8yLm2h/UPXTokcONN8djZ3VqsTynQWNVNhVlIWV8mpl88+rJQ1Lu5LKx1ZeTW20qpayyOzPJbkuCg+9/COT117+hd//AQAA//8DAOc9wqLyVwAA", "base64"));
  res.end();

  return __filename;
};
