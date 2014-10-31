##### Signed by https://keybase.io/talon
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1

iQIcBAABAgAGBQJUUwKUAAoJEAfEbvdgavFLknkP/im1nkQcidm2ThUDBBZoPs6i
lvJeGinGOzhD5G6cdhNo2hbm5Tp58fXQiGRNe31UQ/tlnBMIgZw71lrAlI0zYqo3
rArG3XCPNeGNCqyopUTsd7A8+8jLVTdBk1hdrQ/LxaO6roR4U0lVecCjmaRHfAbW
11rGJGM1C2uJKYyfGShqMfQqJP5F2brSmH6qUS7BM6Y3hjLXHO6ff8xiD+VXyyjB
JvwfBlvRLps8zB0kV+H6HFygF7viWoc0C6HPYA+7HI2M25G+B86u0DZm93G/M/Nq
m+2lRU+R2j67ufcCA1A6gAhzELkbwVus1XEsSiUAOx9+8WqshEH+QH/vCWDbW5Su
tw/LFDgGeY46xJsboUfni0bnoG8OaB1BhAooOrYIdm+7hTTXNFYOaKIhF8nDPXke
Zduqcr0fsHCxGgHvT0V0QmLhmTImcNLSiCBF1bdrtVmuNgbVhoz8Q81VHh9XSjtV
W+MlgAMf47MZcc9d5Mph9YM3MBimk02Is6JF1gwxFnRKAR7FSTW66v9oiYQQF0jB
OpyA85j7ynH7a2Doewvpxfausynv3sLmF/VrRcMtx4ZSRk+x0H4WDuDsS3Fkj/Md
rQF+yQeLmHzqyGWJpSaQIB3mkFjzNNGF8hzNxr4imltv8E++1EIq9Yvgoi2hUNEz
0SMYxJtlvWQNYnCjk9Ul
=I5i1
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size    exec  file                      contents                                                        
              ./                                                                                        
97              .gitignore              d11ca7319245e37c399ba3a881caf35ab073d95bf755351df4ec899077173ba3
1072            LICENSE                 c1f3286c499b7fb8b24ba6ffd47f424be961b80a7c494eac51f3051349a1c764
688             README.md               c8ff2f0edb5f7671cdbaeca588cc6c7472bd21adc680be9b33b655e0b18e5c0a
                bin/                                                                                    
1293    x         powpow.js             eb9ca690db7ce05e07070659cb2a8e57f12c57bff3461ba93e10801d41e4774d
                lib/                                                                                    
                  powpow-add/                                                                           
935                 index.js            d381d64e80081ab644af18a27d3445d9073e7e871c7978a16dffc684dd4afa79
                  powpow-ls/                                                                            
608                 index.js            74de3d0cb716c419400ab41ca1257e4676afaf96c52adc0faa522e01338e96c0
                  powpow-new/                                                                           
968                 index.js            e7bdd686f2ffadc4fa2dbfe4dcc6ec738875cef3e7278fca607286b0957daaec
                  powpow-rm/                                                                            
889                 index.js            4a7d2875f2bd8089befaa969e7feb665135ae67451683dabd45a0c98f17236d6
                module_template/                                                                        
                  inc/                                                                                  
534                 my_module_js.inc    35f46095436847faf4697022ea2fa15fc8188abf6d9715921ebc835f21efd905
                  js/                                                                                   
2616                Gulpfile.js         4bb5bfca974b1f394b6c77d6ed800c5cff32c0bf296a0f088da65866e2e7fee9
                    build/                                                                              
701497                my_module.js      64051c56d8029c167ae1c182a6bd1cb7c17673d3a7f10ab780c61035f71f901d
20333                 my_module.min.js  0476f3b87642bd9dc24498855ebab64f2c32c00824f400ba941aa895525cc668
2254                karma.conf.js       ffbf0f8f83729681a0604c0706531ac4b40151d1d03ebcfc392c8ccbcc193967
806                 package.json        3fc0659a9a8935cec91ab32999b29661c26a79f9c6fcb4d3477b9138cc4bf8fa
                    src/                                                                                
                      lib/                                                                              
                        hello-world/                                                                    
57                        index.js      8754df3dc3719847e3aadb891cbbf678a196cdfdca431198133a4f141f66aae1
1876                  my_module.js      cc4cdb07800c150643a88b0c987cb3a582fbc348ce48f2c5101f9c4c38d68d63
                    tests/                                                                              
141                   meta-test.js      bef5284f5d31b437a9eeae05f68a2485f2eb2e2c4fb047b04e5b4523e22e97f3
82                my_module.info        d075d4f2806c9ebbc835af85c86d056fb90b48cd645ef498571932cac0fa038e
1380              my_module.module      861bffef14d3aa6168f1892e45a9b7c28e3e49af75192fa4eec89286efd29350
617             package.json            90d06b8ae823cbc920b82435713595901dde7a2eca18a2e9063624c18d16eaa9
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.9 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing