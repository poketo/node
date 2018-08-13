var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/4
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 03:30:08 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=dc3dba0aefa8ea9f5cc49e53ee776b8801534131007; expires=Tue, 13-Aug-19 03:30:07 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 13 Aug 2018 04:30:08 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "449819eeceff9631-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+xce3Pbtpb/P5/ihO3U0tQUJdnyI7bUybPJbJum125mezsdDUQeiohAgAVAybp3+t13Dl+inrbSJFe7W2UmJkHgPIGDA+BHXj9+8dPz21/fvYTIxmLw6Jr+gGBy3HdQOlSALBg8AgC4jtEy8COmDdq+k9rQvXCKR5ZbgYOncKsZF6BCeCaUCqDTAxfesTHCKbjwI5NjBjdWI4uvvbxJjbJkMfadKcdZorR1wFfSorR9Z8YDG/UDnHIf3ezmGLjkljPhGp8J7HdabWedVIDG1zyxXMkatX8gCyDUiBBn8igpuEQQfILwlunUqmN4JpD50TH8JBHecfTxGF6n0qKGu/KCyYAIzCFWGlsld8HlBCKNYd+JrE3ME8+L2Z0fyNZIKWusZgnd+Cr2QiWty2ZoVIzeaeu81fZ8Y5aKWzGXLd8YBzSKvmPsXKCJEK0DXFoca27nfcdE7OTi1J1Nw/9O/kj++c/3P3//X2e3T6Peu/fi+5/Cn9++vlEvunejl9/+PHl39/zpK/H2JU7Vy9cnN6Jt+Oi9/9PP7+VbB3ytjFGaj7nsO0wqOY9VapzBo5pumSDcJ4vmanohm9J9i/vKATtPsO/wmI3Ru3Pzet5gtb2JlLZ+amFvQhml8le3tseMQWsyE2Z+NVk3I+t9d3l5ctG57LZPLzvrlsyFyyV87Lrw+vbHH3pgIh4fQ6g0vHl55l6ASRPqlNSz8wooMEZpDbjuoGr8Gw9BWHjzEi5/L0rzHghG+wsZPxiPhlnPRHza+mCcwbWXVysp/YYy4OHvRHqJSm4Ui3fW+8CmLC8tNKDfjMtAzVp+nNxGGCP04d9LBhsxfzLWKpXBEzj6Kjyhf0fHS1USzWOm5/T85OL80vc3P7/FO5vRCMOVCgZ9JYOCRK/X2/a4pOCvsSD9fuByQk/Pz89XngZ8ygPUZdPq2Z+5pSpLLveUuhvKgWlaklutEjbPxiMLjHvS+mC+m/bPOh1nm7FXfOXl8fE=", "base64"));
  res.write(new Buffer("0fVIBXP6G/Ap8KDvaGQBaleyaRkb6IkvmDF9R7LpiGnI/7gBhiwVtrzNW9bcut7Sjep1rkeptUoWEuc3zkoDq8ZjgeArIVhiMHAgYJYVxX2nLC+LmR5TjP8qNm5OwAGmOXPxLmEywKDvhEwYrAtpEiZLpka7Soq5M7jN2Uo25WNGgfjao3pbmtEwd4nZ4PNVu/ZyAxV3bMVOI81kUIUkasoGj669gE9L5xb1S4uVXltYkLy/sFvBJxU1RmWbRecowtngmi1Yv1YxEvtrT/ClWiWlQKskUDNZo1HolNP4ylmtWfh7xfkLOtncmE/T16NKU6Yx6/ij3BpLvBZ6VTxilOmKSOvqZTHaY9YyfzJUcmi5ZdIZPM0KQEm4pYJ19XdRG6E2qCfO4Fl+sV/rQLOxksMRE2Jo0oRG14usCJ4xIeCGivajGDE+maepM3idXzx+vG/7DzzGoVRDniSKyNA9SAVvkkTtRyueDyPUash8FmDMmTP4cQ6vUSt4WpTsR09JHCaUGTmDKknam0KSSj8axuT4jAjdUvfbj5DEKWpBw3bwTquYGwzgbVm2HykTqUk6xgknoxuVxswZ3JRlZPgbKtuPpo1waHCKchggC8R8aLg0zuA2QrihYniRFcMNl2ZPymoyV8NxpFKhkWLtZK7ge7p9onc7oxqz+WTqPJypM3iVCgE/cGM3c7j2UlGLVquxq0avyMg9liSC+9nsQBHI1ym3lFttjH0b2vtKKO0MntOfbLGxYsaFRFujcDX18nFkt4bkIgnM7FWZMGQQMndkfTIiH8ALJZndHbdZaiN3nKKxK4E4VgETq1OwUGMu3fzRQphFSvLkyhn8QHU+IU+NY24s6nvY/qOo9qBZCjIR6D+UlvyNwfrEVbSBtQmrmtG2zFxLM/8wNahpDVhN/Z97OjNoLZdj4wxuiqsHDuUlg5a8hRqr1GZuVenHjbMlv09R85BvsvcOIaSyPCzGZemGDcqsDgQUwlWw1JjKivwx4kGAsu9YnWI+YNYpYrxRBF+lMvMbxquWYJsMkRsoT92ylZ3Xkmxa5WmLhVue3G3K8WLGpUuJPW2E1MpNOtqc1+cP3JlmSbI1hae4pZUwq96oVRlZ6dJCLQG6KpYSfsQSu0R1feCMrMyalEuKByZ+1fBap72WVucudO8MFFcmdtZ2fsph1+ndS68aj8up/EbvfsQ43fe3PK61x4aWNBuqcDgizbyTE6/X7fW8zkrQqeziDE5OwIU3ECh5ZEEiBjBXaaHgUpspN3wksGhU1tgaOT7l7349u16v2+3s1LMLLrxX3EfgEmyEYCPuT9Deq2v3wHTteL3OeXenrh1w4alWlP7do1znwJRre71Ob7cj29RhZYAJygAlpfL36Ng+LB27l16v09k5KLuX5MCQ9m5v/EgpAU8DJdD4pO939yncvTwwhS+8XvvsYqfCF6QwGC5pC8ZYTO5V8uLAlDz3eu1ee6eS5+DCC6X0vbqdH5huZ16v3d0Zcrpn4MIzlH50r3JnB6Zcz+u122c7laOjoeea01JAwDuNxqT63rjT7R2Yoqfe6WXvdKeidPT1it0fU7unn0W3hy/3Ydsu3YrW9+4BwNr6BBaJ9lLRfTlvwsb4oIS3OJf4RAlvcWS5yT4HnLp+tl7e6XmnZ3msesW1sbl9Gp3mlxmFe8vZdQaZhN0Dle+kkO/kQOU7LeQ7PVD5eoV8vQOV76yQ7+xA5Tsv5Ds/UPkuCvkuDlS+y0K+ywOVr9MuBOy0D1XCTilh51AlLCeRzqHOIp1yGukc6jzSKSeSzqHOJJ1yKukc6lzSKSeTzqHOJp1yOukc6nzSKQ==", "base64"));
  res.write(new Buffer("J5TOoc4onXJK6XzhOeXv35f5PXztcuYMfmDVGqt7tuci69519+rtYj1Ki229Yx1a20lINE55Bg596ILnG8G0vqKNnun+PbzGWeKddR68THiLdxa+0cR6N9caSGD5PBBWtiliwyA2zD3vXgwv2yXai5UbFsyGtCFQmZhOHjfRcGtggkqg18wisMDAKLVgLBcCZkxasAoiFAmk5jt4hr6KERhsxCVUl6Tt40cr/s4ApXVBtJq5oUh5AOT77Nxyw6nmlk0YqB8h3+OHax6Pc1PRjlK+rQMFKtbj8bi1hNlVsecHsth96pxe5mTaJ61EjgkGvLSxslmuDR47abeHZ+11lxke4JLPVkbKxpPhLb0gVIpgE6NaL3i0DQM8SrkIVvC/9yF9v244X9VM2GwpiQ1HKBY4xxCm0qej8kazwP1OmQYVhgYt9OHrxlGt6VGzlT9pNFsCQwvfrlfIoPaNJnwLnfbVoz+bLQLFN9a48LBhI27IbYlAi034OitotkiuRpOaXj169HUjhyc3WxoN/xc2Noo72yRpIcjVp1dqlW+rPJxf5bryjFmrG0cZjPzo+ChmmjA6xPKJe/RtY+Z1m98eJXdHpe7kt1aBGmi2Ei4lBo1c6RHBsc0TOG0fg+fBLEJJ432UD3NjuT+ZZxWNr5UQXI6fQF41UYaT/SBINZfjokJWN1YjLvAJZCBdqmsIFRZUMPb8eS5bDTK91MMJ+QMhC9ABy0ZcBnjXd1xC0KtsK5UzocZ5z1+CKK1HOyp3y/pFa+WnhPHaApHImxQArx04ibxetAqYrqruAkb7QlV454CbmFcEC6yKYCN6V+B5Vq/Ytt8AYvnG8hjNVbV3X4cXLwkTnS6Lnb0Ak4F86G0OleNu87djgPkZ3OXai0732kTPKReQlTUJkgoaLUO1JaK/yEALEZsikL65HDBH+902vNCiB1jllsgxZ/BcI01nSmZgOJBqdgzcHpn83Rt6feaPlPuTxxu2zZMV+H5WGiod1wBSXLpU4oBUUyZ4wCwSYKi83jZf1WxFzfMTh505D/UCehOk72DMuHAGL+nPtZc92NGQyyQtA3necolxEUzq5itqJYL5GCkRoO47v6pUQ2lUDCCrAywI6MCM3mb5I+VU7u2QpH5kUXDSWuk11m5JzRlkbHNe3FRcjiERyAxCSKmJIvUibiDkKILWtlOQLb32k3gkYcbMlCbkb3G1n1+q9ve5ZlFxyTvvquJP5YiSUc0XJZNP6Yl7XbGtn2QFGXg56x1eKS8hnABl3kkDhYaiSMysHwGTcxvRBMUl5L3ZVzowx+BH6E+ooYYALePCtHaKtxTNTTqKuXW2AN/qMo+sLKPsIjrvzmZ3BLhQ6bGyzuAN5FcQzyGpOt+mAz+POtXGKL41jOOdJQCr2Hn0OVZqLNAVjGDzuZQrRZswu6uAzbxJAV7+PrvZrAZbtPNxpNRkLzZlo4LRq+L2HlZ2xi3l0/twKtoUjG7zu3Wk79ZF8XLW/7Ep0SqC+u+saL+s6GmReOQQc128O/bFs6Ef2YQiVy0TUnIpUaOgS7s1lM8gM/MWZFNnWVugNVlo9FVMnqXmGrPQbeAbFidXIHFmjjcyJ5pZWyYpgZ/lobLM4UdzMOmIxsGIRGywwM0yq5p0j5steCpomTtfzeh2ZnNV57XKzQKfMyimG5GF0QzZAFwaiyxoPTSBW7wZWVDfEeXo96tKgWkENsrmNwXZ676MZjpNGxbazsEonzMBMQacVUa3ChiZdVNG3YKfpI9kyY08YzbBDMhaVD+uHJAaLOy/hWVhGrIKk1bMS0hsmNpUYwvehFu5siUfbRL7uCRPfQ==", "base64"));
  res.write(new Buffer("IrMDkd4oSqhVXEhavIqwyUObp9mlJLvy05fOsxdvb/xSXO2X1dG2yZaMLmZ3AuXYRn2ne5F39orbcmr3Ak2Wz5WPoZGkI8F9MQf6RAEbCWx+RNq36PyL1Kpk4aaS/0HB8zZidsGYm6qDWDZB2YJ3+WAkFKuhXhBjnmAFPAxRo7Q7U8D9ZFrkob/UBPrLeeh+QoxtrTNAnBoLIwRG8ZWC70n2VQrmW9QGhJLjT8haLLH2mZQqY06ffQAbMQndi8/InokkYjKNl2Wgj1bMs09aMIoJRR3U3K+L0mDuv7KA0XYvm/+R9dnnWzFvWiu/p5j0USvkKhWgbXZ3JJQ/oXdapjWCtU4PjblKj4SgbmBoUmeQv2GVv6mUxWeyd/IXOkC+IF8KCJUcZTRgJpsALAYw4zYCtggA1XT3l3vi6s7AVqv8f9wc+PTbAptc8Ln3BPYTIovFFf+1WLxfMPzcvh/6SoY1cZ8rGXIdF8uJz9QbcqabuwQ02Jhx2fzUXSPmJtttyfdmymKzsi1Tbcp8/B7R3pswldjZPkyxK/y03N/eui7cvmvy2dbs+YbO3yv2v7Zip+29Ker5f2C1ni+xdiyjsoN1mrynWGzfWZT5YqkcMlUUzUZN/iyf60Yo1GzrQn2GlBEYLNbslJRna0GdZoechpaIhWmA29bHnHoU/fP/zrFHodCXOPcoWS1CZ535Zz/5+ESxtJA5i6TPcMxlbbQdYCQ1qe+jMX9H1P+1EfV7mq4fU2C1iyVIlkGg2b4regx4l6Bvi5iHPIvHMRpDmLZsgyo1xf7YRrYE8oIQZxBzmVo0+fomTLWNKHzWwuqWQPoxnZ1Kah9wW/r4hIlYoGYVpmdzpZG624L6KT85xxJuWvmJS4Zy+mCo6IkvOG3abIQC5XIVX/YLR0/NXPpvJCfwyxqAhn6vnrXo25iN5S//sSR5E+SXT+Coc3F+dto7vzzpnbd7p73TlU/s+UpNOBaVqSsvP74LR7GArY+nqA2tgnNW027rovaRvgJN82f+ZwEBCo7BHAMPmguxCZXzwRxD+MFAH4LWGO3L4qOLz+a3bPyWxdgwzd/av19VbXgIjXrNZ/M3QYMHzSb8W6NNtbz6s6pbkPWzhLSo3zDNK/hgWjyAPvDgqla5ZbQPfahc6Ssp0bet8mCrJdF6KIe/3HgmmJAvF63DD6aVMFqXv1UBtrg0qO0zDJXGRqFiaZhGGf+O4SjvAEfHcFQduX0wJpgcNZtXj9YxY6v4sinKQGn6omH9A5iD+xuyJHlAq10foyQKtAjiBOzjcphqAX048o6uVh/nGLwdFVjCy6e1UbSGF1xvyM0whznRSCEc1KJGzjQfJ0c7catk/J3QRoJ4FQCx0nPNjP686tywND4JSLbykupRsyop4WZ/Lnl4AUH08s9MXnv553r/BwAA//8=", "base64"));
  res.write(new Buffer("AwDnw/5Nv1cAAA==", "base64"));
  res.end();

  return __filename;
};