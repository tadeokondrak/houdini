# houdini-svelte

## 1.0.7

### Dependency Changes

-   Updated dependencies [[`52326b5`](https://github.com/HoudiniGraphql/houdini/commit/52326b5b54c1e722d398031e4b61281379cb8820)]:
    -   houdini@1.0.7

## 1.0.6

### Dependency Changes

-   Updated dependencies [[`8fd052c`](https://github.com/HoudiniGraphql/houdini/commit/8fd052c1d59fbb37e17da1bc42ae386a660440ed)]:
    -   houdini@1.0.6

## 1.0.5

### ✨ Features

-   [#939](https://github.com/HoudiniGraphql/houdini/pull/939) [`1e3d874`](https://github.com/HoudiniGraphql/houdini/commit/1e3d874df3edad2d02f56b414767b5046d59b198) Thanks [@luhagel](https://github.com/luhagel)! - The codegen now warns the user if they are using page/layout queries without having .js files in their `include` paths.

### Dependency Changes

-   Updated dependencies [[`f69f9f1`](https://github.com/HoudiniGraphql/houdini/commit/f69f9f1b12cf9bca5d0112db2e78c4d4e94b4845), [`92c533e`](https://github.com/HoudiniGraphql/houdini/commit/92c533e2ba0aae7ceaebe7407691ff36482a71f4)]:
    -   houdini@1.0.5

## 1.0.4

### ✨ Features

-   [#937](https://github.com/HoudiniGraphql/houdini/pull/937) [`8e18042`](https://github.com/HoudiniGraphql/houdini/commit/8e1804227ee056f3b51c00f04832f4f997fdf1bc) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Add unlisten method to subscription store

### Dependency Changes

-   Updated dependencies [[`8e18042`](https://github.com/HoudiniGraphql/houdini/commit/8e1804227ee056f3b51c00f04832f4f997fdf1bc)]:
    -   houdini@1.0.4

## 1.0.3

### Dependency Changes

-   Updated dependencies [[`c9a6c86`](https://github.com/HoudiniGraphql/houdini/commit/c9a6c86ca8873f6fe52591b17aeeecc2e6a02014), [`64af71b`](https://github.com/HoudiniGraphql/houdini/commit/64af71b11bd5f07ff2d035a72d483bcf69834bf3)]:
    -   houdini@1.0.3

## 1.0.2

### 🐛 Fixes

-   [#925](https://github.com/HoudiniGraphql/houdini/pull/925) [`2d86f6e`](https://github.com/HoudiniGraphql/houdini/commit/2d86f6eac523e6eb2739d3f5e8feab041b669391) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Fix fragment type definitions when parent is not-null

### Dependency Changes

-   Updated dependencies []:
    -   houdini@1.0.2

## 1.0.1

### Dependency Changes

-   Updated dependencies [[`0f8f7ba`](https://github.com/HoudiniGraphql/houdini/commit/0f8f7ba626caabe847e2a94d467fe965184c0afa), [`0f8f7ba`](https://github.com/HoudiniGraphql/houdini/commit/0f8f7ba626caabe847e2a94d467fe965184c0afa)]:
    -   houdini@1.0.1

## 1.0.0

For a better overview of the changes in this release, please visit the
[Release Notes](http://www.houdinigraphql.com/guides/release-notes).

### ⚠️ Breaking Changes

-   [#879](https://github.com/HoudiniGraphql/houdini/pull/879) [`ab96b1c`](https://github.com/HoudiniGraphql/houdini/commit/ab96b1cbdeb33385a36cd72ff5e7a1d04447577b) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - MutationStore.mutate returns full payload

-   [#846](https://github.com/HoudiniGraphql/houdini/pull/846) [`3245233`](https://github.com/HoudiniGraphql/houdini/commit/32452332c446a6a779a687bd80e2278f1e66ceef) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - removed the config values for specify custom cursor stores for a specific direction

-   [#841](https://github.com/HoudiniGraphql/houdini/pull/841) [`55e750c`](https://github.com/HoudiniGraphql/houdini/commit/55e750c8c90121ba021c597fa9c66364bc2dca8d) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Removed `@manual_load` since queries defined inline in a component are no longer automatically loaded. In order to opt into generated loads for your inline queries, use the `@load` directive

### ✨ Features

-   [#846](https://github.com/HoudiniGraphql/houdini/pull/846) [`3245233`](https://github.com/HoudiniGraphql/houdini/commit/32452332c446a6a779a687bd80e2278f1e66ceef) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Added support for bidirectional pagination when using connections

-   [#847](https://github.com/HoudiniGraphql/houdini/pull/847) [`308ed34`](https://github.com/HoudiniGraphql/houdini/commit/308ed34af9be4913a1d5c9ac998ff53599601667) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Add event argument to mutation for server-side operations

### 🐛 Fixes

-   [#897](https://github.com/HoudiniGraphql/houdini/pull/897) [`1298fef`](https://github.com/HoudiniGraphql/houdini/commit/1298fef24b7a0b8e377b1de4ff2892317516c75f) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Invalid integer route paramters get unmarshaled as undefined

-   [#895](https://github.com/HoudiniGraphql/houdini/pull/895) [`d03ce3b`](https://github.com/HoudiniGraphql/houdini/commit/d03ce3ba3ab70bc3e94d81b87a1b1111cf206a50) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Fix sourcemaps

## 0.20.4

### Patch Changes

-   [#868](https://github.com/HoudiniGraphql/houdini/pull/868) [`9808b74`](https://github.com/HoudiniGraphql/houdini/commit/9808b74176bc36fd847372ca7973605c725a5e51) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Fix bug preventing server.js and page.gql files from coexisting

-   Updated dependencies []:
    -   houdini@0.20.4

## 0.20.3

## 0.20.2

## 0.20.1

-   [#820](https://github.com/HoudiniGraphql/houdini/pull/820) [`c595749`](https://github.com/HoudiniGraphql/houdini/commit/c5957491bda52fae7eb96042203a47bab4d7cd9a) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Fix build issue with monorepos

## 0.20.0

### ⚠️ Breaking Changes

-   [#789](https://github.com/HoudiniGraphql/houdini/pull/789) [`a8237aa`](https://github.com/HoudiniGraphql/houdini/commit/a8237aa5c309de68b126ed55c6fe3fd6f1b24503) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Removed this.error and this.redirect from function variables

-   [#800](https://github.com/HoudiniGraphql/houdini/pull/800) [`a107f6c`](https://github.com/HoudiniGraphql/houdini/commit/a107f6ce22f33719ed8c5fbeb49eb854d3238e9f) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Rename `isFetching` to `fetching`

### ✨ Features

-   [#789](https://github.com/HoudiniGraphql/houdini/pull/789) [`a8237aa`](https://github.com/HoudiniGraphql/houdini/commit/a8237aa5c309de68b126ed55c6fe3fd6f1b24503) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Query variables can now be inferred from route params

### 🐛 Fixes

-   [#804](https://github.com/HoudiniGraphql/houdini/pull/804) [`2c89fab`](https://github.com/HoudiniGraphql/houdini/commit/2c89fab5b20213f6636a92ed5232c922a1b2785a) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Fix onError error type

-   [#803](https://github.com/HoudiniGraphql/houdini/pull/803) [`4c1c4f6`](https://github.com/HoudiniGraphql/houdini/commit/4c1c4f68a592ab78a496b1d2ddf05e3734b60fe2) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Mutation store result types can never be undefined

## 0.19.4

## 0.19.3

### 🐛 Fixes

-   [#793](https://github.com/HoudiniGraphql/houdini/pull/793) [`d3ba00f`](https://github.com/HoudiniGraphql/houdini/commit/d3ba00f62d71d8cc7c2e89c8eb32a20370ecfe07) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Fix erorr when using satisfies expression with load functions

## 0.19.2

### ✨ Features

-   [#786](https://github.com/HoudiniGraphql/houdini/pull/786) [`0437769`](https://github.com/HoudiniGraphql/houdini/commit/043776906a1d7ec19e2e451ed4988614b14678e9) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Static plugin config value can now be used to remove session infrastructure from application

## 0.19.1

## 0.19.0

### ⚠️ Breaking Changes

-   [#760](https://github.com/HoudiniGraphql/houdini/pull/760) [`f0ac816`](https://github.com/HoudiniGraphql/houdini/commit/f0ac81668d1cc630eb0a120c62a088cdc78cc84f) Thanks [@jycouet](https://github.com/jycouet)! - Global stores moved to a separate package `houdini-plugin-svelte-global-stores`. You can check the documentation and configuration [here](https://github.com/HoudiniGraphql/houdini/tree/main/packages/houdini-plugin-svelte-global-stores).

### ✨ Features

-   [#776](https://github.com/HoudiniGraphql/houdini/pull/776) [`8f70291`](https://github.com/HoudiniGraphql/houdini/commit/8f702919e9a496a3de8cb22e035d4525a354a5d1) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - graphql template tag can now be used as a function for automatic typing

-   [#779](https://github.com/HoudiniGraphql/houdini/pull/779) [`5739346`](https://github.com/HoudiniGraphql/houdini/commit/573934608c731a56fbdd7e0383fb6cb3be2faa4b) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Load env from .env files

-   [#778](https://github.com/HoudiniGraphql/houdini/pull/778) [`9a09f31`](https://github.com/HoudiniGraphql/houdini/commit/9a09f31c6b6681213f4931a7c520471d87814d42) Thanks [@jycouet](https://github.com/jycouet)! - bump init script to follow latest kit init (without dedicated preprocessor)

## 0.18.3

## 0.18.2

### 🐛 Fixes

-   [#768](https://github.com/HoudiniGraphql/houdini/pull/768) [`b359ff0`](https://github.com/HoudiniGraphql/houdini/commit/b359ff0eff5dfd33164d3ec8cfb1b462258f60e4) Thanks [@thokra](https://github.com/thokra)! - Fix generated types referencing onError, afterLoad and beforeLoad

## 0.18.1

### ✨ Features

-   [#763](https://github.com/HoudiniGraphql/houdini/pull/763) [`9c096a0`](https://github.com/HoudiniGraphql/houdini/commit/9c096a030219c9d4ff2cde1f6e35f47b7f14d92b) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - bump kit peerDepency to 1.0.0

## 0.18.0

### ⚠️ Breaking Changes

-   [#752](https://github.com/HoudiniGraphql/houdini/pull/752) [`d1fcc47`](https://github.com/HoudiniGraphql/houdini/commit/d1fcc479791c3477cee4b5fd006c44cd9aab60b9) Thanks [@jycouet](https://github.com/jycouet)! - exported functions now starts with an "\_"

-   [#754](https://github.com/HoudiniGraphql/houdini/pull/754) [`ca6b4ec`](https://github.com/HoudiniGraphql/houdini/commit/ca6b4ec1d9906cad9c624c05a8ab4e7487d23900) Thanks [@jycouet](https://github.com/jycouet)! - deprecated usage of parentID in append and prepend
    @houdini(load: false) was removed in favor of @manual_load
    @houdini(mask: true | false) -> @mask_enable / @mask_disable
    config disableMasking is now replaced by defaultFragmentMasking

### 🐛 Fixes

-   [#747](https://github.com/HoudiniGraphql/houdini/pull/747) [`7a34399`](https://github.com/HoudiniGraphql/houdini/commit/7a34399623d978f1ea89ec0a3fcf847893aa48fc) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Fix issue when working with unions and interfaces

### ✨ Features

-   [#738](https://github.com/HoudiniGraphql/houdini/pull/738) [`758683f`](https://github.com/HoudiniGraphql/houdini/commit/758683fdf5d28eaf995eae8acb3c03e231f91b56) Thanks [@jycouet](https://github.com/jycouet)! - client path is now optional and defaults to ./src/client

-   [#746](https://github.com/HoudiniGraphql/houdini/pull/746) [`e07c090`](https://github.com/HoudiniGraphql/houdini/commit/e07c0902f02495ecd9872f9488864294d58d80f5) Thanks [@524c](https://github.com/524c)! - Only generate route types if there are page files present

## 0.17.14

### 🐛 Fixes

-   [#725](https://github.com/HoudiniGraphql/houdini/pull/725) [`257e2ee`](https://github.com/HoudiniGraphql/houdini/commit/257e2eeeb64b0bb26236d637adc696068932cab3) Thanks [@jycouet](https://github.com/jycouet)! - following kit next.560 [breaking] Rename prerendering to building

## 0.17.13

### 🐛 Fixes

-   [#719](https://github.com/HoudiniGraphql/houdini/pull/719) [`2a54094`](https://github.com/HoudiniGraphql/houdini/commit/2a5409487348fc491af225c524e6b76268db657a) Thanks [@sjcobb2022](https://github.com/sjcobb2022)! - Fixed: BeforeLoadEvent having wrong type

### ✨ Features

-   [#717](https://github.com/HoudiniGraphql/houdini/pull/717) [`e4c9896`](https://github.com/HoudiniGraphql/houdini/commit/e4c9896350661029945abb8bb5c4308a90cd6adf) Thanks [@jycouet](https://github.com/jycouet)! - set cached info stores asap, even in fake await scenario

## 0.17.12

### 🐛 Fixes

-   [#715](https://github.com/HoudiniGraphql/houdini/pull/715) [`493606a`](https://github.com/HoudiniGraphql/houdini/commit/493606aa06b00e7a588a556830c835ac94d1fb64) Thanks [@sjcobb2022](https://github.com/sjcobb2022)! - Fix onError and beforeLoad types

## 0.17.11

### 🐛 Fixes

-   [#708](https://github.com/HoudiniGraphql/houdini/pull/708) [`197bff7`](https://github.com/HoudiniGraphql/houdini/commit/197bff7d94c2600187b5ab76ed3168957b4a8f31) Thanks [@jycouet](https://github.com/jycouet)! - import VariableFunction type when a function type is defined

## 0.17.10

### 🐛 Fixes

-   [#702](https://github.com/HoudiniGraphql/houdini/pull/702) [`83d9340`](https://github.com/HoudiniGraphql/houdini/commit/83d934072641acad3a959e49a14f29d838c960bf) Thanks [@sjcobb2022](https://github.com/sjcobb2022)! - FIX: type imports not generated correctly for non-fetching endpoints

-   [#703](https://github.com/HoudiniGraphql/houdini/pull/703) [`cb29530`](https://github.com/HoudiniGraphql/houdini/commit/cb295302f05e6a897eadf2ca95595d8c9c62e6ef) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Remove unused functions in runtime

## 0.17.9

-   Updated dependencies [[`6e36775`](https://github.com/HoudiniGraphql/houdini/commit/6e367755d902eca3242519b4c609c0d5bc76f4ff)]:
    -   houdini@0.17.9

## 0.17.8

### 🐛 Fixes

-   [#691](https://github.com/HoudiniGraphql/houdini/pull/691) [`e707fbe`](https://github.com/HoudiniGraphql/houdini/commit/e707fbec36c223ad549c31df6bfa68ae312ffa9a) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Added artifact import to subscription stores

-   Updated dependencies []:
    -   houdini@0.17.8

## 0.17.7

### 🐛 Fixes

-   [#689](https://github.com/HoudiniGraphql/houdini/pull/689) [`db67e82`](https://github.com/HoudiniGraphql/houdini/commit/db67e822fcec2362538bda548d058fa7e3397ffa) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Fix duplicate import for generated subscription stores

## 0.17.6

### 🐛 Fixes

-   [#686](https://github.com/HoudiniGraphql/houdini/pull/686) [`f138bff`](https://github.com/HoudiniGraphql/houdini/commit/f138bff8854181da63b545f54462b198794e2bbc) Thanks [@jycouet](https://github.com/jycouet)! - isFetching will switch only when a network call is happening (and starts at true for queries)

### ✨ Features

-   [#676](https://github.com/HoudiniGraphql/houdini/pull/676) [`b7a07a3`](https://github.com/HoudiniGraphql/houdini/commit/b7a07a37ec1fd2fe7b9e6ca34e9e2beb53b84bce) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Add config for users to specify custom stores

-   [#673](https://github.com/HoudiniGraphql/houdini/pull/673) [`3986d5e`](https://github.com/HoudiniGraphql/houdini/commit/3986d5e5491565a19fabc440972ef4d95d548e92) Thanks [@sjcobb2022](https://github.com/sjcobb2022)! - Improve generated types for routes

## 0.17.5

### 🐛 Fixes

-   [#659](https://github.com/HoudiniGraphql/houdini/pull/659) [`579fb0b`](https://github.com/HoudiniGraphql/houdini/commit/579fb0bd4ccc5ee6e9aad0cc6278b0a9bfa972d1) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Improve typing for loadAll

## 0.17.3

### 🐛 Fixes

-   [#643](https://github.com/HoudiniGraphql/houdini/pull/643) [`35b189f`](https://github.com/HoudiniGraphql/houdini/commit/35b189f8cc494ce4f80d54c00736e9dd8d3c69e7) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Fix error preventing session in certain node versions

## 0.17.2

### 🐛 Fixes

-   [#639](https://github.com/HoudiniGraphql/houdini/pull/639) [`cfdb009`](https://github.com/HoudiniGraphql/houdini/commit/cfdb00907829576b142366bad8835e2d32f3ea78) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Fix error with generated route types

-   [#633](https://github.com/HoudiniGraphql/houdini/pull/633) [`8e52a90`](https://github.com/HoudiniGraphql/houdini/commit/8e52a907642003c3b9c9f9b2a4c9824e49136b5d) Thanks [@jycouet](https://github.com/jycouet)! - fix: queries will be sent once if they are defined in +(page|layout).gql

## 0.17.1

### 🐛 Fixes

-   [#630](https://github.com/HoudiniGraphql/houdini/pull/630) [`02d8fc4`](https://github.com/HoudiniGraphql/houdini/commit/02d8fc47f71980bd2b6492162b8e57808447bdbc) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Fix relative imports from root layout

## 0.17.0

### ⚠️ Breaking Changes

-   [#593](https://github.com/HoudiniGraphql/houdini/pull/593) [`c1363fe`](https://github.com/HoudiniGraphql/houdini/commit/c1363fe938ab94281272cad8939b892fd705a803) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Split houdini into two packages: `houdini` and `houdini-svelte`

### ✨ Features

-   [#593](https://github.com/HoudiniGraphql/houdini/pull/593) [`c1363fe`](https://github.com/HoudiniGraphql/houdini/commit/c1363fe938ab94281272cad8939b892fd705a803) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Adding layout.gql special file

-   [#610](https://github.com/HoudiniGraphql/houdini/pull/610) [`3168f7d`](https://github.com/HoudiniGraphql/houdini/commit/3168f7dffd06f5074d08652d2d2c459377bc73d6) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Generate variable function definitions for non-route queries

### 🐛 Fixes

-   [#613](https://github.com/HoudiniGraphql/houdini/pull/613) [`eb3ffe1`](https://github.com/HoudiniGraphql/houdini/commit/eb3ffe1fbf14180210464863cb7e2ca29892a1fe) Thanks [@AlecAivazis](https://github.com/AlecAivazis)! - Avoid unnecessary data prop being added to route
