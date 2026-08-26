# @fission-ai/openspec

## [3.1.0](https://github.com/markusbrand/OpenSpec/compare/v3.0.0...v3.1.0) (2026-08-26)


### Features

* **tokens:** implement token usage tracking across CLI and GitHub adapter ([e938afc](https://github.com/markusbrand/OpenSpec/commit/e938afcb5f72d55d10427c77a84df30f6fc3436e))


### Bug Fixes

* **ci:** restrict npm publish to canonical repository ([75963ef](https://github.com/markusbrand/OpenSpec/commit/75963ef772cfa806a74f6ae7df86440a16fb5641))

## [3.0.0](https://github.com/markusbrand/OpenSpec/compare/v2.0.0...v3.0.0) (2026-08-26)


### ⚠ BREAKING CHANGES

* **stores:** replace workspaces and initiatives with stores ([#1190](https://github.com/markusbrand/OpenSpec/issues/1190))

### Features

* **adapters:** follow the Windsurf rename to Devin Desktop ([#1167](https://github.com/markusbrand/OpenSpec/issues/1167)) ([1637856](https://github.com/markusbrand/OpenSpec/commit/1637856c423f2e84457652d1ab58885fe9744fb2))
* add /opsx:archive command for archiving completed changes ([#451](https://github.com/markusbrand/OpenSpec/issues/451)) ([b7f5a42](https://github.com/markusbrand/OpenSpec/commit/b7f5a429de063f97959614f64b81943be8a43050))
* add /opsx:explore command for exploratory thinking ([#467](https://github.com/markusbrand/OpenSpec/issues/467)) ([d49a88c](https://github.com/markusbrand/OpenSpec/commit/d49a88c3bb1d45656872c6533c7c03b8cf20c50b))
* add /opsx:ff command for fast-forward artifact creation ([#448](https://github.com/markusbrand/OpenSpec/issues/448)) ([1bc8495](https://github.com/markusbrand/OpenSpec/commit/1bc849554c12896f60840df7457ee37f69112d19))
* add /opsx:sync command for syncing delta specs to main specs ([#450](https://github.com/markusbrand/OpenSpec/issues/450)) ([a5c10ed](https://github.com/markusbrand/OpenSpec/commit/a5c10ed5e7147d8b0e1c7319c308b930ab215be4))
* add $ARGUMENTS support to apply slash command ([#244](https://github.com/markusbrand/OpenSpec/issues/244)) ([9cdb074](https://github.com/markusbrand/OpenSpec/commit/9cdb0743f2de7250e7846ba1a906bd47b91473c2))
* add agent schema selection to experimental artifact workflow ([#445](https://github.com/markusbrand/OpenSpec/issues/445)) ([ed924ff](https://github.com/markusbrand/OpenSpec/commit/ed924ffcff3ad045d891f7fdbc881af2bf9e1026))
* add Agent Skills for experimental artifact workflow ([#424](https://github.com/markusbrand/OpenSpec/issues/424)) ([cac5404](https://github.com/markusbrand/OpenSpec/commit/cac54042ce6e8e05de25c1cd79c2e605312090c4))
* add argument support to archive slash command ([#183](https://github.com/markusbrand/OpenSpec/issues/183)) ([63b8a3e](https://github.com/markusbrand/OpenSpec/commit/63b8a3e9f96072052d75a3a366f65bc2378fbe1c))
* add Auggie (Augment CLI) support to configuration and documenta… ([#196](https://github.com/markusbrand/OpenSpec/issues/196)) ([f82e243](https://github.com/markusbrand/OpenSpec/commit/f82e2435510396deb1305a99f759ac11fa7cc79f))
* add change creation utilities ([#408](https://github.com/markusbrand/OpenSpec/issues/408)) ([4f4af57](https://github.com/markusbrand/OpenSpec/commit/4f4af5708dd78f21908b0ca8232049ec06891d64))
* add Cline support ([#213](https://github.com/markusbrand/OpenSpec/issues/213)) ([ece61a6](https://github.com/markusbrand/OpenSpec/commit/ece61a6d682a91fb9699372e486c75d7067f6c7c))
* add CodeArts Agent skills support ([#1266](https://github.com/markusbrand/OpenSpec/issues/1266)) ([ac656c9](https://github.com/markusbrand/OpenSpec/commit/ac656c983f85d2a4c3f21d5e352892450f56d8fb))
* add CodeBuddy Code support to configuration and documentation ([#217](https://github.com/markusbrand/OpenSpec/issues/217)) ([3677e01](https://github.com/markusbrand/OpenSpec/commit/3677e0175f79c7ff9f24168c2058c20b0ea640cf))
* add CodeRabbit AI assistant support ([#221](https://github.com/markusbrand/OpenSpec/issues/221)) ([3ddf258](https://github.com/markusbrand/OpenSpec/commit/3ddf2586b44e842e551fa24d6bf94bc56d064e3f))
* add CoStrict AI assistant support  ([#240](https://github.com/markusbrand/OpenSpec/issues/240)) ([c4b6be4](https://github.com/markusbrand/OpenSpec/commit/c4b6be41c130d398bef292189c80f0987539c2c6))
* add Crush AI assistant support ([#206](https://github.com/markusbrand/OpenSpec/issues/206)) ([67ab683](https://github.com/markusbrand/OpenSpec/commit/67ab683105a5b236d0545bffbde1626892712129))
* add factory function support for slash commands ([#178](https://github.com/markusbrand/OpenSpec/issues/178)) ([b81fa1e](https://github.com/markusbrand/OpenSpec/commit/b81fa1e6cc3adc42f6753725c662d76765f720a0))
* add feedback command for submitting user feedback ([#509](https://github.com/markusbrand/OpenSpec/issues/509)) ([c86985d](https://github.com/markusbrand/OpenSpec/commit/c86985d6ec5e2e2e6995ddbc3d61d81550eb7576))
* add ForgeCode tool support ([#941](https://github.com/markusbrand/OpenSpec/issues/941)) ([ea6f380](https://github.com/markusbrand/OpenSpec/commit/ea6f380feafc99b35f430bbab165ec6d2678b897))
* Add Gemini CLI support with TOML-based slash commands ([#256](https://github.com/markusbrand/OpenSpec/issues/256)) ([9b6a763](https://github.com/markusbrand/OpenSpec/commit/9b6a763eb84ce536d62b768bd3bebf7eb1440d1f))
* add Hermes Agent support ([#1292](https://github.com/markusbrand/OpenSpec/issues/1292)) ([4a0f15d](https://github.com/markusbrand/OpenSpec/commit/4a0f15d3b2f53b3c3fadf12bc8662af644397bb7))
* add instruction loader for template loading and change context ([#414](https://github.com/markusbrand/OpenSpec/issues/414)) ([11e1955](https://github.com/markusbrand/OpenSpec/commit/11e195575f1413199446b1ca1e52ad4b936ace9f))
* add Kimi CLI skills-only support ([#1003](https://github.com/markusbrand/OpenSpec/issues/1003)) ([342ed43](https://github.com/markusbrand/OpenSpec/commit/342ed43e694abba65a3ea275f94ba3b77df85da3))
* add Kiro CLI support ([#707](https://github.com/markusbrand/OpenSpec/issues/707)) ([fbef555](https://github.com/markusbrand/OpenSpec/commit/fbef555041d89d98eec623dc5efaa4d1be2cae29))
* add Lingma IDE support to configuration ([5ac1e12](https://github.com/markusbrand/OpenSpec/commit/5ac1e12b83005c471a426c8e2cb0a18faf55211e))
* add Lingma IDE support to configuration ([5ac1e12](https://github.com/markusbrand/OpenSpec/commit/5ac1e12b83005c471a426c8e2cb0a18faf55211e))
* add Lingma IDE support to configuration ([#864](https://github.com/markusbrand/OpenSpec/issues/864)) ([5ac1e12](https://github.com/markusbrand/OpenSpec/commit/5ac1e12b83005c471a426c8e2cb0a18faf55211e))
* add MiniMax Code skills support ([#1214](https://github.com/markusbrand/OpenSpec/issues/1214)) ([161f945](https://github.com/markusbrand/OpenSpec/commit/161f9454a372aab67c495d780928bba89c829f3e))
* add nix flake support (sorry for this duplicate) ([#459](https://github.com/markusbrand/OpenSpec/issues/459)) ([ed4d965](https://github.com/markusbrand/OpenSpec/commit/ed4d96520809b3c1bdcbb2d44be89d68eb78c8c8))
* add non-interactive options to openspec init ([#122](https://github.com/markusbrand/OpenSpec/issues/122)) ([cc9d540](https://github.com/markusbrand/OpenSpec/commit/cc9d5402ffc17223e70bfb0ab374333a30f0cd4a))
* add Oh My Pi (OMP) tool support ([#1276](https://github.com/markusbrand/OpenSpec/issues/1276)) ([8886e3a](https://github.com/markusbrand/OpenSpec/commit/8886e3ae226a5ad70e1c65ece622ee409977a058))
* add openspec dashboard command for web-based project browsing ([#615](https://github.com/markusbrand/OpenSpec/issues/615)) ([f45ba73](https://github.com/markusbrand/OpenSpec/commit/f45ba73a5f543c213abb9298cf0072b8ca555b8d))
* add per-change schema metadata (.openspec.yaml) ([#443](https://github.com/markusbrand/OpenSpec/issues/443)) ([1786684](https://github.com/markusbrand/OpenSpec/commit/1786684af6831cc3385bd72da9250518f76d1bb6))
* add Qoder CLI support to configuration and documentation ([#261](https://github.com/markusbrand/OpenSpec/issues/261)) ([4e93d7a](https://github.com/markusbrand/OpenSpec/commit/4e93d7a881313f90c22aae64caab2abd828e1858))
* add Qwen Code support with slash command integration ([#250](https://github.com/markusbrand/OpenSpec/issues/250)) ([8f9c3c7](https://github.com/markusbrand/OpenSpec/commit/8f9c3c7d0b1134f388dfc6fff8e72400004046d8))
* add slash commands to artifact-experimental-setup ([#442](https://github.com/markusbrand/OpenSpec/issues/442)) ([51fb10d](https://github.com/markusbrand/OpenSpec/commit/51fb10db5ea19d2b672ae8ab4646bc17cf8b7b12))
* add smart sync check to /opsx:archive command ([#452](https://github.com/markusbrand/OpenSpec/issues/452)) ([cd172a4](https://github.com/markusbrand/OpenSpec/commit/cd172a4427ca98a5f1157febf3a22385623db539))
* add spec-driven-github schema and openspec-issue adapter tooling ([94d6ca6](https://github.com/markusbrand/OpenSpec/commit/94d6ca604453fd8b85a53dd49278787e8f40ba3f))
* add support for IBM Bob coding assistant ([#886](https://github.com/markusbrand/OpenSpec/issues/886)) ([94d651d](https://github.com/markusbrand/OpenSpec/commit/94d651de8c10810983de6cd2920625ce42cc51ad))
* add support for Pi (pi.dev) coding agent ([#735](https://github.com/markusbrand/OpenSpec/issues/735)) ([e4c32db](https://github.com/markusbrand/OpenSpec/commit/e4c32dbe074823efc2a7eb75ac18c8501b6e8656))
* add Trae command adapter ([#1090](https://github.com/markusbrand/OpenSpec/issues/1090)) ([3f0ca3f](https://github.com/markusbrand/OpenSpec/commit/3f0ca3f6ce6f2ec41260c5cbe7954b7e46adcf43))
* **archive:** let a change retire a capability it empties ([#1484](https://github.com/markusbrand/OpenSpec/issues/1484)) ([521ee33](https://github.com/markusbrand/OpenSpec/commit/521ee33e6ece269241b45e08017ee60f13fdef08))
* change the frontmatter of the Codebuddy Slash Commands ([#462](https://github.com/markusbrand/OpenSpec/issues/462)) ([3f67deb](https://github.com/markusbrand/OpenSpec/commit/3f67debf65f1287fb508a6fc3d7d1c4d67f83e66))
* **ci:** migrate to npm OIDC trusted publishing ([#390](https://github.com/markusbrand/OpenSpec/issues/390)) ([6de04f3](https://github.com/markusbrand/OpenSpec/commit/6de04f3b2b3656102940817e909ad3963417a797))
* **cli:** add interactive UI for artifact experimental setup ([#560](https://github.com/markusbrand/OpenSpec/issues/560)) ([ae83b4e](https://github.com/markusbrand/OpenSpec/commit/ae83b4e16d67f20992309d53a9975691b32fb91a))
* **cli:** add multi-provider skill generation support ([#556](https://github.com/markusbrand/OpenSpec/issues/556)) ([d485281](https://github.com/markusbrand/OpenSpec/commit/d48528134bdb65508feb4045881cdee760e105a5))
* **cli:** add openspec config command for global configuration management ([#382](https://github.com/markusbrand/OpenSpec/issues/382)) ([971f8ca](https://github.com/markusbrand/OpenSpec/commit/971f8ca4a36db8ba7dd591eef09434584b6d3dc4))
* **cli:** add schema management commands ([#525](https://github.com/markusbrand/OpenSpec/issues/525)) ([3cdcdfc](https://github.com/markusbrand/OpenSpec/commit/3cdcdfca8e84fa113ebcdd248fd8d6273af3bfa8))
* **cli:** improve artifact experimental setup with refresh detection ([#561](https://github.com/markusbrand/OpenSpec/issues/561)) ([9381bd3](https://github.com/markusbrand/OpenSpec/commit/9381bd3b24f04d20a329cb3662fe895a945aa6df))
* **cli:** merge init and experimental commands ([#564](https://github.com/markusbrand/OpenSpec/issues/564)) ([cf8b621](https://github.com/markusbrand/OpenSpec/commit/cf8b6212c8bf1e8c56aaf80ece02830d6de08b6f))
* **cli:** merge init and experimental commands ([#565](https://github.com/markusbrand/OpenSpec/issues/565)) ([39bebef](https://github.com/markusbrand/OpenSpec/commit/39bebefcc49deb0bbef8bc1e6ba32f0392e5c75f))
* **codex:** make Codex skills-only and retire managed custom prompts ([#1283](https://github.com/markusbrand/OpenSpec/issues/1283)) ([79f1dac](https://github.com/markusbrand/OpenSpec/commit/79f1dac6681d4e7ab5f6181e6daff95d8582b864))
* **config:** add project-level configuration via openspec/config.yaml ([#499](https://github.com/markusbrand/OpenSpec/issues/499)) ([20714c1](https://github.com/markusbrand/OpenSpec/commit/20714c1c28c2f77a09917894edf98da6c8047867))
* **copilot:** make cloud coding-agent files opt-in ([#1517](https://github.com/markusbrand/OpenSpec/issues/1517)) ([73207a6](https://github.com/markusbrand/OpenSpec/commit/73207a6f2cd235729ac3fe3cb1e44152b8f63f12))
* **core:** implement global config directory with XDG support ([#377](https://github.com/markusbrand/OpenSpec/issues/377)) ([5129a8c](https://github.com/markusbrand/OpenSpec/commit/5129a8cf964b4999f4353faa3689afac60cee7d7))
* enhance artifact instructions with inline guidance and XML output ([#422](https://github.com/markusbrand/OpenSpec/issues/422)) ([ea5aa0e](https://github.com/markusbrand/OpenSpec/commit/ea5aa0e5629b787b0d74dbd860b599ad6a540958))
* enhance list command with last modified timestamps and sorting ([#421](https://github.com/markusbrand/OpenSpec/issues/421)) ([48b5ed9](https://github.com/markusbrand/OpenSpec/commit/48b5ed96574869528214597c484c1a4b5785f468))
* generate Copilot coding agent files on `openspec init` (github-copilot) ([#1274](https://github.com/markusbrand/OpenSpec/issues/1274)) ([7a4a745](https://github.com/markusbrand/OpenSpec/commit/7a4a745d803b698c34947eda6d73b5a24aebb58c))
* **iflow-cli:** add iFlow-cli integration ([#268](https://github.com/markusbrand/OpenSpec/issues/268)) ([19ccaab](https://github.com/markusbrand/OpenSpec/commit/19ccaabfc7ea4f7a29a9871497a95eb538ae4690))
* improve init wizard Enter key behavior ([#156](https://github.com/markusbrand/OpenSpec/issues/156)) ([eb0d50c](https://github.com/markusbrand/OpenSpec/commit/eb0d50c094a7a859e696cdae446b7000a252f6e4))
* **init:** add IDE restart instruction after init ([#323](https://github.com/markusbrand/OpenSpec/issues/323)) ([938d03b](https://github.com/markusbrand/OpenSpec/commit/938d03be9a94432f10a1687761a568f1aea4b10d))
* **init:** add language option ([#1685](https://github.com/markusbrand/OpenSpec/issues/1685)) ([c747ed1](https://github.com/markusbrand/OpenSpec/commit/c747ed1f34459ca6bc15d43ad9f68dfdf7750875))
* **init:** add schema selection for markdown and github issues workflows ([4dd7bdd](https://github.com/markusbrand/OpenSpec/commit/4dd7bddc54487e30e901d6ae52a6534dda96290e))
* **init:** add shared agents skills target ([#1303](https://github.com/markusbrand/OpenSpec/issues/1303)) ([1aa0f2a](https://github.com/markusbrand/OpenSpec/commit/1aa0f2abfc19f2487f5b8566e6eb3bf15f41c20a))
* **instructions:** add runtime context and operation guidance ([#1062](https://github.com/markusbrand/OpenSpec/issues/1062)) ([eac2973](https://github.com/markusbrand/OpenSpec/commit/eac2973819037727b10214f70db2f54d82f2d891))
* make apply instructions schema-aware ([#444](https://github.com/markusbrand/OpenSpec/issues/444)) ([d737057](https://github.com/markusbrand/OpenSpec/commit/d73705736f23652f76c178d51a548c3919bed31b))
* onboarding skill and comprehensive documentation overhaul ([#574](https://github.com/markusbrand/OpenSpec/issues/574)) ([3261ccf](https://github.com/markusbrand/OpenSpec/commit/3261ccf6dc49fd07bafbf03dd812b4f8e387735e))
* **resolver:** add project-local schema support ([#522](https://github.com/markusbrand/OpenSpec/issues/522)) ([adda63e](https://github.com/markusbrand/OpenSpec/commit/adda63e17ae3bec1126f2a4e93919150c2135847))
* restructure schemas as directories with templates ([#411](https://github.com/markusbrand/OpenSpec/issues/411)) ([ab47cc6](https://github.com/markusbrand/OpenSpec/commit/ab47cc6b00ee021b0d07fed229dfabfd3ceacfda))
* **roocode:** add RooCode integration (configurator, slash commands, templates) ([#288](https://github.com/markusbrand/OpenSpec/issues/288)) ([c4b0826](https://github.com/markusbrand/OpenSpec/commit/c4b0826da77c731dd82da57cffa942f31c7d6d51))
* **schema:** resolve symlinked schema directories ([#1299](https://github.com/markusbrand/OpenSpec/issues/1299)) ([5e365b9](https://github.com/markusbrand/OpenSpec/commit/5e365b962f2292002b16da46c65f6073e37a27e2))
* **show:** diff delta requirements against the main specs ([#980](https://github.com/markusbrand/OpenSpec/issues/980)) ([dd7cea3](https://github.com/markusbrand/OpenSpec/commit/dd7cea3ffed4a22421dce02f54c37c4f076b44f0))
* simplify skill installation with profiles and smart defaults ([#726](https://github.com/markusbrand/OpenSpec/issues/726)) ([4ba2690](https://github.com/markusbrand/OpenSpec/commit/4ba26902dfecf6f54c5a729993e012a57f4e2877))
* simplify skill installation with profiles and smart defaults init ([#719](https://github.com/markusbrand/OpenSpec/issues/719)) ([5fd8e9d](https://github.com/markusbrand/OpenSpec/commit/5fd8e9d66c3b6b116e7af814a6013c2d9c4958dd))
* **skills:** add /opsx:verify change proposal ([#497](https://github.com/markusbrand/OpenSpec/issues/497)) ([05023da](https://github.com/markusbrand/OpenSpec/commit/05023dab43b5c415a9a6d5611eece5e5bf63b1e6))
* **skills:** add Agent Skills spec optional metadata fields ([#563](https://github.com/markusbrand/OpenSpec/issues/563)) ([c157483](https://github.com/markusbrand/OpenSpec/commit/c157483685cdbf1313272d86d27c75125a5e70be))
* **skills:** add bulk-archive skill for archiving multiple changes ([#527](https://github.com/markusbrand/OpenSpec/issues/527)) ([fdb05a7](https://github.com/markusbrand/OpenSpec/commit/fdb05a723e046ed53d9a77a84f2830231affe4ee))
* **skills:** auto-approve the openspec CLI in generated skills and commands ([#1300](https://github.com/markusbrand/OpenSpec/issues/1300)) ([a5bfeda](https://github.com/markusbrand/OpenSpec/commit/a5bfedafc8b3d914fe01d05eb36ad9ad3fbe35a2))
* **skills:** implement /opsx:verify skill for validating change implementations ([#501](https://github.com/markusbrand/OpenSpec/issues/501)) ([b5b7248](https://github.com/markusbrand/OpenSpec/commit/b5b7248610d0201ac59f4c0bbf3cea5517a6fe70))
* **skills:** propose /opsx:update planning-artifact update skill ([#1278](https://github.com/markusbrand/OpenSpec/issues/1278)) ([a70dacc](https://github.com/markusbrand/OpenSpec/commit/a70daccf0ec034f23bc7df5c2c397c120ec31999))
* **skills:** publish workflow skills to skills.sh ([#1357](https://github.com/markusbrand/OpenSpec/issues/1357)) ([46a4d78](https://github.com/markusbrand/OpenSpec/commit/46a4d782229ebb104268130a16e85cb7662a2281))
* **spec:** add XDG global config directory and config command proposals ([#376](https://github.com/markusbrand/OpenSpec/issues/376)) ([4ff8930](https://github.com/markusbrand/OpenSpec/commit/4ff893048dc43a7829c96ef37eda02cc0389a867))
* **specs:** propose track-openspec-token-usage change ([b319898](https://github.com/markusbrand/OpenSpec/commit/b319898ae1dfb6dff705e3d1b7c851415689f93e))
* **status:** add --all for batch status of every active change ([#1301](https://github.com/markusbrand/OpenSpec/issues/1301)) ([a7353ae](https://github.com/markusbrand/OpenSpec/commit/a7353aea9a0b23762602badf5055a157a76f62b1))
* **stores:** replace workspaces and initiatives with stores ([#1190](https://github.com/markusbrand/OpenSpec/issues/1190)) ([a0decbe](https://github.com/markusbrand/OpenSpec/commit/a0decbe3fa9ae7818d0470cd2b0144fa09f08ec4))
* **stores:** set one default store for every repo on your machine ([#1363](https://github.com/markusbrand/OpenSpec/issues/1363)) ([5199f41](https://github.com/markusbrand/OpenSpec/commit/5199f41a5d523b9212dd2854ec5e505d2f80e2e7))
* support global paths for Codex command generation ([#622](https://github.com/markusbrand/OpenSpec/issues/622)) ([f27e5e8](https://github.com/markusbrand/OpenSpec/commit/f27e5e809afb82e6dc7b1602b68d116a89a5c36a))
* **tools:** add Atlassian Rovo Dev CLI as a first-class tool ([#1516](https://github.com/markusbrand/OpenSpec/issues/1516)) ([13e213e](https://github.com/markusbrand/OpenSpec/commit/13e213e00fc8dce0cc2974bd8d871e74f4e0165b))
* **tools:** add Command Code command adapter for /opsx-* commands ([#1622](https://github.com/markusbrand/OpenSpec/issues/1622)) ([59c16a4](https://github.com/markusbrand/OpenSpec/commit/59c16a4461254ed984d1d5e29d00af1a5610035a))
* **tools:** add Command Code support as a skills-only tool ([#1613](https://github.com/markusbrand/OpenSpec/issues/1613)) ([42d7f67](https://github.com/markusbrand/OpenSpec/commit/42d7f673bc5f13378451267c8a9d0c23f63a2d1a))
* **tools:** add Zed Agent support ([#1659](https://github.com/markusbrand/OpenSpec/issues/1659)) ([f3aa167](https://github.com/markusbrand/OpenSpec/commit/f3aa167d6e00f2907f9ff6e6b5b7623c83a46930))
* **update:** offer to upgrade a stale CLI during openspec update ([#1470](https://github.com/markusbrand/OpenSpec/issues/1470)) ([6295515](https://github.com/markusbrand/OpenSpec/commit/6295515d4da4f7c76eaed00b7f1926771eae92de))
* **validate:** accept zero-delta changes that declare skip_specs ([#1399](https://github.com/markusbrand/OpenSpec/issues/1399)) ([27b22ab](https://github.com/markusbrand/OpenSpec/commit/27b22ab4cbf530fa00e17f0f6b75a44d56777542))
* **validate:** add --archived to lint task completion of archived changes ([#1604](https://github.com/markusbrand/OpenSpec/issues/1604)) ([83be9d1](https://github.com/markusbrand/OpenSpec/commit/83be9d113e8310789c281f7c8a00ed4fad191dd5))
* **zcode:** add ZCode as supported tool ([#1209](https://github.com/markusbrand/OpenSpec/issues/1209)) ([57a88a3](https://github.com/markusbrand/OpenSpec/commit/57a88a3d126ad1c767eeffdaee4394497199c42e))


### Bug Fixes

* **adapters:** escape carriage returns in YAML frontmatter and dedupe escapeYamlValue ([#1240](https://github.com/markusbrand/OpenSpec/issues/1240)) ([cbf386b](https://github.com/markusbrand/OpenSpec/commit/cbf386bd6888f103f8ff7d59b3eab98ce5b57998))
* **adapters:** escape YAML frontmatter values consistently across all command adapters ([#1447](https://github.com/markusbrand/OpenSpec/issues/1447)) ([fb19699](https://github.com/markusbrand/OpenSpec/commit/fb196995dad017074415a638824eb546f3321cbc))
* **adapters:** reference slash commands by the names each tool registers ([#1471](https://github.com/markusbrand/OpenSpec/issues/1471)) ([9a937cb](https://github.com/markusbrand/OpenSpec/commit/9a937cb9b36fb1040bdbde3bab3fa3903944ef10))
* **adapters:** stop deleting the CoStrict and Junie commands on every run ([#1492](https://github.com/markusbrand/OpenSpec/issues/1492)) ([690a27e](https://github.com/markusbrand/OpenSpec/commit/690a27e649c4a3325daeb0f6667ebe0f82792179))
* add auto-approval for file writes in polish-release-notes workflow ([#505](https://github.com/markusbrand/OpenSpec/issues/505)) ([bf4bc24](https://github.com/markusbrand/OpenSpec/commit/bf4bc2426f0cbda7bc376b699f988d0a9c2680ad))
* add slash command hints in workflow completion messages ([#603](https://github.com/markusbrand/OpenSpec/issues/603)) ([6b545f6](https://github.com/markusbrand/OpenSpec/commit/6b545f6ebb1b05d1df2f3ca20562931c2a112e99))
* **agents:** add --no-interactive to validate commands in agent workflows ([#494](https://github.com/markusbrand/OpenSpec/issues/494)) ([d7a928b](https://github.com/markusbrand/OpenSpec/commit/d7a928b4e9724ea816af749e328a2267898fb231)), closes [#492](https://github.com/markusbrand/OpenSpec/issues/492)
* **antigravity:** update skill and workflow paths from .agent to .agents ([#830](https://github.com/markusbrand/OpenSpec/issues/830)) ([109f81f](https://github.com/markusbrand/OpenSpec/commit/109f81f17d3bb99eb6fb2c9a33ec9e8ab0680bb2))
* **apply:** surface deferred scope instead of silently simplifying tasks ([#1530](https://github.com/markusbrand/OpenSpec/issues/1530)) ([bf5099e](https://github.com/markusbrand/OpenSpec/commit/bf5099e39fdb5d7bde2adc84f49ea93afd7463e9))
* archive add-antigravity-support and fix-cline-workflows-implementation ([#423](https://github.com/markusbrand/OpenSpec/issues/423)) ([c47cdaa](https://github.com/markusbrand/OpenSpec/commit/c47cdaafe28d892cf6af428e00e512f97898e096))
* **archive:** allow REMOVED requirements when creating new spec files ([#403](https://github.com/markusbrand/OpenSpec/issues/403)) ([#404](https://github.com/markusbrand/OpenSpec/issues/404)) ([3ceef2d](https://github.com/markusbrand/OpenSpec/commit/3ceef2db725b8f70661c70b2c6a5d9fec9055ff0))
* **archive:** don't write ANSI escape codes to a redirected (non-TTY) stdout ([#1603](https://github.com/markusbrand/OpenSpec/issues/1603)) ([9ae75c8](https://github.com/markusbrand/OpenSpec/commit/9ae75c86efe5d326ffa7ca5a3fd64b1f1e7728c2))
* **archive:** fall back to copy+remove on EPERM/EXDEV (fixes [#197](https://github.com/markusbrand/OpenSpec/issues/197)) ([#605](https://github.com/markusbrand/OpenSpec/issues/605)) ([d3c3d66](https://github.com/markusbrand/OpenSpec/commit/d3c3d66e67c8ff68cafcbcbdbdd90915aa1bced2))
* **archive:** keep an existing date prefix instead of stacking a new one ([#1316](https://github.com/markusbrand/OpenSpec/issues/1316)) ([9b70481](https://github.com/markusbrand/OpenSpec/commit/9b70481df727ab9f7a00dd0118e4e09373a36fb9)), closes [#1309](https://github.com/markusbrand/OpenSpec/issues/1309)
* **archive:** keep the delta spec's Purpose in a new main spec ([#1431](https://github.com/markusbrand/OpenSpec/issues/1431)) ([6a4f0d7](https://github.com/markusbrand/OpenSpec/commit/6a4f0d7f3384486132cb9c516b635c23cadc1fa2))
* **archive:** make scenario-drift check multiplicity-aware ([#1246](https://github.com/markusbrand/OpenSpec/issues/1246)) ([#1391](https://github.com/markusbrand/OpenSpec/issues/1391)) ([470f572](https://github.com/markusbrand/OpenSpec/commit/470f5727ad31f0c5f5a5f930e25893cc9b1661ce))
* **archive:** make the scenario-drift check fence-aware, plus release-audit follow-ups ([#1475](https://github.com/markusbrand/OpenSpec/issues/1475)) ([17af60c](https://github.com/markusbrand/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f))
* **archive:** never dead-end a capability retirement ([#1699](https://github.com/markusbrand/OpenSpec/issues/1699)) ([18688c8](https://github.com/markusbrand/OpenSpec/commit/18688c8b27820da3435a47a7f11e90073724b728))
* **archive:** preserve blank lines around ## Requirements when syncing specs ([#1637](https://github.com/markusbrand/OpenSpec/issues/1637)) ([0221ac3](https://github.com/markusbrand/OpenSpec/commit/0221ac3d464ba67e55e0ac6ed216e7a61a6b41be))
* **archive:** preserve requirement order when renaming ([#1712](https://github.com/markusbrand/OpenSpec/issues/1712)) ([04b37ac](https://github.com/markusbrand/OpenSpec/commit/04b37ac1d5c852385d2effbff196ddb4fdd1700c))
* **archive:** stop failing on specs that were already synced before archiving ([#1376](https://github.com/markusbrand/OpenSpec/issues/1376)) ([7958924](https://github.com/markusbrand/OpenSpec/commit/7958924e95654af981437951e967983385da8001))
* **archive:** tell the caller which flag to pass when archive can't ask its questions ([#1483](https://github.com/markusbrand/OpenSpec/issues/1483)) ([2b3d368](https://github.com/markusbrand/OpenSpec/commit/2b3d368539132be6311e55db58899abbf5306b81))
* **archive:** treat already-synced RENAMED deltas as no-ops ([#1386](https://github.com/markusbrand/OpenSpec/issues/1386)) ([b419e96](https://github.com/markusbrand/OpenSpec/commit/b419e965bbf413cc658bbac37325ebc147b1c869))
* **archive:** treat early-synced REMOVED deltas as no-ops, plus audit follow-ups ([#1437](https://github.com/markusbrand/OpenSpec/issues/1437)) ([19d4171](https://github.com/markusbrand/OpenSpec/commit/19d41714c8b790488732687443713e406ef5aeef))
* **artifact-graph:** normalize paths for cross-platform glob compatibility ([#407](https://github.com/markusbrand/OpenSpec/issues/407)) ([9822576](https://github.com/markusbrand/OpenSpec/commit/982257677058b167f6da64190a042ad545cb965d))
* auto-trigger polish release notes on release publish ([#519](https://github.com/markusbrand/OpenSpec/issues/519)) ([2e51ae2](https://github.com/markusbrand/OpenSpec/commit/2e51ae26d3ab51ea18c2a3c81230d52cc74abe3c))
* avoid npx when applying profile changes ([#1351](https://github.com/markusbrand/OpenSpec/issues/1351)) ([a0eb70e](https://github.com/markusbrand/OpenSpec/commit/a0eb70ef070938b567e4b154bc7e2af08111d3e1))
* **build:** allow esbuild install scripts ([#1196](https://github.com/markusbrand/OpenSpec/issues/1196)) ([3e50944](https://github.com/markusbrand/OpenSpec/commit/3e50944fb0c4151768a26fb421b4b9cdb644eff6))
* canonicalize workflow artifact paths ([#971](https://github.com/markusbrand/OpenSpec/issues/971)) ([7d07101](https://github.com/markusbrand/OpenSpec/commit/7d07101363c0e210ae0202951104e94e03806cc3))
* **changelog:** convert markdown headers to bold text for proper formatting ([#532](https://github.com/markusbrand/OpenSpec/issues/532)) ([d61a49f](https://github.com/markusbrand/OpenSpec/commit/d61a49f6d58433377de08b0a57ae8207194810b9))
* **change:** resolve changes by directory instead of requiring proposal.md ([#1433](https://github.com/markusbrand/OpenSpec/issues/1433)) ([26f009d](https://github.com/markusbrand/OpenSpec/commit/26f009d940f311b99db7f310816bb166a99fb3ef))
* **ci+installers:** harden permission checks and guard completion/profile writes ([#1247](https://github.com/markusbrand/OpenSpec/issues/1247)) ([41ceebe](https://github.com/markusbrand/OpenSpec/commit/41ceebe2d80682fa20472261f7acf8129ce7e495))
* **ci:** enable release-please workflow on repository ([3c24bff](https://github.com/markusbrand/OpenSpec/commit/3c24bfff9ae919e87e3319c1cd6ec2666427c8bd))
* **ci:** tolerate disabled dependency graph in dependency-review action ([f01e0b6](https://github.com/markusbrand/OpenSpec/commit/f01e0b6a95b91bb83121e1ef609239e88901a284))
* **ci:** update release-please-action reference ([9e5d463](https://github.com/markusbrand/OpenSpec/commit/9e5d46365dc55e6750cda58d9805b18864eec05d))
* **ci:** use repository_dispatch for polish release notes ([#545](https://github.com/markusbrand/OpenSpec/issues/545)) ([e137dd3](https://github.com/markusbrand/OpenSpec/commit/e137dd398111e2a5660029f871d353be6c27e961))
* **ci:** use workflow_dispatch for polish release notes ([#533](https://github.com/markusbrand/OpenSpec/issues/533)) ([8332a09](https://github.com/markusbrand/OpenSpec/commit/8332a098118a6584a7104ccfe8e46669a1c24b7d))
* clarify spec naming convention and task checkbox format ([#595](https://github.com/markusbrand/OpenSpec/issues/595)) ([fc0d798](https://github.com/markusbrand/OpenSpec/commit/fc0d798f93153b304d039ddcce4197e484675f5c))
* **claude:** replace colon with dash in slash command frontmatter names ([#553](https://github.com/markusbrand/OpenSpec/issues/553)) ([07eaf7b](https://github.com/markusbrand/OpenSpec/commit/07eaf7b6911d3b08c86c6b6cb36ec68cabb4583f))
* **cli:** let --change find change names that exist on disk ([#1375](https://github.com/markusbrand/OpenSpec/issues/1375)) ([52a8bce](https://github.com/markusbrand/OpenSpec/commit/52a8bce1fd2bc98c51fa35cf0cfa05e799eb4404))
* **cli:** prevent hang in pre-commit hooks by using dynamic imports ([#380](https://github.com/markusbrand/OpenSpec/issues/380)) ([68e0a7e](https://github.com/markusbrand/OpenSpec/commit/68e0a7e68ecef7bdfd75001c05519c9c81705175))
* **cli:** reject missing roots for list and validate ([#1612](https://github.com/markusbrand/OpenSpec/issues/1612)) ([137404b](https://github.com/markusbrand/OpenSpec/commit/137404b423b7f23eedc2744586684df261d7ae40))
* **cli:** render multi-select prompts with checkbox markers ([#1463](https://github.com/markusbrand/OpenSpec/issues/1463)) ([caed05e](https://github.com/markusbrand/OpenSpec/commit/caed05e8b8cfcb1143435f41a45fb2572da6d63a))
* **cli:** resolve store pointer for view command ([#1455](https://github.com/markusbrand/OpenSpec/issues/1455)) ([6b3623a](https://github.com/markusbrand/OpenSpec/commit/6b3623a39e96f49995d38d642738b31f68e92039))
* **cli:** respect --no-interactive flag in validate command ([#395](https://github.com/markusbrand/OpenSpec/issues/395)) ([9ac6330](https://github.com/markusbrand/OpenSpec/commit/9ac63304306aa3835583d527c4d41916a3ddbe76))
* **cli:** use dynamic import for @inquirer/prompts in config command ([#392](https://github.com/markusbrand/OpenSpec/issues/392)) ([6d84924](https://github.com/markusbrand/OpenSpec/commit/6d84924c18db3f171118f2506906ef4a50683f56))
* **codex:** install skills in canonical agents directory ([#1511](https://github.com/markusbrand/OpenSpec/issues/1511)) ([59bfb27](https://github.com/markusbrand/OpenSpec/commit/59bfb27a7607ebde62959a9dcbc2f563662c04ad))
* **completion:** install the right completions for fish users ([#1364](https://github.com/markusbrand/OpenSpec/issues/1364)) ([f58b445](https://github.com/markusbrand/OpenSpec/commit/f58b4456925b6331f3e5902a1c57905afe7edbf5))
* **completions:** resolve Windows compatibility issues in zsh-installer tests ([#373](https://github.com/markusbrand/OpenSpec/issues/373)) ([cefb471](https://github.com/markusbrand/OpenSpec/commit/cefb4719aaf4b7702331fce7905eab62bcf29b4d))
* **completions:** stop Fish completions falling back to filenames ([#1199](https://github.com/markusbrand/OpenSpec/issues/1199)) ([ab81a4b](https://github.com/markusbrand/OpenSpec/commit/ab81a4b43a7bd769b1d2a33457b7b708b8c52516))
* **completion:** stop emitting empty switch blocks that break the PowerShell script ([#1374](https://github.com/markusbrand/OpenSpec/issues/1374)) ([da3907b](https://github.com/markusbrand/OpenSpec/commit/da3907b8a9170711c8b7f63e18352e8577cf7df5)), closes [#1293](https://github.com/markusbrand/OpenSpec/issues/1293)
* **config:** compare prototype key guards literally so analysis can see them ([#1425](https://github.com/markusbrand/OpenSpec/issues/1425)) ([040a869](https://github.com/markusbrand/OpenSpec/commit/040a86931f5398167137a483b2e8081aec13016e))
* **config:** handle null rules field in project config ([#529](https://github.com/markusbrand/OpenSpec/issues/529)) ([6c8c778](https://github.com/markusbrand/OpenSpec/commit/6c8c77804356759ed9ee90a1a3d41fe46d3f16ae))
* **config:** label the update workflow in the picker; drop "expanded-profile" wording ([#1632](https://github.com/markusbrand/OpenSpec/issues/1632)) ([207f3cc](https://github.com/markusbrand/OpenSpec/commit/207f3cc515d81bc835f9b09d06e89469fdbb09d9))
* **config:** stop warning about rules keys that belong to another schema ([#1377](https://github.com/markusbrand/OpenSpec/issues/1377)) ([285dfd7](https://github.com/markusbrand/OpenSpec/commit/285dfd7d764752b2a1e7e8cc843d613421e62652))
* **core:** canonicalize rebuilt spec EOF ([#1528](https://github.com/markusbrand/OpenSpec/issues/1528)) ([9425897](https://github.com/markusbrand/OpenSpec/commit/942589741de35f1b8896b410d7ea70295bb137c0))
* correct archive path in onboarding template ([#585](https://github.com/markusbrand/OpenSpec/issues/585)) ([c773ef6](https://github.com/markusbrand/OpenSpec/commit/c773ef6feb61f313b9094e4cb7cbdc4079c3e1cb))
* correct regex trailing whitespace and add missing projectRoot param ([#575](https://github.com/markusbrand/OpenSpec/issues/575)) ([26ed336](https://github.com/markusbrand/OpenSpec/commit/26ed336a16b45c48937eca05d592abed8c90b430))
* **deps:** patch js-yaml and nanoid advisories via pnpm overrides ([#1635](https://github.com/markusbrand/OpenSpec/issues/1635)) ([3281f1f](https://github.com/markusbrand/OpenSpec/commit/3281f1f068c30c37d66ad70be854c605c016e419))
* detect hidden requirements in main specs ([#966](https://github.com/markusbrand/OpenSpec/issues/966)) ([c8e2072](https://github.com/markusbrand/OpenSpec/commit/c8e2072e3ae26a978f1576d37df67e64cd1db134))
* **docs:** update invalid Discord link in experimental workflow ([#555](https://github.com/markusbrand/OpenSpec/issues/555)) ([54bd3f1](https://github.com/markusbrand/OpenSpec/commit/54bd3f1ccd47a9b919c889029057bcfe59395ed5))
* **docs:** Update migration guide action diagram formatting ([#644](https://github.com/markusbrand/OpenSpec/issues/644)) ([4573c28](https://github.com/markusbrand/OpenSpec/commit/4573c280488bd0c23ab8382a3b065a63de8d5931))
* **doctor:** note when a store checkout is behind its upstream ref ([#1287](https://github.com/markusbrand/OpenSpec/issues/1287)) ([520aa8c](https://github.com/markusbrand/OpenSpec/commit/520aa8c470dad5b0c62c67f9ddfa08b6062cff00))
* escape glob-special characters in directory paths ([#984](https://github.com/markusbrand/OpenSpec/issues/984)) ([7a39e88](https://github.com/markusbrand/OpenSpec/commit/7a39e887bbeb1f72d33fc1f03cc82afee2cddf03))
* **explore:** require explicit confirmation before writing files ([#1716](https://github.com/markusbrand/OpenSpec/issues/1716)) ([7010e26](https://github.com/markusbrand/OpenSpec/commit/7010e268907598c385eb6686699928fbd5a3a733))
* **explore:** scaffold changes before capturing artifacts ([#1503](https://github.com/markusbrand/OpenSpec/issues/1503)) ([8a3850d](https://github.com/markusbrand/OpenSpec/commit/8a3850da735e241c14ad94935463f879b33f21a9))
* **explore:** use ASCII in diagram examples ([#1010](https://github.com/markusbrand/OpenSpec/issues/1010)) ([e5e350d](https://github.com/markusbrand/OpenSpec/commit/e5e350d04b5d635b56846f46a212b097cd00eeb6))
* **feedback:** keep full reports in issue bodies ([#1653](https://github.com/markusbrand/OpenSpec/issues/1653)) ([fc0fec1](https://github.com/markusbrand/OpenSpec/commit/fc0fec1250642a8d5dafe615926ddf03a3ce0a97))
* **feedback:** submit feedback when the repo has no feedback label ([#1396](https://github.com/markusbrand/OpenSpec/issues/1396)) ([60f720c](https://github.com/markusbrand/OpenSpec/commit/60f720c43acd94de7645ac8629c614ede4682b6a)), closes [#1091](https://github.com/markusbrand/OpenSpec/issues/1091)
* generate TOML commands for Qwen Code (fixes [#293](https://github.com/markusbrand/OpenSpec/issues/293)) ([#317](https://github.com/markusbrand/OpenSpec/issues/317)) ([b5a7d09](https://github.com/markusbrand/OpenSpec/commit/b5a7d096f04425db9b79ba897a959b872a6dae85))
* **global-config:** respect XDG_CONFIG_HOME on all platforms ([#378](https://github.com/markusbrand/OpenSpec/issues/378)) ([f39cc5c](https://github.com/markusbrand/OpenSpec/commit/f39cc5c1fb9d3ec14de75ddc33c8190b742e01ae))
* handle XDG_CONFIG_HOME and %APPDATA% in telemetry config path ([#990](https://github.com/markusbrand/OpenSpec/issues/990)) ([18c445a](https://github.com/markusbrand/OpenSpec/commit/18c445a48d3fce94883296d5e76dd3aed8f57db2))
* honor --no-validate and ignore metadata during archive validation ([#190](https://github.com/markusbrand/OpenSpec/issues/190)) ([88b260d](https://github.com/markusbrand/OpenSpec/commit/88b260d51f34577189ad3431e5022b4c3950efd4))
* improve delta spec validation with case-insensitive headers and empty section detection ([#191](https://github.com/markusbrand/OpenSpec/issues/191)) ([ecddffc](https://github.com/markusbrand/OpenSpec/commit/ecddffc22e82faa53d76cf26b19b4b79545e08bb))
* improve Windows compatibility in tests ([#646](https://github.com/markusbrand/OpenSpec/issues/646)) ([62d4391](https://github.com/markusbrand/OpenSpec/commit/62d4391268e658ef71c44a0fbea857e985fef50c))
* **init:** only advertise slash commands the profile installs ([#1410](https://github.com/markusbrand/OpenSpec/issues/1410)) ([b3b05e1](https://github.com/markusbrand/OpenSpec/commit/b3b05e1abeb312caefd57e60be799aeb466c1d0e))
* **init:** only show 'Restart your IDE' hint for IDE-embedded tools ([#1610](https://github.com/markusbrand/OpenSpec/issues/1610)) ([17581c1](https://github.com/markusbrand/OpenSpec/commit/17581c11edf6b27ef18be7be1e4dcc06c81a3fff))
* **init:** prevent false GitHub Copilot auto-detection from bare .github/ directory ([#917](https://github.com/markusbrand/OpenSpec/issues/917)) ([765df47](https://github.com/markusbrand/OpenSpec/commit/765df47ad3d317e451a9ba0a24d8fc9f0b35f586))
* **init:** skip the welcome animation for reduced-motion users ([#1462](https://github.com/markusbrand/OpenSpec/issues/1462)) ([ebf66c7](https://github.com/markusbrand/OpenSpec/commit/ebf66c7ee1df3f7465d7f480753f952483133a73))
* **init:** use skill references for tools without a command adapter ([#1404](https://github.com/markusbrand/OpenSpec/issues/1404)) ([a84ae70](https://github.com/markusbrand/OpenSpec/commit/a84ae70e8c6ef6ffaab56599d6f91fa39873e63d))
* **instructions:** separate context and rules from template in JSON output ([#547](https://github.com/markusbrand/OpenSpec/issues/547)) ([e2c333e](https://github.com/markusbrand/OpenSpec/commit/e2c333e493f5cdd3a22f0fdfaa6e35e88072eb7c))
* make completion install opt-in, fix PowerShell encoding corruption ([#949](https://github.com/markusbrand/OpenSpec/issues/949)) ([1445282](https://github.com/markusbrand/OpenSpec/commit/144528257decdebf310db0d8b6d90eeeb9ee7057))
* make requirement header parsing case-insensitive ([#1031](https://github.com/markusbrand/OpenSpec/issues/1031)) ([2d189ce](https://github.com/markusbrand/OpenSpec/commit/2d189ce5e04f6e8dc785a3122d73a3e303bdc502))
* manually merge and archive four completed OpenSpec changes ([#226](https://github.com/markusbrand/OpenSpec/issues/226)) ([fef961f](https://github.com/markusbrand/OpenSpec/commit/fef961f6e3e21fadc20074b2042d47d578936821))
* **nix:** build with Node.js 22 now that nixpkgs marks Node 20 insecure ([#1406](https://github.com/markusbrand/OpenSpec/issues/1406)) ([9d40ae9](https://github.com/markusbrand/OpenSpec/commit/9d40ae98f08e2143eac66f4acb7e7b9c94e83ee7))
* **nix:** update pnpm-deps hash in flake.nix ([3dbf00f](https://github.com/markusbrand/OpenSpec/commit/3dbf00f9fe10e9c84a6438a977fcb21431a5f044))
* offer parent flags in Bash and PowerShell completions when subcommands exist ([#466](https://github.com/markusbrand/OpenSpec/issues/466)) ([ae85a72](https://github.com/markusbrand/OpenSpec/commit/ae85a7229d86c62782ab39ed035214fd82897b28)), closes [#463](https://github.com/markusbrand/OpenSpec/issues/463)
* **onboard:** add Windows PowerShell alternatives for shell commands ([#638](https://github.com/markusbrand/OpenSpec/issues/638)) ([0541f93](https://github.com/markusbrand/OpenSpec/commit/0541f93dddd1739c6c924c160ef6ec5266528b94))
* **onboard:** replace broken preflight check with direct config file test ([#637](https://github.com/markusbrand/OpenSpec/issues/637)) ([be51bcb](https://github.com/markusbrand/OpenSpec/commit/be51bcbc6a390468066d36df73f3ee3f3b9daf3e))
* **opencode:** pass command arguments to workflows ([#1664](https://github.com/markusbrand/OpenSpec/issues/1664)) ([15e50d6](https://github.com/markusbrand/OpenSpec/commit/15e50d6889708ef703b1a37b19205390ee819cb8))
* **opencode:** remove hardcoded agent field from slash commands ([#335](https://github.com/markusbrand/OpenSpec/issues/335)) ([17d1e5d](https://github.com/markusbrand/OpenSpec/commit/17d1e5db3f2043267602d45156b18e0d3e2a6913)), closes [#334](https://github.com/markusbrand/OpenSpec/issues/334)
* **opencode:** transform command references from colon to hyphen format ([#626](https://github.com/markusbrand/OpenSpec/issues/626)) ([697738b](https://github.com/markusbrand/OpenSpec/commit/697738bc9b8a8ea2d9fb148d0c12f0795a513b6b))
* **opencode:** use plural commands/ directory to match OpenCode convention ([#760](https://github.com/markusbrand/OpenSpec/issues/760)) ([61eb999](https://github.com/markusbrand/OpenSpec/commit/61eb999f7c6c0fc98d2e7f3678756fce6a3f4378))
* **packaging:** print the completions tip from the CLI, not a postinstall script ([#1704](https://github.com/markusbrand/OpenSpec/issues/1704)) ([7276c6c](https://github.com/markusbrand/OpenSpec/commit/7276c6c26832f699a63544302d38b1af8ddb9844))
* **parser:** ignore fenced code blocks when parsing delta specs ([#1151](https://github.com/markusbrand/OpenSpec/issues/1151)) ([18cbf5d](https://github.com/markusbrand/OpenSpec/commit/18cbf5d32ffe1bff4fff692e24568c605cf1e0fa))
* **parser:** stop delta section dividers from becoming phantom requirements ([#1411](https://github.com/markusbrand/OpenSpec/issues/1411)) ([c439a4e](https://github.com/markusbrand/OpenSpec/commit/c439a4ee48ef02dcdae6ac8101b7d12924695e7e))
* pi.dev command reference transforms and template args passing ([#950](https://github.com/markusbrand/OpenSpec/issues/950)) ([caafd7c](https://github.com/markusbrand/OpenSpec/commit/caafd7c9bf66788f70c542ad719fdd3d287b2e1e))
* **powershell-generator:** remove trailing comma from last entry ([#485](https://github.com/markusbrand/OpenSpec/issues/485)) ([07dd634](https://github.com/markusbrand/OpenSpec/commit/07dd6349860db5f620b3712bf65308a20786cd42))
* prefer native realpath for canonical paths ([#972](https://github.com/markusbrand/OpenSpec/issues/972)) ([93f7b79](https://github.com/markusbrand/OpenSpec/commit/93f7b797cf818cecb26abfc16dfbca9c2ec199e7))
* prevent false 'already configured' detection for tools ([#239](https://github.com/markusbrand/OpenSpec/issues/239)) ([cf0de5e](https://github.com/markusbrand/OpenSpec/commit/cf0de5e5697c5ff3978d857eb652fee4d040e7ab))
* prevent implementation during explore mode ([#515](https://github.com/markusbrand/OpenSpec/issues/515)) ([690c752](https://github.com/markusbrand/OpenSpec/commit/690c75225c36248c8bcbfc3a367c1cb3d7a7b55b))
* **profiles:** include sync with archive workflows ([#1663](https://github.com/markusbrand/OpenSpec/issues/1663)) ([cf06d45](https://github.com/markusbrand/OpenSpec/commit/cf06d45f91aa907bf910dc317e9fcec26c9203b3))
* **propose:** use the requested workflow schema ([#1504](https://github.com/markusbrand/OpenSpec/issues/1504)) ([f43fe0e](https://github.com/markusbrand/OpenSpec/commit/f43fe0e7d51d0c9b293b88b6b2dff686e2fb2b6d))
* **propose:** wait for explicit implementation request ([#1501](https://github.com/markusbrand/OpenSpec/issues/1501)) ([0b20ae3](https://github.com/markusbrand/OpenSpec/commit/0b20ae3964283bdcb4e34ea7380770857f6a339c))
* **qwen:** generate Markdown commands instead of deprecated TOML format ([#1191](https://github.com/markusbrand/OpenSpec/issues/1191)) ([7704702](https://github.com/markusbrand/OpenSpec/commit/7704702d61fa71e4f553c21a06bdf8e4ee803b4a))
* recreate missing openspec template files in extend mode ([#238](https://github.com/markusbrand/OpenSpec/issues/238)) ([fb1d37e](https://github.com/markusbrand/OpenSpec/commit/fb1d37e56ead288b639541529fc9521f6facdce3))
* **resolution:** converge validate, view, and archive onto canonical resolution ([#1182](https://github.com/markusbrand/OpenSpec/issues/1182), [#1202](https://github.com/markusbrand/OpenSpec/issues/1202), [#1156](https://github.com/markusbrand/OpenSpec/issues/1156)) ([#1280](https://github.com/markusbrand/OpenSpec/issues/1280)) ([a325305](https://github.com/markusbrand/OpenSpec/commit/a3253051ea1934fd0d76620addb855dfce801742))
* **schema:** make schema init --default actually set the default ([#1709](https://github.com/markusbrand/OpenSpec/issues/1709)) ([2fa679f](https://github.com/markusbrand/OpenSpec/commit/2fa679f180424d46ce7d8789eb85138397844a89))
* **schema:** preserve YAML formatting when forking a schema ([#1607](https://github.com/markusbrand/OpenSpec/issues/1607)) ([8127c7b](https://github.com/markusbrand/OpenSpec/commit/8127c7b7ccc52d0e6749e7290c548ef199a128d0))
* **schema:** resolve main-spec reads against the store-aware root ([#1703](https://github.com/markusbrand/OpenSpec/issues/1703)) ([9643888](https://github.com/markusbrand/OpenSpec/commit/9643888a7525467c7a076bfec9bb075910e78bb8))
* **schemas:** honor canonical root selection ([#1616](https://github.com/markusbrand/OpenSpec/issues/1616)) ([8364428](https://github.com/markusbrand/OpenSpec/commit/836442866134187434f59c44d96c78994809b9fe))
* **schemas:** include spec content guidance from concepts docs in specs instructions ([#1326](https://github.com/markusbrand/OpenSpec/issues/1326)) ([4fdb2a5](https://github.com/markusbrand/OpenSpec/commit/4fdb2a5f08b434153c1a92fb17e7df57b906e4fe)), closes [#1289](https://github.com/markusbrand/OpenSpec/issues/1289)
* **schemas:** resolve blocking open questions instead of deferring them to design.md ([#1366](https://github.com/markusbrand/OpenSpec/issues/1366)) ([a313bf1](https://github.com/markusbrand/OpenSpec/commit/a313bf1bfe45d159dc08da8f8a940ebda9e4bd5a))
* **schemas:** stop design.md from restating the proposal ([#1401](https://github.com/markusbrand/OpenSpec/issues/1401)) ([b33b15d](https://github.com/markusbrand/OpenSpec/commit/b33b15d98ae929624c991632c7382ebc234d4ca7))
* **schema:** validate artifacts before forced init ([#1446](https://github.com/markusbrand/OpenSpec/issues/1446)) ([5348da9](https://github.com/markusbrand/OpenSpec/commit/5348da930c4038ffd5b5a521702b71315dcd0019))
* **security:** keep paths on a short leash ([#1499](https://github.com/markusbrand/OpenSpec/issues/1499)) ([9cd845f](https://github.com/markusbrand/OpenSpec/commit/9cd845fc459b71486d9f2424c2e1f38e2ca8766e))
* **security:** patch fast-uri, postcss, and brace-expansion advisories ([#1510](https://github.com/markusbrand/OpenSpec/issues/1510)) ([02b124e](https://github.com/markusbrand/OpenSpec/commit/02b124e6b64369e283db1827a4470e0c1553ba8c))
* set USERPROFILE for Windows compatibility in telemetry tests ([#469](https://github.com/markusbrand/OpenSpec/issues/469)) ([4715138](https://github.com/markusbrand/OpenSpec/commit/47151389271fba6063fb7680c572c58a2d4a9560))
* silence telemetry network errors in firewalled environments ([#959](https://github.com/markusbrand/OpenSpec/issues/959)) ([4df6a48](https://github.com/markusbrand/OpenSpec/commit/4df6a4889bc5a0a7f06a0796e8d447f708173c19))
* skip additional Windows-specific tests ([#465](https://github.com/markusbrand/OpenSpec/issues/465)) ([504c93b](https://github.com/markusbrand/OpenSpec/commit/504c93bdf10da0f053770faee2934eca1311c951))
* skip Windows-specific permission tests that rely on chmod() ([#464](https://github.com/markusbrand/OpenSpec/issues/464)) ([c4a54a8](https://github.com/markusbrand/OpenSpec/commit/c4a54a8d5441d82dbf9812ac0f1ab032f9131ecf))
* **spec:** align cli-completion spec with implementation ([#360](https://github.com/markusbrand/OpenSpec/issues/360)) ([5e1cef3](https://github.com/markusbrand/OpenSpec/commit/5e1cef3b3ba3d129374ada657bebc7bee61f0420))
* **specs:** discover nested spec paths recursively across parse, apply, and archive ([#1355](https://github.com/markusbrand/OpenSpec/issues/1355)) ([3fdd2f2](https://github.com/markusbrand/OpenSpec/commit/3fdd2f2f7b055d25672d7a36ba006dcfc8478eb0))
* **specs:** warn before archiving deletes a note next to a requirement ([#1490](https://github.com/markusbrand/OpenSpec/issues/1490)) ([45cca5d](https://github.com/markusbrand/OpenSpec/commit/45cca5db6137ed209117cc70510eb3e057fb981b))
* **status:** clarify planning completion ([#1505](https://github.com/markusbrand/OpenSpec/issues/1505)) ([afea111](https://github.com/markusbrand/OpenSpec/commit/afea111cd45c2c07f825b3912ce3b925e1cd2c07))
* **status:** exit gracefully when no changes exist ([#759](https://github.com/markusbrand/OpenSpec/issues/759)) ([afdca0d](https://github.com/markusbrand/OpenSpec/commit/afdca0d5dab1aa109cfd8848b2512333ccad60c3))
* **status:** order artifacts by the schema, not the alphabet ([#1465](https://github.com/markusbrand/OpenSpec/issues/1465)) ([f917b8b](https://github.com/markusbrand/OpenSpec/commit/f917b8be5e1100189ef62320ba9322763053640e))
* suppress ora spinner output when --json flag is used ([#960](https://github.com/markusbrand/OpenSpec/issues/960)) ([a18d992](https://github.com/markusbrand/OpenSpec/commit/a18d992fa1c1f53512870a2272faebe367af0062)), closes [#957](https://github.com/markusbrand/OpenSpec/issues/957)
* **tasks:** count indented sub-tasks in task progress ([#1486](https://github.com/markusbrand/OpenSpec/issues/1486)) ([427abf4](https://github.com/markusbrand/OpenSpec/commit/427abf40ac45a9a44f78eb74c81f53f9f4197ccf)), closes [#1485](https://github.com/markusbrand/OpenSpec/issues/1485)
* **tasks:** include verification in generated plans ([#1660](https://github.com/markusbrand/OpenSpec/issues/1660)) ([7da3f34](https://github.com/markusbrand/OpenSpec/commit/7da3f34fb66d602bd987caa7dddcf3d6621e7d44))
* **telemetry:** honor telemetry.enabled in global config ([#1513](https://github.com/markusbrand/OpenSpec/issues/1513)) ([622c509](https://github.com/markusbrand/OpenSpec/commit/622c509a1349c3ad9c52cd1a4ee007bd47549204))
* **telemetry:** print first-run notice to stderr, not stdout ([#1666](https://github.com/markusbrand/OpenSpec/issues/1666)) ([db981f2](https://github.com/markusbrand/OpenSpec/commit/db981f279d818b5c17096a35734d22161f035412))
* **telemetry:** send the usage event directly instead of via posthog-node ([#1476](https://github.com/markusbrand/OpenSpec/issues/1476)) ([8731290](https://github.com/markusbrand/OpenSpec/commit/87312900f532c6c13ea556d4badaff2efdfa9602))
* **telemetry:** suppress first-run notice in --json mode ([#1609](https://github.com/markusbrand/OpenSpec/issues/1609)) ([804427b](https://github.com/markusbrand/OpenSpec/commit/804427b6ff3f3b35b542365ba8b32e183fce3287))
* **templates:** auto-select the only active change instead of always prompting ([#1468](https://github.com/markusbrand/OpenSpec/issues/1468)) ([fc886af](https://github.com/markusbrand/OpenSpec/commit/fc886af7f93068482bbf2c66fd1eb76b40c6a22f))
* **templates:** correct generated workflow guidance ([#1500](https://github.com/markusbrand/OpenSpec/issues/1500)) ([26bd1d4](https://github.com/markusbrand/OpenSpec/commit/26bd1d4e5c6c6ba75bd7d6136424019b2bf89ced))
* **templates:** deduplicate apply skill and command instructions ([#1153](https://github.com/markusbrand/OpenSpec/issues/1153)) ([0b233ef](https://github.com/markusbrand/OpenSpec/commit/0b233efb862445d99aa0365aae3b7ef7c5ea915b))
* **templates:** don't archive a change before its spec sync finishes ([#1394](https://github.com/markusbrand/OpenSpec/issues/1394)) ([b474f81](https://github.com/markusbrand/OpenSpec/commit/b474f81cb4bebbeff0e447fd78c34a613ebd02fa))
* **templates:** give explore the project's context and rules ([#1408](https://github.com/markusbrand/OpenSpec/issues/1408)) ([378d468](https://github.com/markusbrand/OpenSpec/commit/378d468ad348dc1e973ed30c5cfa458fb77c9de3))
* **templates:** make the schema instruction field authoritative for artifact creation ([#1405](https://github.com/markusbrand/OpenSpec/issues/1405)) ([5dfef4b](https://github.com/markusbrand/OpenSpec/commit/5dfef4b00c233fbe78f40488bd4ff98f4204684c))
* **templates:** re-read dependency artifacts from disk before creating the next one ([#1368](https://github.com/markusbrand/OpenSpec/issues/1368)) ([de78c31](https://github.com/markusbrand/OpenSpec/commit/de78c31ffd885a0558ae55d332f74d5485dc01c0))
* **templates:** replace Claude-only AskUserQuestion instruction with neutral ask-the-user guidance ([#1464](https://github.com/markusbrand/OpenSpec/issues/1464)) ([5bcf057](https://github.com/markusbrand/OpenSpec/commit/5bcf05766a70ec0163c3e700a3029b1c1da895d8)), closes [#920](https://github.com/markusbrand/OpenSpec/issues/920) [#717](https://github.com/markusbrand/OpenSpec/issues/717)
* **templates:** replace Claude-only TodoWrite instruction with a generic todo list ([#1403](https://github.com/markusbrand/OpenSpec/issues/1403)) ([2d6c447](https://github.com/markusbrand/OpenSpec/commit/2d6c447100c51fb1e5f65c6f6a35ce02a3196a10)), closes [#643](https://github.com/markusbrand/OpenSpec/issues/643)
* **templates:** restore intentional apply skill/command separation ([#1514](https://github.com/markusbrand/OpenSpec/issues/1514)) ([06b310b](https://github.com/markusbrand/OpenSpec/commit/06b310bf57b7fcf0dbeba73578a8ae06e1ddc72c))
* **templates:** show the main spec format in the sync-specs skill ([#1402](https://github.com/markusbrand/OpenSpec/issues/1402)) ([0da5f98](https://github.com/markusbrand/OpenSpec/commit/0da5f98e147543a44379e32295e2e9798d775d83)), closes [#1120](https://github.com/markusbrand/OpenSpec/issues/1120)
* **templates:** stop instructing a second date prefix on dated archive names ([#1388](https://github.com/markusbrand/OpenSpec/issues/1388)) ([9b5d2cd](https://github.com/markusbrand/OpenSpec/commit/9b5d2cdd0c1aa4b1b49da4f95c6cec8d7d38b155))
* **templates:** stop propose from skipping the specs artifact ([#1412](https://github.com/markusbrand/OpenSpec/issues/1412)) ([1dc670d](https://github.com/markusbrand/OpenSpec/commit/1dc670deea741b8313b8a22fb975741f84677b3f))
* **templates:** stop the bulk archive when the user picks Cancel ([#1398](https://github.com/markusbrand/OpenSpec/issues/1398)) ([97d441a](https://github.com/markusbrand/OpenSpec/commit/97d441a8ee2738d3008709e61acfc91925c7ae3a)), closes [#1381](https://github.com/markusbrand/OpenSpec/issues/1381)
* **templates:** use store-aware root for main specs in sync/archive ([#1360](https://github.com/markusbrand/OpenSpec/issues/1360)) ([15ef3bc](https://github.com/markusbrand/OpenSpec/commit/15ef3bcf3139384da9266c06239733e6658d6b7e)), closes [#1358](https://github.com/markusbrand/OpenSpec/issues/1358)
* **ui:** preserve Windows input after welcome screen ([#1175](https://github.com/markusbrand/OpenSpec/issues/1175)) ([596d6ba](https://github.com/markusbrand/OpenSpec/commit/596d6ba7f41160da9ab99cf4b891353baeb7eeb0))
* update polish-release-notes workflow to use correct Claude Code action parameters ([#504](https://github.com/markusbrand/OpenSpec/issues/504)) ([c57e421](https://github.com/markusbrand/OpenSpec/commit/c57e421cc2a46105b8ca7685b10f3c21dc7df782))
* **update:** don't hijack the agents target on legacy Codex upgrade ([#1522](https://github.com/markusbrand/OpenSpec/issues/1522)) ([07dea6e](https://github.com/markusbrand/OpenSpec/commit/07dea6ed2faf71c8b9f4944d64246f2ff39eeffc))
* **update:** only suggest IDE restarts when needed ([#1656](https://github.com/markusbrand/OpenSpec/issues/1656)) ([a72a74d](https://github.com/markusbrand/OpenSpec/commit/a72a74de6571c26fd79a193bb33fa3b8e1a767fb))
* **update:** refresh command files for tools configured without skills ([#1442](https://github.com/markusbrand/OpenSpec/issues/1442)) ([10fa39b](https://github.com/markusbrand/OpenSpec/commit/10fa39b1c3a3e88c02ae7d3053864c03a793ff47))
* **update:** warn when a custom profile is missing core workflows ([#1354](https://github.com/markusbrand/OpenSpec/issues/1354)) ([d423a59](https://github.com/markusbrand/OpenSpec/commit/d423a594f967684114acc68d132d4081392fd2a8))
* use actionCommand for telemetry command tracking ([#472](https://github.com/markusbrand/OpenSpec/issues/472)) ([4971cda](https://github.com/markusbrand/OpenSpec/commit/4971cda812525b7be28f3dedb0278c044c9ebe9f))
* use change-id as fallback title instead of "Untitled Change" ([#236](https://github.com/markusbrand/OpenSpec/issues/236)) ([92b4546](https://github.com/markusbrand/OpenSpec/commit/92b45462c6493a6deac1edbe293efcbd3ce07a2b))
* use correct scoped package name in changeset ([#166](https://github.com/markusbrand/OpenSpec/issues/166)) ([a50105e](https://github.com/markusbrand/OpenSpec/commit/a50105e03cc00138e1647a022081b91e400640b3))
* use local dates for CLI date-only values ([#1361](https://github.com/markusbrand/OpenSpec/issues/1361)) ([9acddcd](https://github.com/markusbrand/OpenSpec/commit/9acddcda07815e9bec091c04f3e7b72d3ccf90c9))
* use path.resolve in Codex adapter test for Windows compatibility ([#624](https://github.com/markusbrand/OpenSpec/issues/624)) ([5e2e02c](https://github.com/markusbrand/OpenSpec/commit/5e2e02c090304e86007d1727414da78de9a9608e))
* use skill references in SKILL.md for skills-only delivery ([#1194](https://github.com/markusbrand/OpenSpec/issues/1194)) ([b7c85c7](https://github.com/markusbrand/OpenSpec/commit/b7c85c741ca56748a4ae095b573fe4550c5c977f))
* use Skill tool for sync invocation in archive templates ([#632](https://github.com/markusbrand/OpenSpec/issues/632)) ([1d34e72](https://github.com/markusbrand/OpenSpec/commit/1d34e72f1071b64ee1dc551d4c07e843d68b448b))
* **validate:** allow non-English requirements ([#1502](https://github.com/markusbrand/OpenSpec/issues/1502)) ([ece8660](https://github.com/markusbrand/OpenSpec/commit/ece8660d44bd19b86440376327752cda3d7b0717))
* **validate:** allow numeric-prefixed change names ([#1435](https://github.com/markusbrand/OpenSpec/issues/1435)) ([6a5171e](https://github.com/markusbrand/OpenSpec/commit/6a5171e18630db4ed8e78c9edfaae4be532e2af6))
* **validate:** count every level-4 header as a scenario in the loss guard ([#1521](https://github.com/markusbrand/OpenSpec/issues/1521)) ([c751b3d](https://github.com/markusbrand/OpenSpec/commit/c751b3da52a7f06d6662a8673feff4685566cdd4))
* **validate:** reject a delta spec at the change's specs/ root ([#1392](https://github.com/markusbrand/OpenSpec/issues/1392)) ([a13abea](https://github.com/markusbrand/OpenSpec/commit/a13abeac47d419462b0193dbf9423dd466ffe6c7))
* **validate:** report a Purpose left as the archive placeholder ([#1671](https://github.com/markusbrand/OpenSpec/issues/1671)) ([126c5d6](https://github.com/markusbrand/OpenSpec/commit/126c5d6c59d63b7e70314bcc776104c7cc548819))
* **validate:** report scenarios a MODIFIED requirement would drop ([#1482](https://github.com/markusbrand/OpenSpec/issues/1482)) ([84ebc57](https://github.com/markusbrand/OpenSpec/commit/84ebc57cb3f0e91b93484484092fdc2f9fcf39e6))
* **validate:** warn on ambiguous task numbering ([#1523](https://github.com/markusbrand/OpenSpec/issues/1523)) ([e50bd09](https://github.com/markusbrand/OpenSpec/commit/e50bd0983dc8dc48250e3181f36e28450542f2ab))
* **validator:** hint when SHALL/MUST appears only in requirement header ([#1135](https://github.com/markusbrand/OpenSpec/issues/1135)) ([9aded17](https://github.com/markusbrand/OpenSpec/commit/9aded17af760ad2015ed3e91ce3b93bec9f3adfc)), closes [#356](https://github.com/markusbrand/OpenSpec/issues/356)
* **vitest:** cap worker parallelism to prevent process storms ([#500](https://github.com/markusbrand/OpenSpec/issues/500)) ([322bfd4](https://github.com/markusbrand/OpenSpec/commit/322bfd455a8d60b00fb69089bfc9ee800bba7a0b))
* **website:** show openspec init in the homepage getting-started box ([#1434](https://github.com/markusbrand/OpenSpec/issues/1434)) ([b976fc0](https://github.com/markusbrand/OpenSpec/commit/b976fc06661ade5aeed13d2d50320496b7c55897)), closes [#1282](https://github.com/markusbrand/OpenSpec/issues/1282)
* Windows path compatibility in resolver tests ([#524](https://github.com/markusbrand/OpenSpec/issues/524)) ([32fc19a](https://github.com/markusbrand/OpenSpec/commit/32fc19a60d44ed6c400286cb575be12e117020f9))
* **workflow:** keep no-spec schema changes valid ([#1655](https://github.com/markusbrand/OpenSpec/issues/1655)) ([a2b965a](https://github.com/markusbrand/OpenSpec/commit/a2b965aa5e0b7b3d096a5ab6d6506b5a26a1993a))
* **workflows:** preserve nested spec paths ([#1508](https://github.com/markusbrand/OpenSpec/issues/1508)) ([3d0701f](https://github.com/markusbrand/OpenSpec/commit/3d0701f871438d7c844a3a1ec565a5c2a4a83220))


### Performance Improvements

* add path filtering to Nix validation CI job ([#518](https://github.com/markusbrand/OpenSpec/issues/518)) ([dbd4ed7](https://github.com/markusbrand/OpenSpec/commit/dbd4ed7bfbde277107b4576cf8ffb986831f1c7e))


### Documentation

* add anvil to Community Schemas table ([#1469](https://github.com/markusbrand/OpenSpec/issues/1469)) ([ec6cbb4](https://github.com/markusbrand/OpenSpec/commit/ec6cbb4b0bd9c6f0ff2ffac88114f8ec5c5517a8))
* add artifact POC analysis document ([#398](https://github.com/markusbrand/OpenSpec/issues/398)) ([2c2599b](https://github.com/markusbrand/OpenSpec/commit/2c2599b1f0587a12680da2a8f07a471ee3c35eed))
* add cloudflare documentation deployment website ([#1285](https://github.com/markusbrand/OpenSpec/issues/1285)) ([65a7233](https://github.com/markusbrand/OpenSpec/commit/65a7233f36ad022e99cc23115279768b8ca24fb6))
* add Community Schemas section + README entry ([#1043](https://github.com/markusbrand/OpenSpec/issues/1043)) ([76c80f8](https://github.com/markusbrand/OpenSpec/commit/76c80f80f3be9e6baf47fe1dee5e1c6a85e23034)), closes [#970](https://github.com/markusbrand/OpenSpec/issues/970)
* add Crush to supported AI tools in README ([#235](https://github.com/markusbrand/OpenSpec/issues/235)) ([5ab438f](https://github.com/markusbrand/OpenSpec/commit/5ab438f5fd85bd95c7769a373ea570c3d639513c))
* add deno install instructions ([#1079](https://github.com/markusbrand/OpenSpec/issues/1079)) ([1da6dfa](https://github.com/markusbrand/OpenSpec/commit/1da6dfa8d74675f888abba50934e43e16af01dc9))
* add e2e-runbooks to Community Schemas table ([#1255](https://github.com/markusbrand/OpenSpec/issues/1255)) ([fdf3d12](https://github.com/markusbrand/OpenSpec/commit/fdf3d1282da691e1d0e66464060e12a25adb8991))
* add experimental workflow (OPSX) user guide ([#456](https://github.com/markusbrand/OpenSpec/issues/456)) ([3ed1270](https://github.com/markusbrand/OpenSpec/commit/3ed1270316353e4fde994e2f9e4c680096488410))
* add guidance for populating project-level context ([#241](https://github.com/markusbrand/OpenSpec/issues/241)) ([a665807](https://github.com/markusbrand/OpenSpec/commit/a66580735c3da8563749760fca694592e28e6f17))
* add MAINTAINERS.md with core maintainers and advisors ([#495](https://github.com/markusbrand/OpenSpec/issues/495)) ([08c3493](https://github.com/markusbrand/OpenSpec/commit/08c349369a6781ce2fa23e3b97a147e87809e77a))
* add nanopm to community schemas catalog ([#1109](https://github.com/markusbrand/OpenSpec/issues/1109)) ([a824aae](https://github.com/markusbrand/OpenSpec/commit/a824aae9daaae5847cb6a43bcf94b05f0c66f461))
* add OPSX experimental workflow visibility to README ([#460](https://github.com/markusbrand/OpenSpec/issues/460)) ([bb9f6ce](https://github.com/markusbrand/OpenSpec/commit/bb9f6ce0ea108e8c861d16ed6bce32740e26dc74))
* add project-config demo guide ([#521](https://github.com/markusbrand/OpenSpec/issues/521)) ([90d05b7](https://github.com/markusbrand/OpenSpec/commit/90d05b71154a627a349433f70169bbff69764ecb))
* add workspace reimplementation proposal slices ([#1025](https://github.com/markusbrand/OpenSpec/issues/1025)) ([cb9641a](https://github.com/markusbrand/OpenSpec/commit/cb9641a45054391c8386ee5eff150073207ca413))
* align cli-update OpenCode spec with commands/ and opsx-* paths ([#1170](https://github.com/markusbrand/OpenSpec/issues/1170)) ([d2082d1](https://github.com/markusbrand/OpenSpec/commit/d2082d1f91558f2802a099167728e3cfdd0df7de))
* catalog intent-driven community schema ([#1487](https://github.com/markusbrand/OpenSpec/issues/1487)) ([1014c59](https://github.com/markusbrand/OpenSpec/commit/1014c59ed1515206fcaec334b4be15183cfa0061))
* clarify Bun install still requires Node ([#1032](https://github.com/markusbrand/OpenSpec/issues/1032)) ([a974c67](https://github.com/markusbrand/OpenSpec/commit/a974c679864e39e64630b1e792f9b561c3f0ea7c))
* clarify change name format ([#1261](https://github.com/markusbrand/OpenSpec/issues/1261)) ([4ef0761](https://github.com/markusbrand/OpenSpec/commit/4ef07610802276ef04235ce8d780cdc07b6b0ab4))
* clarify GitHub Copilot CLI limitation for custom prompts ([#676](https://github.com/markusbrand/OpenSpec/issues/676)) ([c574e79](https://github.com/markusbrand/OpenSpec/commit/c574e7992dc9d3ac019f8c2e882406f696271eb6))
* clarify initiative-first workspace model ([#969](https://github.com/markusbrand/OpenSpec/issues/969)) ([c0f2904](https://github.com/markusbrand/OpenSpec/commit/c0f29044f9addb13b4c0873d1e7c8177abe04500))
* comprehensive overhaul — discoverability, explore-first, and closing recurring doc-request issues ([#1237](https://github.com/markusbrand/OpenSpec/issues/1237)) ([bb1f18c](https://github.com/markusbrand/OpenSpec/commit/bb1f18c483e8c53485091a08d1cbd4d71f1576ac))
* expand workspace planning explorations ([#965](https://github.com/markusbrand/OpenSpec/issues/965)) ([cd5e493](https://github.com/markusbrand/OpenSpec/commit/cd5e49346f91f37d18f0035ca50ed17d9be2c062))
* fix docs/concepts nested code-block format ([#763](https://github.com/markusbrand/OpenSpec/issues/763)) ([d199dfa](https://github.com/markusbrand/OpenSpec/commit/d199dfa407811977d832927ff25fd908f97fcf9c))
* fix openspec status examples in cli.md ([#761](https://github.com/markusbrand/OpenSpec/issues/761)) ([3d3bf96](https://github.com/markusbrand/OpenSpec/commit/3d3bf960612f7bdad6c141fe47b45f16463aaee7))
* **installation:** add an AI-assistant setup prompt ([#1466](https://github.com/markusbrand/OpenSpec/issues/1466)) ([9a61f3f](https://github.com/markusbrand/OpenSpec/commit/9a61f3f30d2025807d2e5b9715ee68bde6dd8f54))
* **migration-guide:** fix inconsistent /opsx:sync description ([#1059](https://github.com/markusbrand/OpenSpec/issues/1059)) ([053d8a5](https://github.com/markusbrand/OpenSpec/commit/053d8a59d587f3c027a06ad80503a6b43d4f2a92))
* modernize opsx.md ([#616](https://github.com/markusbrand/OpenSpec/issues/616)) ([ddbfa52](https://github.com/markusbrand/OpenSpec/commit/ddbfa529f4903bffc4bbef39e16bc1fab7730e6c))
* note restart for slash commands ([#182](https://github.com/markusbrand/OpenSpec/issues/182)) ([4cf7bf8](https://github.com/markusbrand/OpenSpec/commit/4cf7bf863de098e7e55dbc133120c0531d0ae18f))
* **opsx:** clarify /opsx:sync description and add usage section ([#1606](https://github.com/markusbrand/OpenSpec/issues/1606)) ([1a10dd5](https://github.com/markusbrand/OpenSpec/commit/1a10dd582096090effac4b9047bd97c601196451))
* **readme:** add --allow-git flag and fix prepare script for git installs ([cc93d8d](https://github.com/markusbrand/OpenSpec/commit/cc93d8dd5f0f69a41138fa23a2637a3bee5b2fd7))
* **readme:** alphabetize AI tools list and make collapsible ([#343](https://github.com/markusbrand/OpenSpec/issues/343)) ([6d3cfe0](https://github.com/markusbrand/OpenSpec/commit/6d3cfe0443646e34eeb866172587ea430824d95d))
* **readme:** show what a spec actually looks like in "See it in action" ([#1365](https://github.com/markusbrand/OpenSpec/issues/1365)) ([924354b](https://github.com/markusbrand/OpenSpec/commit/924354b7262af19c06b3d223ae4feb7d15e3fec2))
* **readme:** update installation instructions to use markusbrand repo ([38d6099](https://github.com/markusbrand/OpenSpec/commit/38d60990e67651616a2be864ae1ee825dc8edbaa))
* realign defaults, profile workflows, and tool references ([#746](https://github.com/markusbrand/OpenSpec/issues/746)) ([d7d1860](https://github.com/markusbrand/OpenSpec/commit/d7d186088eb1c5878c3d9f91bd928f06483fcb98))
* rebuild docs site from docs-lab ([#1649](https://github.com/markusbrand/OpenSpec/issues/1649)) ([f1b521d](https://github.com/markusbrand/OpenSpec/commit/f1b521dffac38ed6638689cd28b0c204b1eef0f1))
* remove teams slack mention from readme ([#991](https://github.com/markusbrand/OpenSpec/issues/991)) ([9001740](https://github.com/markusbrand/OpenSpec/commit/900174000b8a09f3c46c8e09e7e5e6be35375e45))
* rewrite customization guide to document schema commands ([#582](https://github.com/markusbrand/OpenSpec/issues/582)) ([0bfe1d4](https://github.com/markusbrand/OpenSpec/commit/0bfe1d4426571ed00a17dd18c1395bb44a19fc9b))
* **stores:** add multi-repo implementation flow ([#1491](https://github.com/markusbrand/OpenSpec/issues/1491)) ([d9bcc18](https://github.com/markusbrand/OpenSpec/commit/d9bcc18582fe6dd818af954752b37a2f47dbe552))
* support Trae AI ([#601](https://github.com/markusbrand/OpenSpec/issues/601)) ([277be19](https://github.com/markusbrand/OpenSpec/commit/277be194efdac6e86384b4eb6e5ad00f633814a2))
* switch Roo Code references to Zoo Code ([#1428](https://github.com/markusbrand/OpenSpec/issues/1428)) ([81d5109](https://github.com/markusbrand/OpenSpec/commit/81d5109b86f16537deb99f84a772a83235dc9e09))
* sync AGENTS.md and agents-template with explicit change-id notation ([#189](https://github.com/markusbrand/OpenSpec/issues/189)) ([ce74222](https://github.com/markusbrand/OpenSpec/commit/ce7422209fc91f361740cf96ed061b28b6bcf2c3))
* sync tool ID lists with AI_TOOLS source of truth ([#1027](https://github.com/markusbrand/OpenSpec/issues/1027)) ([347f027](https://github.com/markusbrand/OpenSpec/commit/347f0277e3be3549cd85cdea364fbd7710f1922b))
* update workflow docs and mark schema commands as experimental ([#526](https://github.com/markusbrand/OpenSpec/issues/526)) ([43b01ad](https://github.com/markusbrand/OpenSpec/commit/43b01ad374164d1b9dd4e4bfb0d5864b61c6f7db))
* **workflows:** fix sequence diagram rendering ([#1654](https://github.com/markusbrand/OpenSpec/issues/1654)) ([98c7932](https://github.com/markusbrand/OpenSpec/commit/98c79324acb802d765d9d11c7b117079667aa7d7))
* **workflows:** visualize the OpenSpec lifecycle ([#1507](https://github.com/markusbrand/OpenSpec/issues/1507)) ([4e4c9e1](https://github.com/markusbrand/OpenSpec/commit/4e4c9e1ffd8ebddcb50d49360b3f8e94a72def22))


### Code Refactoring

* **commands:** modularize artifact workflow into separate files ([#562](https://github.com/markusbrand/OpenSpec/issues/562)) ([f90c7c3](https://github.com/markusbrand/OpenSpec/commit/f90c7c335486bd190c4ffcd9ee0350da68230dde))
* **setup:** simplify config creation and fix test hanging ([#537](https://github.com/markusbrand/OpenSpec/issues/537)) ([e073680](https://github.com/markusbrand/OpenSpec/commit/e0736807b4899eed4cd87cf243fa20a427f8bdd5))
* split skill templates into workflow modules ([#698](https://github.com/markusbrand/OpenSpec/issues/698)) ([92731e2](https://github.com/markusbrand/OpenSpec/commit/92731e226381178070cc06f3e83e7f59733293c7))
* **templates:** share one apply instruction body across skill and command ([#1515](https://github.com/markusbrand/OpenSpec/issues/1515)) ([96a6548](https://github.com/markusbrand/OpenSpec/commit/96a6548664fd72d1145e4dc9613f75ecb1f5801e))
* unify requirement reader and surface [#498](https://github.com/markusbrand/OpenSpec/issues/498) ([#1281](https://github.com/markusbrand/OpenSpec/issues/1281)) ([9a0dfb5](https://github.com/markusbrand/OpenSpec/commit/9a0dfb5cd136b423c9f13c0b29ec3ea69761b4e6))


### Miscellaneous Chores

* add changeset for 1.0.0 release ([#578](https://github.com/markusbrand/OpenSpec/issues/578)) ([0cc9d90](https://github.com/markusbrand/OpenSpec/commit/0cc9d9025af367faa1688a7b2606a2549053cd3f))
* add changeset for AI assistants support and validation fixes ([#227](https://github.com/markusbrand/OpenSpec/issues/227)) ([668a125](https://github.com/markusbrand/OpenSpec/commit/668a125d4db6216560ff2d924882b76e2e8e7bb7))
* add changeset for new features and improvements ([#326](https://github.com/markusbrand/OpenSpec/issues/326)) ([c08fbc1](https://github.com/markusbrand/OpenSpec/commit/c08fbc1ba00dbffe528493eeb422c0068db82d8b))
* add changeset for opsx:verify skill and bug fixes ([#502](https://github.com/markusbrand/OpenSpec/issues/502)) ([9db74aa](https://github.com/markusbrand/OpenSpec/commit/9db74aa5ac6547efadaed795217cfa17444f2004))
* add changeset for stores beta and config JSON parsing ([#1267](https://github.com/markusbrand/OpenSpec/issues/1267)) ([96f6cac](https://github.com/markusbrand/OpenSpec/commit/96f6cacb206c65bee30066f6a1f4e9b855a0d783))
* add changeset for v1.3.0 ([#952](https://github.com/markusbrand/OpenSpec/issues/952)) ([cce787e](https://github.com/markusbrand/OpenSpec/commit/cce787ec4083da2b27781f6786f5ce0002909a7b))
* add missing v1.6.0 changeset ([#1340](https://github.com/markusbrand/OpenSpec/issues/1340)) ([1552731](https://github.com/markusbrand/OpenSpec/commit/15527310f9be13cc9a4035ea01b93ba85873d956))
* add OpenSpec release skill ([#1341](https://github.com/markusbrand/OpenSpec/issues/1341)) ([3f02c68](https://github.com/markusbrand/OpenSpec/commit/3f02c686c5c52ea03e66912354b49c25c5cf0f8b))
* archive 4 completed changes and update specs ([#172](https://github.com/markusbrand/OpenSpec/issues/172)) ([4a86328](https://github.com/markusbrand/OpenSpec/commit/4a863285b0a043e19a7ba5ac250be6f4209f0f11))
* archive 7 completed changes and update specs ([#170](https://github.com/markusbrand/OpenSpec/issues/170)) ([345f9db](https://github.com/markusbrand/OpenSpec/commit/345f9dbb456b4387b47d4ce73845ceee7ae2d1e4))
* archive completed changes and clean up stale ones ([#455](https://github.com/markusbrand/OpenSpec/issues/455)) ([eb15cdb](https://github.com/markusbrand/OpenSpec/commit/eb15cdb983e8e88981e1374461a25020107eca84))
* **changeset:** add catch-up changesets for 6 untracked fixes ([#1640](https://github.com/markusbrand/OpenSpec/issues/1640)) ([610b78f](https://github.com/markusbrand/OpenSpec/commit/610b78f6554e8aabfa294df53962428ff85c8b76))
* **dependabot:** ignore unsupported major updates ([#1623](https://github.com/markusbrand/OpenSpec/issues/1623)) ([144901c](https://github.com/markusbrand/OpenSpec/commit/144901ca74c401905fe0482930d090b3c28e1358))
* **deps-dev:** bump development-dependencies group + refresh flake hash ([#1633](https://github.com/markusbrand/OpenSpec/issues/1633)) ([4b114aa](https://github.com/markusbrand/OpenSpec/commit/4b114aade9debd808ac2e051e810b5e94dfa881a))
* **deps-dev:** bump eslint from 10.7.0 to 10.8.0 in the development-dependencies group ([#1494](https://github.com/markusbrand/OpenSpec/issues/1494)) ([23c2787](https://github.com/markusbrand/OpenSpec/commit/23c2787789e68146d94b4e7ece197f81fe7de146))
* **deps-dev:** bump the development-dependencies group with 2 updates ([#1718](https://github.com/markusbrand/OpenSpec/issues/1718)) ([c0c50f9](https://github.com/markusbrand/OpenSpec/commit/c0c50f9a4c5ab2cee82e02939398ea21c811d39b))
* **deps:** bump next from 16.2.10 to 16.2.11 in /website ([#1429](https://github.com/markusbrand/OpenSpec/issues/1429)) ([2b50338](https://github.com/markusbrand/OpenSpec/commit/2b503389f59a5cf344a3a5a046afb27b2a1a3ed3))
* **deps:** bump next in /website in the website-dependencies group ([#1420](https://github.com/markusbrand/OpenSpec/issues/1420)) ([11a301d](https://github.com/markusbrand/OpenSpec/commit/11a301d5fbddf6e5628e82b4feb5807538884dbc))
* **deps:** bump safe website-dependencies subset ([#1634](https://github.com/markusbrand/OpenSpec/issues/1634)) ([b96b3e8](https://github.com/markusbrand/OpenSpec/commit/b96b3e85cdfc3cb5b64b1d05d5654541130df76a))
* **deps:** bump the website-dependencies group ([#1496](https://github.com/markusbrand/OpenSpec/issues/1496)) ([80ad1fb](https://github.com/markusbrand/OpenSpec/commit/80ad1fbaef85c66a4d542b4a2a96fdcdea3342fa))
* **deps:** bump the website-dependencies group ([#1680](https://github.com/markusbrand/OpenSpec/issues/1680)) ([cfc74ee](https://github.com/markusbrand/OpenSpec/commit/cfc74eeb055a1cf809ddfbcea828c245c0e9d1f2))
* **deps:** bump the website-dependencies group ([#1719](https://github.com/markusbrand/OpenSpec/issues/1719)) ([6926ccb](https://github.com/markusbrand/OpenSpec/commit/6926ccb18afa4ff621112813e9968334576ee11a))
* **deps:** bump the website-dependencies group in /website with 2 updates ([#1636](https://github.com/markusbrand/OpenSpec/issues/1636)) ([6d031f1](https://github.com/markusbrand/OpenSpec/commit/6d031f12f7d94c7ddac51569171efdce805f56e0))
* **deps:** consolidate dependabot bumps with flake hash update ([#1427](https://github.com/markusbrand/OpenSpec/issues/1427)) ([5406c8b](https://github.com/markusbrand/OpenSpec/commit/5406c8b3ff6cf59d04512eccb1ad5543ae4882c6))
* **deps:** consolidate dependabot bumps with flake hash update ([#1457](https://github.com/markusbrand/OpenSpec/issues/1457)) ([abb422a](https://github.com/markusbrand/OpenSpec/commit/abb422a04b10a364327f4e630cecc7ee6d00c81f))
* **deps:** migrate to @inquirer/prompts v8 + @inquirer/core v11 ([#1667](https://github.com/markusbrand/OpenSpec/issues/1667)) ([9181364](https://github.com/markusbrand/OpenSpec/commit/91813641cf91d86beb97d9b8cda8bec5c6d871ae))
* **dev:** add VS Code dev container configuration ([#209](https://github.com/markusbrand/OpenSpec/issues/209)) ([822464e](https://github.com/markusbrand/OpenSpec/commit/822464ec44cc384ae739637eaf9ad7e934790593))
* improve release notes pipeline ([#481](https://github.com/markusbrand/OpenSpec/issues/481)) ([36078b1](https://github.com/markusbrand/OpenSpec/commit/36078b19473cdbc191154568d7c3dd47c885ee6e))
* **main:** release 1.11.0 ([4e34c80](https://github.com/markusbrand/OpenSpec/commit/4e34c8029fd10b03f59612d09acef78a4974e8cb))
* **main:** release 1.11.0 ([c3cffd3](https://github.com/markusbrand/OpenSpec/commit/c3cffd3b6b225a447e5d8e06e23276e1f9767123))
* **main:** release 2.0.0 ([bba257e](https://github.com/markusbrand/OpenSpec/commit/bba257e247d0ee0355acb67dbcc3fe78a1947cf0))
* **main:** release 2.0.0 ([db3e92f](https://github.com/markusbrand/OpenSpec/commit/db3e92f16d3b68b9c89977f7223b9d27115c14a5))
* **nix:** improve flake with dynamic version and build optimization ([#550](https://github.com/markusbrand/OpenSpec/issues/550)) ([86d2e04](https://github.com/markusbrand/OpenSpec/commit/86d2e04cae76a999dbd1b4571f52fa720036be0c))
* **openspec:** add feedback command change proposal ([#496](https://github.com/markusbrand/OpenSpec/issues/496)) ([40afee6](https://github.com/markusbrand/OpenSpec/commit/40afee643e4b036a24f1a5f86e261dc3f2f9f248))
* **openspec:** archive schema init force validation change ([#1467](https://github.com/markusbrand/OpenSpec/issues/1467)) ([d32d49f](https://github.com/markusbrand/OpenSpec/commit/d32d49f06698c6ae647dc844ff72c00ac494af42))
* **release:** add catch-up changeset for Rovo, Codex dir, status ([#1518](https://github.com/markusbrand/OpenSpec/issues/1518)) ([568e56c](https://github.com/markusbrand/OpenSpec/commit/568e56c67231dbe2447aca4f0e7995c05ada95a3))
* **release:** integrate release-please and deprecate changesets ([c926f9b](https://github.com/markusbrand/OpenSpec/commit/c926f9ba0528ef01f9b983a99866b3c8ca392757))
* **release:** version packages ([#158](https://github.com/markusbrand/OpenSpec/issues/158)) ([f56189a](https://github.com/markusbrand/OpenSpec/commit/f56189a8f721f6f738c1115fb747af74ea712077))
* **release:** version packages ([#167](https://github.com/markusbrand/OpenSpec/issues/167)) ([108bcd6](https://github.com/markusbrand/OpenSpec/commit/108bcd66d89fc9a8929e023df273b8ba4b3f4beb))
* **release:** version packages ([#180](https://github.com/markusbrand/OpenSpec/issues/180)) ([b30882b](https://github.com/markusbrand/OpenSpec/commit/b30882b57928ae086b4577cee9aed3ab09bbf1e5))
* **release:** version packages ([#228](https://github.com/markusbrand/OpenSpec/issues/228)) ([5855fa2](https://github.com/markusbrand/OpenSpec/commit/5855fa2353ef75e613dae7bc4ccd71c6cdb428f1))
* **release:** version packages ([#271](https://github.com/markusbrand/OpenSpec/issues/271)) ([d32e50f](https://github.com/markusbrand/OpenSpec/commit/d32e50fe36ffa58c45781dc3d5815b692f4df90b))
* **release:** version packages ([#305](https://github.com/markusbrand/OpenSpec/issues/305)) ([17d7e59](https://github.com/markusbrand/OpenSpec/commit/17d7e59343559cc6bf8693b0bd953f78008a46e6))
* **release:** version packages ([#327](https://github.com/markusbrand/OpenSpec/issues/327)) ([3f5a66d](https://github.com/markusbrand/OpenSpec/commit/3f5a66d3e4e0cd0df2eac6c8173dd9f855c7a60b))
* **release:** version packages ([#389](https://github.com/markusbrand/OpenSpec/issues/389)) ([c2a1a4c](https://github.com/markusbrand/OpenSpec/commit/c2a1a4c807d93c9bb30998efe47321fd9e9f1e53))
* **release:** version packages ([#394](https://github.com/markusbrand/OpenSpec/issues/394)) ([fb264bc](https://github.com/markusbrand/OpenSpec/commit/fb264bcbcd154d92207e58e1127a14f8a19ebb0f))
* **release:** version packages ([#397](https://github.com/markusbrand/OpenSpec/issues/397)) ([c08a53c](https://github.com/markusbrand/OpenSpec/commit/c08a53cb2125128bd151ce9c19f0f3e53c20d97c))
* **release:** version packages ([#458](https://github.com/markusbrand/OpenSpec/issues/458)) ([533cb0f](https://github.com/markusbrand/OpenSpec/commit/533cb0fa87e104ca71ef62d3898c91bc659f2311))
* remove scheduled docs workflow ([#1324](https://github.com/markusbrand/OpenSpec/issues/1324)) ([871dece](https://github.com/markusbrand/OpenSpec/commit/871dece1beb38b70a94b0999dfdc278764fe2856))
* remove stale npm lockfile ([#1319](https://github.com/markusbrand/OpenSpec/issues/1319)) ([8ac624b](https://github.com/markusbrand/OpenSpec/commit/8ac624b279974d0aacb44a93d913f7129a784a66))
* remove TDD schema and all references ([#586](https://github.com/markusbrand/OpenSpec/issues/586)) ([12a7224](https://github.com/markusbrand/OpenSpec/commit/12a7224dc628ca6eb98bbaebb8b9bd330f73871c))
* rename "Qoder (CLI)" to "Qoder" ([#552](https://github.com/markusbrand/OpenSpec/issues/552)) ([70c2e17](https://github.com/markusbrand/OpenSpec/commit/70c2e175253dd8c46310434a9f31a0d266f64312))
* route reviews to maintainer team ([#1441](https://github.com/markusbrand/OpenSpec/issues/1441)) ([c33fcb3](https://github.com/markusbrand/OpenSpec/commit/c33fcb3fdb729455b114bdcfad84df01b3531bfe))
* **scripts:** add a parity-hash regeneration helper ([#1416](https://github.com/markusbrand/OpenSpec/issues/1416)) ([ffe27de](https://github.com/markusbrand/OpenSpec/commit/ffe27de18d718312fb4a84c0da8e4af4d318f620))
* **security:** add security policy, dependabot config, and config key guards ([#1415](https://github.com/markusbrand/OpenSpec/issues/1415)) ([e2f748c](https://github.com/markusbrand/OpenSpec/commit/e2f748c64f05efaeac720f83c71fb6f1b6f6e18d))
* **security:** create test temp dirs with mkdtemp and override two pinned CVEs ([#1432](https://github.com/markusbrand/OpenSpec/issues/1432)) ([a874d1d](https://github.com/markusbrand/OpenSpec/commit/a874d1d6715886db9210c527b1fc3799d9688a76))
* **security:** override brace-expansion to fix the failing audit ([#1461](https://github.com/markusbrand/OpenSpec/issues/1461)) ([05c7019](https://github.com/markusbrand/OpenSpec/commit/05c701970acf680c1276362d48c6d339794c4340))
* trigger release workflow for v0.19.0 ([#480](https://github.com/markusbrand/OpenSpec/issues/480)) ([d0e1b07](https://github.com/markusbrand/OpenSpec/commit/d0e1b076c2c5eac85fd86f806f42bb0b1efa7fa2))

## [2.0.0](https://github.com/markusbrand/OpenSpec/compare/v1.11.0...v2.0.0) (2026-08-26)


### ⚠ BREAKING CHANGES

* **stores:** replace workspaces and initiatives with stores ([#1190](https://github.com/markusbrand/OpenSpec/issues/1190))

### Features

* **adapters:** follow the Windsurf rename to Devin Desktop ([#1167](https://github.com/markusbrand/OpenSpec/issues/1167)) ([1637856](https://github.com/markusbrand/OpenSpec/commit/1637856c423f2e84457652d1ab58885fe9744fb2))
* add /opsx:archive command for archiving completed changes ([#451](https://github.com/markusbrand/OpenSpec/issues/451)) ([b7f5a42](https://github.com/markusbrand/OpenSpec/commit/b7f5a429de063f97959614f64b81943be8a43050))
* add /opsx:explore command for exploratory thinking ([#467](https://github.com/markusbrand/OpenSpec/issues/467)) ([d49a88c](https://github.com/markusbrand/OpenSpec/commit/d49a88c3bb1d45656872c6533c7c03b8cf20c50b))
* add /opsx:ff command for fast-forward artifact creation ([#448](https://github.com/markusbrand/OpenSpec/issues/448)) ([1bc8495](https://github.com/markusbrand/OpenSpec/commit/1bc849554c12896f60840df7457ee37f69112d19))
* add /opsx:sync command for syncing delta specs to main specs ([#450](https://github.com/markusbrand/OpenSpec/issues/450)) ([a5c10ed](https://github.com/markusbrand/OpenSpec/commit/a5c10ed5e7147d8b0e1c7319c308b930ab215be4))
* add $ARGUMENTS support to apply slash command ([#244](https://github.com/markusbrand/OpenSpec/issues/244)) ([9cdb074](https://github.com/markusbrand/OpenSpec/commit/9cdb0743f2de7250e7846ba1a906bd47b91473c2))
* add agent schema selection to experimental artifact workflow ([#445](https://github.com/markusbrand/OpenSpec/issues/445)) ([ed924ff](https://github.com/markusbrand/OpenSpec/commit/ed924ffcff3ad045d891f7fdbc881af2bf9e1026))
* add Agent Skills for experimental artifact workflow ([#424](https://github.com/markusbrand/OpenSpec/issues/424)) ([cac5404](https://github.com/markusbrand/OpenSpec/commit/cac54042ce6e8e05de25c1cd79c2e605312090c4))
* add argument support to archive slash command ([#183](https://github.com/markusbrand/OpenSpec/issues/183)) ([63b8a3e](https://github.com/markusbrand/OpenSpec/commit/63b8a3e9f96072052d75a3a366f65bc2378fbe1c))
* add Auggie (Augment CLI) support to configuration and documenta… ([#196](https://github.com/markusbrand/OpenSpec/issues/196)) ([f82e243](https://github.com/markusbrand/OpenSpec/commit/f82e2435510396deb1305a99f759ac11fa7cc79f))
* add change creation utilities ([#408](https://github.com/markusbrand/OpenSpec/issues/408)) ([4f4af57](https://github.com/markusbrand/OpenSpec/commit/4f4af5708dd78f21908b0ca8232049ec06891d64))
* add Cline support ([#213](https://github.com/markusbrand/OpenSpec/issues/213)) ([ece61a6](https://github.com/markusbrand/OpenSpec/commit/ece61a6d682a91fb9699372e486c75d7067f6c7c))
* add CodeArts Agent skills support ([#1266](https://github.com/markusbrand/OpenSpec/issues/1266)) ([ac656c9](https://github.com/markusbrand/OpenSpec/commit/ac656c983f85d2a4c3f21d5e352892450f56d8fb))
* add CodeBuddy Code support to configuration and documentation ([#217](https://github.com/markusbrand/OpenSpec/issues/217)) ([3677e01](https://github.com/markusbrand/OpenSpec/commit/3677e0175f79c7ff9f24168c2058c20b0ea640cf))
* add CodeRabbit AI assistant support ([#221](https://github.com/markusbrand/OpenSpec/issues/221)) ([3ddf258](https://github.com/markusbrand/OpenSpec/commit/3ddf2586b44e842e551fa24d6bf94bc56d064e3f))
* Add codex custom slash command support ([#120](https://github.com/markusbrand/OpenSpec/issues/120)) ([9ae6141](https://github.com/markusbrand/OpenSpec/commit/9ae6141eb1e3a53b0d63c051dad12118baaafc6f))
* add CoStrict AI assistant support  ([#240](https://github.com/markusbrand/OpenSpec/issues/240)) ([c4b6be4](https://github.com/markusbrand/OpenSpec/commit/c4b6be41c130d398bef292189c80f0987539c2c6))
* add Crush AI assistant support ([#206](https://github.com/markusbrand/OpenSpec/issues/206)) ([67ab683](https://github.com/markusbrand/OpenSpec/commit/67ab683105a5b236d0545bffbde1626892712129))
* add factory function support for slash commands ([#178](https://github.com/markusbrand/OpenSpec/issues/178)) ([b81fa1e](https://github.com/markusbrand/OpenSpec/commit/b81fa1e6cc3adc42f6753725c662d76765f720a0))
* add feedback command for submitting user feedback ([#509](https://github.com/markusbrand/OpenSpec/issues/509)) ([c86985d](https://github.com/markusbrand/OpenSpec/commit/c86985d6ec5e2e2e6995ddbc3d61d81550eb7576))
* add ForgeCode tool support ([#941](https://github.com/markusbrand/OpenSpec/issues/941)) ([ea6f380](https://github.com/markusbrand/OpenSpec/commit/ea6f380feafc99b35f430bbab165ec6d2678b897))
* Add Gemini CLI support with TOML-based slash commands ([#256](https://github.com/markusbrand/OpenSpec/issues/256)) ([9b6a763](https://github.com/markusbrand/OpenSpec/commit/9b6a763eb84ce536d62b768bd3bebf7eb1440d1f))
* add GitHub Copilot slash command support ([#128](https://github.com/markusbrand/OpenSpec/issues/128)) ([b3d31d2](https://github.com/markusbrand/OpenSpec/commit/b3d31d224d4d17d4de6e14cb9bd51521064b5899))
* add Hermes Agent support ([#1292](https://github.com/markusbrand/OpenSpec/issues/1292)) ([4a0f15d](https://github.com/markusbrand/OpenSpec/commit/4a0f15d3b2f53b3c3fadf12bc8662af644397bb7))
* add instruction loader for template loading and change context ([#414](https://github.com/markusbrand/OpenSpec/issues/414)) ([11e1955](https://github.com/markusbrand/OpenSpec/commit/11e195575f1413199446b1ca1e52ad4b936ace9f))
* add Kimi CLI skills-only support ([#1003](https://github.com/markusbrand/OpenSpec/issues/1003)) ([342ed43](https://github.com/markusbrand/OpenSpec/commit/342ed43e694abba65a3ea275f94ba3b77df85da3))
* add Kiro CLI support ([#707](https://github.com/markusbrand/OpenSpec/issues/707)) ([fbef555](https://github.com/markusbrand/OpenSpec/commit/fbef555041d89d98eec623dc5efaa4d1be2cae29))
* add Lingma IDE support to configuration ([5ac1e12](https://github.com/markusbrand/OpenSpec/commit/5ac1e12b83005c471a426c8e2cb0a18faf55211e))
* add Lingma IDE support to configuration ([5ac1e12](https://github.com/markusbrand/OpenSpec/commit/5ac1e12b83005c471a426c8e2cb0a18faf55211e))
* add Lingma IDE support to configuration ([#864](https://github.com/markusbrand/OpenSpec/issues/864)) ([5ac1e12](https://github.com/markusbrand/OpenSpec/commit/5ac1e12b83005c471a426c8e2cb0a18faf55211e))
* add MiniMax Code skills support ([#1214](https://github.com/markusbrand/OpenSpec/issues/1214)) ([161f945](https://github.com/markusbrand/OpenSpec/commit/161f9454a372aab67c495d780928bba89c829f3e))
* add nix flake support (sorry for this duplicate) ([#459](https://github.com/markusbrand/OpenSpec/issues/459)) ([ed4d965](https://github.com/markusbrand/OpenSpec/commit/ed4d96520809b3c1bdcbb2d44be89d68eb78c8c8))
* add non-interactive options to openspec init ([#122](https://github.com/markusbrand/OpenSpec/issues/122)) ([cc9d540](https://github.com/markusbrand/OpenSpec/commit/cc9d5402ffc17223e70bfb0ab374333a30f0cd4a))
* add Oh My Pi (OMP) tool support ([#1276](https://github.com/markusbrand/OpenSpec/issues/1276)) ([8886e3a](https://github.com/markusbrand/OpenSpec/commit/8886e3ae226a5ad70e1c65ece622ee409977a058))
* add openspec dashboard command for web-based project browsing ([#615](https://github.com/markusbrand/OpenSpec/issues/615)) ([f45ba73](https://github.com/markusbrand/OpenSpec/commit/f45ba73a5f543c213abb9298cf0072b8ca555b8d))
* add per-change schema metadata (.openspec.yaml) ([#443](https://github.com/markusbrand/OpenSpec/issues/443)) ([1786684](https://github.com/markusbrand/OpenSpec/commit/1786684af6831cc3385bd72da9250518f76d1bb6))
* add Qoder CLI support to configuration and documentation ([#261](https://github.com/markusbrand/OpenSpec/issues/261)) ([4e93d7a](https://github.com/markusbrand/OpenSpec/commit/4e93d7a881313f90c22aae64caab2abd828e1858))
* add Qwen Code support with slash command integration ([#250](https://github.com/markusbrand/OpenSpec/issues/250)) ([8f9c3c7](https://github.com/markusbrand/OpenSpec/commit/8f9c3c7d0b1134f388dfc6fff8e72400004046d8))
* add slash commands to artifact-experimental-setup ([#442](https://github.com/markusbrand/OpenSpec/issues/442)) ([51fb10d](https://github.com/markusbrand/OpenSpec/commit/51fb10db5ea19d2b672ae8ab4646bc17cf8b7b12))
* add smart sync check to /opsx:archive command ([#452](https://github.com/markusbrand/OpenSpec/issues/452)) ([cd172a4](https://github.com/markusbrand/OpenSpec/commit/cd172a4427ca98a5f1157febf3a22385623db539))
* add spec-driven-github schema and openspec-issue adapter tooling ([94d6ca6](https://github.com/markusbrand/OpenSpec/commit/94d6ca604453fd8b85a53dd49278787e8f40ba3f))
* add support for IBM Bob coding assistant ([#886](https://github.com/markusbrand/OpenSpec/issues/886)) ([94d651d](https://github.com/markusbrand/OpenSpec/commit/94d651de8c10810983de6cd2920625ce42cc51ad))
* add support for Pi (pi.dev) coding agent ([#735](https://github.com/markusbrand/OpenSpec/issues/735)) ([e4c32db](https://github.com/markusbrand/OpenSpec/commit/e4c32dbe074823efc2a7eb75ac18c8501b6e8656))
* add Trae command adapter ([#1090](https://github.com/markusbrand/OpenSpec/issues/1090)) ([3f0ca3f](https://github.com/markusbrand/OpenSpec/commit/3f0ca3f6ce6f2ec41260c5cbe7954b7e46adcf43))
* **archive:** let a change retire a capability it empties ([#1484](https://github.com/markusbrand/OpenSpec/issues/1484)) ([521ee33](https://github.com/markusbrand/OpenSpec/commit/521ee33e6ece269241b45e08017ee60f13fdef08))
* change the frontmatter of the Codebuddy Slash Commands ([#462](https://github.com/markusbrand/OpenSpec/issues/462)) ([3f67deb](https://github.com/markusbrand/OpenSpec/commit/3f67debf65f1287fb508a6fc3d7d1c4d67f83e66))
* **ci:** migrate to npm OIDC trusted publishing ([#390](https://github.com/markusbrand/OpenSpec/issues/390)) ([6de04f3](https://github.com/markusbrand/OpenSpec/commit/6de04f3b2b3656102940817e909ad3963417a797))
* **cli:** add interactive UI for artifact experimental setup ([#560](https://github.com/markusbrand/OpenSpec/issues/560)) ([ae83b4e](https://github.com/markusbrand/OpenSpec/commit/ae83b4e16d67f20992309d53a9975691b32fb91a))
* **cli:** add multi-provider skill generation support ([#556](https://github.com/markusbrand/OpenSpec/issues/556)) ([d485281](https://github.com/markusbrand/OpenSpec/commit/d48528134bdb65508feb4045881cdee760e105a5))
* **cli:** add openspec config command for global configuration management ([#382](https://github.com/markusbrand/OpenSpec/issues/382)) ([971f8ca](https://github.com/markusbrand/OpenSpec/commit/971f8ca4a36db8ba7dd591eef09434584b6d3dc4))
* **cli:** add schema management commands ([#525](https://github.com/markusbrand/OpenSpec/issues/525)) ([3cdcdfc](https://github.com/markusbrand/OpenSpec/commit/3cdcdfca8e84fa113ebcdd248fd8d6273af3bfa8))
* **cli:** improve artifact experimental setup with refresh detection ([#561](https://github.com/markusbrand/OpenSpec/issues/561)) ([9381bd3](https://github.com/markusbrand/OpenSpec/commit/9381bd3b24f04d20a329cb3662fe895a945aa6df))
* **cli:** merge init and experimental commands ([#564](https://github.com/markusbrand/OpenSpec/issues/564)) ([cf8b621](https://github.com/markusbrand/OpenSpec/commit/cf8b6212c8bf1e8c56aaf80ece02830d6de08b6f))
* **cli:** merge init and experimental commands ([#565](https://github.com/markusbrand/OpenSpec/issues/565)) ([39bebef](https://github.com/markusbrand/OpenSpec/commit/39bebefcc49deb0bbef8bc1e6ba32f0392e5c75f))
* **codex:** make Codex skills-only and retire managed custom prompts ([#1283](https://github.com/markusbrand/OpenSpec/issues/1283)) ([79f1dac](https://github.com/markusbrand/OpenSpec/commit/79f1dac6681d4e7ab5f6181e6daff95d8582b864))
* **config:** add project-level configuration via openspec/config.yaml ([#499](https://github.com/markusbrand/OpenSpec/issues/499)) ([20714c1](https://github.com/markusbrand/OpenSpec/commit/20714c1c28c2f77a09917894edf98da6c8047867))
* **copilot:** make cloud coding-agent files opt-in ([#1517](https://github.com/markusbrand/OpenSpec/issues/1517)) ([73207a6](https://github.com/markusbrand/OpenSpec/commit/73207a6f2cd235729ac3fe3cb1e44152b8f63f12))
* **core:** implement global config directory with XDG support ([#377](https://github.com/markusbrand/OpenSpec/issues/377)) ([5129a8c](https://github.com/markusbrand/OpenSpec/commit/5129a8cf964b4999f4353faa3689afac60cee7d7))
* enhance artifact instructions with inline guidance and XML output ([#422](https://github.com/markusbrand/OpenSpec/issues/422)) ([ea5aa0e](https://github.com/markusbrand/OpenSpec/commit/ea5aa0e5629b787b0d74dbd860b599ad6a540958))
* enhance list command with last modified timestamps and sorting ([#421](https://github.com/markusbrand/OpenSpec/issues/421)) ([48b5ed9](https://github.com/markusbrand/OpenSpec/commit/48b5ed96574869528214597c484c1a4b5785f468))
* generate Copilot coding agent files on `openspec init` (github-copilot) ([#1274](https://github.com/markusbrand/OpenSpec/issues/1274)) ([7a4a745](https://github.com/markusbrand/OpenSpec/commit/7a4a745d803b698c34947eda6d73b5a24aebb58c))
* **iflow-cli:** add iFlow-cli integration ([#268](https://github.com/markusbrand/OpenSpec/issues/268)) ([19ccaab](https://github.com/markusbrand/OpenSpec/commit/19ccaabfc7ea4f7a29a9871497a95eb538ae4690))
* improve init wizard Enter key behavior ([#156](https://github.com/markusbrand/OpenSpec/issues/156)) ([eb0d50c](https://github.com/markusbrand/OpenSpec/commit/eb0d50c094a7a859e696cdae446b7000a252f6e4))
* **init:** add IDE restart instruction after init ([#323](https://github.com/markusbrand/OpenSpec/issues/323)) ([938d03b](https://github.com/markusbrand/OpenSpec/commit/938d03be9a94432f10a1687761a568f1aea4b10d))
* **init:** add language option ([#1685](https://github.com/markusbrand/OpenSpec/issues/1685)) ([c747ed1](https://github.com/markusbrand/OpenSpec/commit/c747ed1f34459ca6bc15d43ad9f68dfdf7750875))
* **init:** add schema selection for markdown and github issues workflows ([4dd7bdd](https://github.com/markusbrand/OpenSpec/commit/4dd7bddc54487e30e901d6ae52a6534dda96290e))
* **init:** add shared agents skills target ([#1303](https://github.com/markusbrand/OpenSpec/issues/1303)) ([1aa0f2a](https://github.com/markusbrand/OpenSpec/commit/1aa0f2abfc19f2487f5b8566e6eb3bf15f41c20a))
* **instructions:** add runtime context and operation guidance ([#1062](https://github.com/markusbrand/OpenSpec/issues/1062)) ([eac2973](https://github.com/markusbrand/OpenSpec/commit/eac2973819037727b10214f70db2f54d82f2d891))
* make apply instructions schema-aware ([#444](https://github.com/markusbrand/OpenSpec/issues/444)) ([d737057](https://github.com/markusbrand/OpenSpec/commit/d73705736f23652f76c178d51a548c3919bed31b))
* onboarding skill and comprehensive documentation overhaul ([#574](https://github.com/markusbrand/OpenSpec/issues/574)) ([3261ccf](https://github.com/markusbrand/OpenSpec/commit/3261ccf6dc49fd07bafbf03dd812b4f8e387735e))
* **resolver:** add project-local schema support ([#522](https://github.com/markusbrand/OpenSpec/issues/522)) ([adda63e](https://github.com/markusbrand/OpenSpec/commit/adda63e17ae3bec1126f2a4e93919150c2135847))
* restructure schemas as directories with templates ([#411](https://github.com/markusbrand/OpenSpec/issues/411)) ([ab47cc6](https://github.com/markusbrand/OpenSpec/commit/ab47cc6b00ee021b0d07fed229dfabfd3ceacfda))
* **roocode:** add RooCode integration (configurator, slash commands, templates) ([#288](https://github.com/markusbrand/OpenSpec/issues/288)) ([c4b0826](https://github.com/markusbrand/OpenSpec/commit/c4b0826da77c731dd82da57cffa942f31c7d6d51))
* **schema:** resolve symlinked schema directories ([#1299](https://github.com/markusbrand/OpenSpec/issues/1299)) ([5e365b9](https://github.com/markusbrand/OpenSpec/commit/5e365b962f2292002b16da46c65f6073e37a27e2))
* simplify skill installation with profiles and smart defaults ([#726](https://github.com/markusbrand/OpenSpec/issues/726)) ([4ba2690](https://github.com/markusbrand/OpenSpec/commit/4ba26902dfecf6f54c5a729993e012a57f4e2877))
* simplify skill installation with profiles and smart defaults init ([#719](https://github.com/markusbrand/OpenSpec/issues/719)) ([5fd8e9d](https://github.com/markusbrand/OpenSpec/commit/5fd8e9d66c3b6b116e7af814a6013c2d9c4958dd))
* **skills:** add /opsx:verify change proposal ([#497](https://github.com/markusbrand/OpenSpec/issues/497)) ([05023da](https://github.com/markusbrand/OpenSpec/commit/05023dab43b5c415a9a6d5611eece5e5bf63b1e6))
* **skills:** add Agent Skills spec optional metadata fields ([#563](https://github.com/markusbrand/OpenSpec/issues/563)) ([c157483](https://github.com/markusbrand/OpenSpec/commit/c157483685cdbf1313272d86d27c75125a5e70be))
* **skills:** add bulk-archive skill for archiving multiple changes ([#527](https://github.com/markusbrand/OpenSpec/issues/527)) ([fdb05a7](https://github.com/markusbrand/OpenSpec/commit/fdb05a723e046ed53d9a77a84f2830231affe4ee))
* **skills:** auto-approve the openspec CLI in generated skills and commands ([#1300](https://github.com/markusbrand/OpenSpec/issues/1300)) ([a5bfeda](https://github.com/markusbrand/OpenSpec/commit/a5bfedafc8b3d914fe01d05eb36ad9ad3fbe35a2))
* **skills:** implement /opsx:verify skill for validating change implementations ([#501](https://github.com/markusbrand/OpenSpec/issues/501)) ([b5b7248](https://github.com/markusbrand/OpenSpec/commit/b5b7248610d0201ac59f4c0bbf3cea5517a6fe70))
* **skills:** propose /opsx:update planning-artifact update skill ([#1278](https://github.com/markusbrand/OpenSpec/issues/1278)) ([a70dacc](https://github.com/markusbrand/OpenSpec/commit/a70daccf0ec034f23bc7df5c2c397c120ec31999))
* **skills:** publish workflow skills to skills.sh ([#1357](https://github.com/markusbrand/OpenSpec/issues/1357)) ([46a4d78](https://github.com/markusbrand/OpenSpec/commit/46a4d782229ebb104268130a16e85cb7662a2281))
* **spec:** add XDG global config directory and config command proposals ([#376](https://github.com/markusbrand/OpenSpec/issues/376)) ([4ff8930](https://github.com/markusbrand/OpenSpec/commit/4ff893048dc43a7829c96ef37eda02cc0389a867))
* **stores:** replace workspaces and initiatives with stores ([#1190](https://github.com/markusbrand/OpenSpec/issues/1190)) ([a0decbe](https://github.com/markusbrand/OpenSpec/commit/a0decbe3fa9ae7818d0470cd2b0144fa09f08ec4))
* **stores:** set one default store for every repo on your machine ([#1363](https://github.com/markusbrand/OpenSpec/issues/1363)) ([5199f41](https://github.com/markusbrand/OpenSpec/commit/5199f41a5d523b9212dd2854ec5e505d2f80e2e7))
* support global paths for Codex command generation ([#622](https://github.com/markusbrand/OpenSpec/issues/622)) ([f27e5e8](https://github.com/markusbrand/OpenSpec/commit/f27e5e809afb82e6dc7b1602b68d116a89a5c36a))
* **tools:** add Atlassian Rovo Dev CLI as a first-class tool ([#1516](https://github.com/markusbrand/OpenSpec/issues/1516)) ([13e213e](https://github.com/markusbrand/OpenSpec/commit/13e213e00fc8dce0cc2974bd8d871e74f4e0165b))
* **tools:** add Command Code command adapter for /opsx-* commands ([#1622](https://github.com/markusbrand/OpenSpec/issues/1622)) ([59c16a4](https://github.com/markusbrand/OpenSpec/commit/59c16a4461254ed984d1d5e29d00af1a5610035a))
* **tools:** add Command Code support as a skills-only tool ([#1613](https://github.com/markusbrand/OpenSpec/issues/1613)) ([42d7f67](https://github.com/markusbrand/OpenSpec/commit/42d7f673bc5f13378451267c8a9d0c23f63a2d1a))
* **tools:** add Zed Agent support ([#1659](https://github.com/markusbrand/OpenSpec/issues/1659)) ([f3aa167](https://github.com/markusbrand/OpenSpec/commit/f3aa167d6e00f2907f9ff6e6b5b7623c83a46930))
* update Codex slash commands to use YAML frontmatter and $ARGUMENTS ([#129](https://github.com/markusbrand/OpenSpec/issues/129)) ([6105211](https://github.com/markusbrand/OpenSpec/commit/6105211163612e8427943bdb1c44c91b8406426b))
* **update:** offer to upgrade a stale CLI during openspec update ([#1470](https://github.com/markusbrand/OpenSpec/issues/1470)) ([6295515](https://github.com/markusbrand/OpenSpec/commit/6295515d4da4f7c76eaed00b7f1926771eae92de))
* **validate:** accept zero-delta changes that declare skip_specs ([#1399](https://github.com/markusbrand/OpenSpec/issues/1399)) ([27b22ab](https://github.com/markusbrand/OpenSpec/commit/27b22ab4cbf530fa00e17f0f6b75a44d56777542))
* **validate:** add --archived to lint task completion of archived changes ([#1604](https://github.com/markusbrand/OpenSpec/issues/1604)) ([83be9d1](https://github.com/markusbrand/OpenSpec/commit/83be9d113e8310789c281f7c8a00ed4fad191dd5))
* **zcode:** add ZCode as supported tool ([#1209](https://github.com/markusbrand/OpenSpec/issues/1209)) ([57a88a3](https://github.com/markusbrand/OpenSpec/commit/57a88a3d126ad1c767eeffdaee4394497199c42e))


### Bug Fixes

* **adapters:** escape carriage returns in YAML frontmatter and dedupe escapeYamlValue ([#1240](https://github.com/markusbrand/OpenSpec/issues/1240)) ([cbf386b](https://github.com/markusbrand/OpenSpec/commit/cbf386bd6888f103f8ff7d59b3eab98ce5b57998))
* **adapters:** escape YAML frontmatter values consistently across all command adapters ([#1447](https://github.com/markusbrand/OpenSpec/issues/1447)) ([fb19699](https://github.com/markusbrand/OpenSpec/commit/fb196995dad017074415a638824eb546f3321cbc))
* **adapters:** reference slash commands by the names each tool registers ([#1471](https://github.com/markusbrand/OpenSpec/issues/1471)) ([9a937cb](https://github.com/markusbrand/OpenSpec/commit/9a937cb9b36fb1040bdbde3bab3fa3903944ef10))
* **adapters:** stop deleting the CoStrict and Junie commands on every run ([#1492](https://github.com/markusbrand/OpenSpec/issues/1492)) ([690a27e](https://github.com/markusbrand/OpenSpec/commit/690a27e649c4a3325daeb0f6667ebe0f82792179))
* add auto-approval for file writes in polish-release-notes workflow ([#505](https://github.com/markusbrand/OpenSpec/issues/505)) ([bf4bc24](https://github.com/markusbrand/OpenSpec/commit/bf4bc2426f0cbda7bc376b699f988d0a9c2680ad))
* add slash command hints in workflow completion messages ([#603](https://github.com/markusbrand/OpenSpec/issues/603)) ([6b545f6](https://github.com/markusbrand/OpenSpec/commit/6b545f6ebb1b05d1df2f3ca20562931c2a112e99))
* **agents:** add --no-interactive to validate commands in agent workflows ([#494](https://github.com/markusbrand/OpenSpec/issues/494)) ([d7a928b](https://github.com/markusbrand/OpenSpec/commit/d7a928b4e9724ea816af749e328a2267898fb231)), closes [#492](https://github.com/markusbrand/OpenSpec/issues/492)
* **apply:** surface deferred scope instead of silently simplifying tasks ([#1530](https://github.com/markusbrand/OpenSpec/issues/1530)) ([bf5099e](https://github.com/markusbrand/OpenSpec/commit/bf5099e39fdb5d7bde2adc84f49ea93afd7463e9))
* archive add-antigravity-support and fix-cline-workflows-implementation ([#423](https://github.com/markusbrand/OpenSpec/issues/423)) ([c47cdaa](https://github.com/markusbrand/OpenSpec/commit/c47cdaafe28d892cf6af428e00e512f97898e096))
* **archive:** allow REMOVED requirements when creating new spec files ([#403](https://github.com/markusbrand/OpenSpec/issues/403)) ([#404](https://github.com/markusbrand/OpenSpec/issues/404)) ([3ceef2d](https://github.com/markusbrand/OpenSpec/commit/3ceef2db725b8f70661c70b2c6a5d9fec9055ff0))
* **archive:** don't write ANSI escape codes to a redirected (non-TTY) stdout ([#1603](https://github.com/markusbrand/OpenSpec/issues/1603)) ([9ae75c8](https://github.com/markusbrand/OpenSpec/commit/9ae75c86efe5d326ffa7ca5a3fd64b1f1e7728c2))
* **archive:** fall back to copy+remove on EPERM/EXDEV (fixes [#197](https://github.com/markusbrand/OpenSpec/issues/197)) ([#605](https://github.com/markusbrand/OpenSpec/issues/605)) ([d3c3d66](https://github.com/markusbrand/OpenSpec/commit/d3c3d66e67c8ff68cafcbcbdbdd90915aa1bced2))
* **archive:** keep an existing date prefix instead of stacking a new one ([#1316](https://github.com/markusbrand/OpenSpec/issues/1316)) ([9b70481](https://github.com/markusbrand/OpenSpec/commit/9b70481df727ab9f7a00dd0118e4e09373a36fb9)), closes [#1309](https://github.com/markusbrand/OpenSpec/issues/1309)
* **archive:** keep the delta spec's Purpose in a new main spec ([#1431](https://github.com/markusbrand/OpenSpec/issues/1431)) ([6a4f0d7](https://github.com/markusbrand/OpenSpec/commit/6a4f0d7f3384486132cb9c516b635c23cadc1fa2))
* **archive:** make scenario-drift check multiplicity-aware ([#1246](https://github.com/markusbrand/OpenSpec/issues/1246)) ([#1391](https://github.com/markusbrand/OpenSpec/issues/1391)) ([470f572](https://github.com/markusbrand/OpenSpec/commit/470f5727ad31f0c5f5a5f930e25893cc9b1661ce))
* **archive:** make the scenario-drift check fence-aware, plus release-audit follow-ups ([#1475](https://github.com/markusbrand/OpenSpec/issues/1475)) ([17af60c](https://github.com/markusbrand/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f))
* **archive:** never dead-end a capability retirement ([#1699](https://github.com/markusbrand/OpenSpec/issues/1699)) ([18688c8](https://github.com/markusbrand/OpenSpec/commit/18688c8b27820da3435a47a7f11e90073724b728))
* **archive:** preserve blank lines around ## Requirements when syncing specs ([#1637](https://github.com/markusbrand/OpenSpec/issues/1637)) ([0221ac3](https://github.com/markusbrand/OpenSpec/commit/0221ac3d464ba67e55e0ac6ed216e7a61a6b41be))
* **archive:** stop failing on specs that were already synced before archiving ([#1376](https://github.com/markusbrand/OpenSpec/issues/1376)) ([7958924](https://github.com/markusbrand/OpenSpec/commit/7958924e95654af981437951e967983385da8001))
* **archive:** tell the caller which flag to pass when archive can't ask its questions ([#1483](https://github.com/markusbrand/OpenSpec/issues/1483)) ([2b3d368](https://github.com/markusbrand/OpenSpec/commit/2b3d368539132be6311e55db58899abbf5306b81))
* **archive:** treat already-synced RENAMED deltas as no-ops ([#1386](https://github.com/markusbrand/OpenSpec/issues/1386)) ([b419e96](https://github.com/markusbrand/OpenSpec/commit/b419e965bbf413cc658bbac37325ebc147b1c869))
* **archive:** treat early-synced REMOVED deltas as no-ops, plus audit follow-ups ([#1437](https://github.com/markusbrand/OpenSpec/issues/1437)) ([19d4171](https://github.com/markusbrand/OpenSpec/commit/19d41714c8b790488732687443713e406ef5aeef))
* **artifact-graph:** normalize paths for cross-platform glob compatibility ([#407](https://github.com/markusbrand/OpenSpec/issues/407)) ([9822576](https://github.com/markusbrand/OpenSpec/commit/982257677058b167f6da64190a042ad545cb965d))
* auto-trigger polish release notes on release publish ([#519](https://github.com/markusbrand/OpenSpec/issues/519)) ([2e51ae2](https://github.com/markusbrand/OpenSpec/commit/2e51ae26d3ab51ea18c2a3c81230d52cc74abe3c))
* avoid npx when applying profile changes ([#1351](https://github.com/markusbrand/OpenSpec/issues/1351)) ([a0eb70e](https://github.com/markusbrand/OpenSpec/commit/a0eb70ef070938b567e4b154bc7e2af08111d3e1))
* **build:** allow esbuild install scripts ([#1196](https://github.com/markusbrand/OpenSpec/issues/1196)) ([3e50944](https://github.com/markusbrand/OpenSpec/commit/3e50944fb0c4151768a26fb421b4b9cdb644eff6))
* canonicalize workflow artifact paths ([#971](https://github.com/markusbrand/OpenSpec/issues/971)) ([7d07101](https://github.com/markusbrand/OpenSpec/commit/7d07101363c0e210ae0202951104e94e03806cc3))
* **changelog:** convert markdown headers to bold text for proper formatting ([#532](https://github.com/markusbrand/OpenSpec/issues/532)) ([d61a49f](https://github.com/markusbrand/OpenSpec/commit/d61a49f6d58433377de08b0a57ae8207194810b9))
* **change:** resolve changes by directory instead of requiring proposal.md ([#1433](https://github.com/markusbrand/OpenSpec/issues/1433)) ([26f009d](https://github.com/markusbrand/OpenSpec/commit/26f009d940f311b99db7f310816bb166a99fb3ef))
* **ci+installers:** harden permission checks and guard completion/profile writes ([#1247](https://github.com/markusbrand/OpenSpec/issues/1247)) ([41ceebe](https://github.com/markusbrand/OpenSpec/commit/41ceebe2d80682fa20472261f7acf8129ce7e495))
* **ci:** enable release-please workflow on repository ([3c24bff](https://github.com/markusbrand/OpenSpec/commit/3c24bfff9ae919e87e3319c1cd6ec2666427c8bd))
* **ci:** tolerate disabled dependency graph in dependency-review action ([f01e0b6](https://github.com/markusbrand/OpenSpec/commit/f01e0b6a95b91bb83121e1ef609239e88901a284))
* **ci:** update release-please-action reference ([9e5d463](https://github.com/markusbrand/OpenSpec/commit/9e5d46365dc55e6750cda58d9805b18864eec05d))
* **ci:** use repository_dispatch for polish release notes ([#545](https://github.com/markusbrand/OpenSpec/issues/545)) ([e137dd3](https://github.com/markusbrand/OpenSpec/commit/e137dd398111e2a5660029f871d353be6c27e961))
* **ci:** use workflow_dispatch for polish release notes ([#533](https://github.com/markusbrand/OpenSpec/issues/533)) ([8332a09](https://github.com/markusbrand/OpenSpec/commit/8332a098118a6584a7104ccfe8e46669a1c24b7d))
* clarify spec naming convention and task checkbox format ([#595](https://github.com/markusbrand/OpenSpec/issues/595)) ([fc0d798](https://github.com/markusbrand/OpenSpec/commit/fc0d798f93153b304d039ddcce4197e484675f5c))
* **claude:** replace colon with dash in slash command frontmatter names ([#553](https://github.com/markusbrand/OpenSpec/issues/553)) ([07eaf7b](https://github.com/markusbrand/OpenSpec/commit/07eaf7b6911d3b08c86c6b6cb36ec68cabb4583f))
* **cli:** let --change find change names that exist on disk ([#1375](https://github.com/markusbrand/OpenSpec/issues/1375)) ([52a8bce](https://github.com/markusbrand/OpenSpec/commit/52a8bce1fd2bc98c51fa35cf0cfa05e799eb4404))
* **cli:** prevent hang in pre-commit hooks by using dynamic imports ([#380](https://github.com/markusbrand/OpenSpec/issues/380)) ([68e0a7e](https://github.com/markusbrand/OpenSpec/commit/68e0a7e68ecef7bdfd75001c05519c9c81705175))
* **cli:** reject missing roots for list and validate ([#1612](https://github.com/markusbrand/OpenSpec/issues/1612)) ([137404b](https://github.com/markusbrand/OpenSpec/commit/137404b423b7f23eedc2744586684df261d7ae40))
* **cli:** render multi-select prompts with checkbox markers ([#1463](https://github.com/markusbrand/OpenSpec/issues/1463)) ([caed05e](https://github.com/markusbrand/OpenSpec/commit/caed05e8b8cfcb1143435f41a45fb2572da6d63a))
* **cli:** resolve store pointer for view command ([#1455](https://github.com/markusbrand/OpenSpec/issues/1455)) ([6b3623a](https://github.com/markusbrand/OpenSpec/commit/6b3623a39e96f49995d38d642738b31f68e92039))
* **cli:** respect --no-interactive flag in validate command ([#395](https://github.com/markusbrand/OpenSpec/issues/395)) ([9ac6330](https://github.com/markusbrand/OpenSpec/commit/9ac63304306aa3835583d527c4d41916a3ddbe76))
* **cli:** use dynamic import for @inquirer/prompts in config command ([#392](https://github.com/markusbrand/OpenSpec/issues/392)) ([6d84924](https://github.com/markusbrand/OpenSpec/commit/6d84924c18db3f171118f2506906ef4a50683f56))
* **codex:** install skills in canonical agents directory ([#1511](https://github.com/markusbrand/OpenSpec/issues/1511)) ([59bfb27](https://github.com/markusbrand/OpenSpec/commit/59bfb27a7607ebde62959a9dcbc2f563662c04ad))
* **completion:** install the right completions for fish users ([#1364](https://github.com/markusbrand/OpenSpec/issues/1364)) ([f58b445](https://github.com/markusbrand/OpenSpec/commit/f58b4456925b6331f3e5902a1c57905afe7edbf5))
* **completions:** resolve Windows compatibility issues in zsh-installer tests ([#373](https://github.com/markusbrand/OpenSpec/issues/373)) ([cefb471](https://github.com/markusbrand/OpenSpec/commit/cefb4719aaf4b7702331fce7905eab62bcf29b4d))
* **completion:** stop emitting empty switch blocks that break the PowerShell script ([#1374](https://github.com/markusbrand/OpenSpec/issues/1374)) ([da3907b](https://github.com/markusbrand/OpenSpec/commit/da3907b8a9170711c8b7f63e18352e8577cf7df5)), closes [#1293](https://github.com/markusbrand/OpenSpec/issues/1293)
* **config:** compare prototype key guards literally so analysis can see them ([#1425](https://github.com/markusbrand/OpenSpec/issues/1425)) ([040a869](https://github.com/markusbrand/OpenSpec/commit/040a86931f5398167137a483b2e8081aec13016e))
* **config:** handle null rules field in project config ([#529](https://github.com/markusbrand/OpenSpec/issues/529)) ([6c8c778](https://github.com/markusbrand/OpenSpec/commit/6c8c77804356759ed9ee90a1a3d41fe46d3f16ae))
* **config:** label the update workflow in the picker; drop "expanded-profile" wording ([#1632](https://github.com/markusbrand/OpenSpec/issues/1632)) ([207f3cc](https://github.com/markusbrand/OpenSpec/commit/207f3cc515d81bc835f9b09d06e89469fdbb09d9))
* **config:** stop warning about rules keys that belong to another schema ([#1377](https://github.com/markusbrand/OpenSpec/issues/1377)) ([285dfd7](https://github.com/markusbrand/OpenSpec/commit/285dfd7d764752b2a1e7e8cc843d613421e62652))
* **core:** canonicalize rebuilt spec EOF ([#1528](https://github.com/markusbrand/OpenSpec/issues/1528)) ([9425897](https://github.com/markusbrand/OpenSpec/commit/942589741de35f1b8896b410d7ea70295bb137c0))
* correct archive path in onboarding template ([#585](https://github.com/markusbrand/OpenSpec/issues/585)) ([c773ef6](https://github.com/markusbrand/OpenSpec/commit/c773ef6feb61f313b9094e4cb7cbdc4079c3e1cb))
* correct regex trailing whitespace and add missing projectRoot param ([#575](https://github.com/markusbrand/OpenSpec/issues/575)) ([26ed336](https://github.com/markusbrand/OpenSpec/commit/26ed336a16b45c48937eca05d592abed8c90b430))
* **deps:** patch js-yaml and nanoid advisories via pnpm overrides ([#1635](https://github.com/markusbrand/OpenSpec/issues/1635)) ([3281f1f](https://github.com/markusbrand/OpenSpec/commit/3281f1f068c30c37d66ad70be854c605c016e419))
* detect hidden requirements in main specs ([#966](https://github.com/markusbrand/OpenSpec/issues/966)) ([c8e2072](https://github.com/markusbrand/OpenSpec/commit/c8e2072e3ae26a978f1576d37df67e64cd1db134))
* **docs:** update invalid Discord link in experimental workflow ([#555](https://github.com/markusbrand/OpenSpec/issues/555)) ([54bd3f1](https://github.com/markusbrand/OpenSpec/commit/54bd3f1ccd47a9b919c889029057bcfe59395ed5))
* **docs:** Update migration guide action diagram formatting ([#644](https://github.com/markusbrand/OpenSpec/issues/644)) ([4573c28](https://github.com/markusbrand/OpenSpec/commit/4573c280488bd0c23ab8382a3b065a63de8d5931))
* **doctor:** note when a store checkout is behind its upstream ref ([#1287](https://github.com/markusbrand/OpenSpec/issues/1287)) ([520aa8c](https://github.com/markusbrand/OpenSpec/commit/520aa8c470dad5b0c62c67f9ddfa08b6062cff00))
* escape glob-special characters in directory paths ([#984](https://github.com/markusbrand/OpenSpec/issues/984)) ([7a39e88](https://github.com/markusbrand/OpenSpec/commit/7a39e887bbeb1f72d33fc1f03cc82afee2cddf03))
* **explore:** scaffold changes before capturing artifacts ([#1503](https://github.com/markusbrand/OpenSpec/issues/1503)) ([8a3850d](https://github.com/markusbrand/OpenSpec/commit/8a3850da735e241c14ad94935463f879b33f21a9))
* **feedback:** keep full reports in issue bodies ([#1653](https://github.com/markusbrand/OpenSpec/issues/1653)) ([fc0fec1](https://github.com/markusbrand/OpenSpec/commit/fc0fec1250642a8d5dafe615926ddf03a3ce0a97))
* **feedback:** submit feedback when the repo has no feedback label ([#1396](https://github.com/markusbrand/OpenSpec/issues/1396)) ([60f720c](https://github.com/markusbrand/OpenSpec/commit/60f720c43acd94de7645ac8629c614ede4682b6a)), closes [#1091](https://github.com/markusbrand/OpenSpec/issues/1091)
* generate TOML commands for Qwen Code (fixes [#293](https://github.com/markusbrand/OpenSpec/issues/293)) ([#317](https://github.com/markusbrand/OpenSpec/issues/317)) ([b5a7d09](https://github.com/markusbrand/OpenSpec/commit/b5a7d096f04425db9b79ba897a959b872a6dae85))
* **global-config:** respect XDG_CONFIG_HOME on all platforms ([#378](https://github.com/markusbrand/OpenSpec/issues/378)) ([f39cc5c](https://github.com/markusbrand/OpenSpec/commit/f39cc5c1fb9d3ec14de75ddc33c8190b742e01ae))
* handle XDG_CONFIG_HOME and %APPDATA% in telemetry config path ([#990](https://github.com/markusbrand/OpenSpec/issues/990)) ([18c445a](https://github.com/markusbrand/OpenSpec/commit/18c445a48d3fce94883296d5e76dd3aed8f57db2))
* honor --no-validate and ignore metadata during archive validation ([#190](https://github.com/markusbrand/OpenSpec/issues/190)) ([88b260d](https://github.com/markusbrand/OpenSpec/commit/88b260d51f34577189ad3431e5022b4c3950efd4))
* improve delta spec validation with case-insensitive headers and empty section detection ([#191](https://github.com/markusbrand/OpenSpec/issues/191)) ([ecddffc](https://github.com/markusbrand/OpenSpec/commit/ecddffc22e82faa53d76cf26b19b4b79545e08bb))
* improve Windows compatibility in tests ([#646](https://github.com/markusbrand/OpenSpec/issues/646)) ([62d4391](https://github.com/markusbrand/OpenSpec/commit/62d4391268e658ef71c44a0fbea857e985fef50c))
* **init:** only advertise slash commands the profile installs ([#1410](https://github.com/markusbrand/OpenSpec/issues/1410)) ([b3b05e1](https://github.com/markusbrand/OpenSpec/commit/b3b05e1abeb312caefd57e60be799aeb466c1d0e))
* **init:** only show 'Restart your IDE' hint for IDE-embedded tools ([#1610](https://github.com/markusbrand/OpenSpec/issues/1610)) ([17581c1](https://github.com/markusbrand/OpenSpec/commit/17581c11edf6b27ef18be7be1e4dcc06c81a3fff))
* **init:** prevent false GitHub Copilot auto-detection from bare .github/ directory ([#917](https://github.com/markusbrand/OpenSpec/issues/917)) ([765df47](https://github.com/markusbrand/OpenSpec/commit/765df47ad3d317e451a9ba0a24d8fc9f0b35f586))
* **init:** skip the welcome animation for reduced-motion users ([#1462](https://github.com/markusbrand/OpenSpec/issues/1462)) ([ebf66c7](https://github.com/markusbrand/OpenSpec/commit/ebf66c7ee1df3f7465d7f480753f952483133a73))
* **init:** use skill references for tools without a command adapter ([#1404](https://github.com/markusbrand/OpenSpec/issues/1404)) ([a84ae70](https://github.com/markusbrand/OpenSpec/commit/a84ae70e8c6ef6ffaab56599d6f91fa39873e63d))
* **instructions:** separate context and rules from template in JSON output ([#547](https://github.com/markusbrand/OpenSpec/issues/547)) ([e2c333e](https://github.com/markusbrand/OpenSpec/commit/e2c333e493f5cdd3a22f0fdfaa6e35e88072eb7c))
* make completion install opt-in, fix PowerShell encoding corruption ([#949](https://github.com/markusbrand/OpenSpec/issues/949)) ([1445282](https://github.com/markusbrand/OpenSpec/commit/144528257decdebf310db0d8b6d90eeeb9ee7057))
* make requirement header parsing case-insensitive ([#1031](https://github.com/markusbrand/OpenSpec/issues/1031)) ([2d189ce](https://github.com/markusbrand/OpenSpec/commit/2d189ce5e04f6e8dc785a3122d73a3e303bdc502))
* manually merge and archive four completed OpenSpec changes ([#226](https://github.com/markusbrand/OpenSpec/issues/226)) ([fef961f](https://github.com/markusbrand/OpenSpec/commit/fef961f6e3e21fadc20074b2042d47d578936821))
* **nix:** build with Node.js 22 now that nixpkgs marks Node 20 insecure ([#1406](https://github.com/markusbrand/OpenSpec/issues/1406)) ([9d40ae9](https://github.com/markusbrand/OpenSpec/commit/9d40ae98f08e2143eac66f4acb7e7b9c94e83ee7))
* **nix:** update pnpm-deps hash in flake.nix ([3dbf00f](https://github.com/markusbrand/OpenSpec/commit/3dbf00f9fe10e9c84a6438a977fcb21431a5f044))
* normalize paths for cross-platform consistency in logging ([#135](https://github.com/markusbrand/OpenSpec/issues/135)) ([42e3118](https://github.com/markusbrand/OpenSpec/commit/42e3118b0cec9ae5f133bcd62a38e93922b5c28c))
* offer parent flags in Bash and PowerShell completions when subcommands exist ([#466](https://github.com/markusbrand/OpenSpec/issues/466)) ([ae85a72](https://github.com/markusbrand/OpenSpec/commit/ae85a7229d86c62782ab39ed035214fd82897b28)), closes [#463](https://github.com/markusbrand/OpenSpec/issues/463)
* **onboard:** add Windows PowerShell alternatives for shell commands ([#638](https://github.com/markusbrand/OpenSpec/issues/638)) ([0541f93](https://github.com/markusbrand/OpenSpec/commit/0541f93dddd1739c6c924c160ef6ec5266528b94))
* **onboard:** replace broken preflight check with direct config file test ([#637](https://github.com/markusbrand/OpenSpec/issues/637)) ([be51bcb](https://github.com/markusbrand/OpenSpec/commit/be51bcbc6a390468066d36df73f3ee3f3b9daf3e))
* **opencode:** pass command arguments to workflows ([#1664](https://github.com/markusbrand/OpenSpec/issues/1664)) ([15e50d6](https://github.com/markusbrand/OpenSpec/commit/15e50d6889708ef703b1a37b19205390ee819cb8))
* **opencode:** remove hardcoded agent field from slash commands ([#335](https://github.com/markusbrand/OpenSpec/issues/335)) ([17d1e5d](https://github.com/markusbrand/OpenSpec/commit/17d1e5db3f2043267602d45156b18e0d3e2a6913)), closes [#334](https://github.com/markusbrand/OpenSpec/issues/334)
* **opencode:** transform command references from colon to hyphen format ([#626](https://github.com/markusbrand/OpenSpec/issues/626)) ([697738b](https://github.com/markusbrand/OpenSpec/commit/697738bc9b8a8ea2d9fb148d0c12f0795a513b6b))
* **opencode:** use plural commands/ directory to match OpenCode convention ([#760](https://github.com/markusbrand/OpenSpec/issues/760)) ([61eb999](https://github.com/markusbrand/OpenSpec/commit/61eb999f7c6c0fc98d2e7f3678756fce6a3f4378))
* **packaging:** print the completions tip from the CLI, not a postinstall script ([#1704](https://github.com/markusbrand/OpenSpec/issues/1704)) ([7276c6c](https://github.com/markusbrand/OpenSpec/commit/7276c6c26832f699a63544302d38b1af8ddb9844))
* **parser:** ignore fenced code blocks when parsing delta specs ([#1151](https://github.com/markusbrand/OpenSpec/issues/1151)) ([18cbf5d](https://github.com/markusbrand/OpenSpec/commit/18cbf5d32ffe1bff4fff692e24568c605cf1e0fa))
* **parser:** stop delta section dividers from becoming phantom requirements ([#1411](https://github.com/markusbrand/OpenSpec/issues/1411)) ([c439a4e](https://github.com/markusbrand/OpenSpec/commit/c439a4ee48ef02dcdae6ac8101b7d12924695e7e))
* pi.dev command reference transforms and template args passing ([#950](https://github.com/markusbrand/OpenSpec/issues/950)) ([caafd7c](https://github.com/markusbrand/OpenSpec/commit/caafd7c9bf66788f70c542ad719fdd3d287b2e1e))
* **powershell-generator:** remove trailing comma from last entry ([#485](https://github.com/markusbrand/OpenSpec/issues/485)) ([07dd634](https://github.com/markusbrand/OpenSpec/commit/07dd6349860db5f620b3712bf65308a20786cd42))
* prefer native realpath for canonical paths ([#972](https://github.com/markusbrand/OpenSpec/issues/972)) ([93f7b79](https://github.com/markusbrand/OpenSpec/commit/93f7b797cf818cecb26abfc16dfbca9c2ec199e7))
* prevent false 'already configured' detection for tools ([#239](https://github.com/markusbrand/OpenSpec/issues/239)) ([cf0de5e](https://github.com/markusbrand/OpenSpec/commit/cf0de5e5697c5ff3978d857eb652fee4d040e7ab))
* prevent implementation during explore mode ([#515](https://github.com/markusbrand/OpenSpec/issues/515)) ([690c752](https://github.com/markusbrand/OpenSpec/commit/690c75225c36248c8bcbfc3a367c1cb3d7a7b55b))
* **profiles:** include sync with archive workflows ([#1663](https://github.com/markusbrand/OpenSpec/issues/1663)) ([cf06d45](https://github.com/markusbrand/OpenSpec/commit/cf06d45f91aa907bf910dc317e9fcec26c9203b3))
* **propose:** use the requested workflow schema ([#1504](https://github.com/markusbrand/OpenSpec/issues/1504)) ([f43fe0e](https://github.com/markusbrand/OpenSpec/commit/f43fe0e7d51d0c9b293b88b6b2dff686e2fb2b6d))
* **propose:** wait for explicit implementation request ([#1501](https://github.com/markusbrand/OpenSpec/issues/1501)) ([0b20ae3](https://github.com/markusbrand/OpenSpec/commit/0b20ae3964283bdcb4e34ea7380770857f6a339c))
* **qwen:** generate Markdown commands instead of deprecated TOML format ([#1191](https://github.com/markusbrand/OpenSpec/issues/1191)) ([7704702](https://github.com/markusbrand/OpenSpec/commit/7704702d61fa71e4f553c21a06bdf8e4ee803b4a))
* recreate missing openspec template files in extend mode ([#238](https://github.com/markusbrand/OpenSpec/issues/238)) ([fb1d37e](https://github.com/markusbrand/OpenSpec/commit/fb1d37e56ead288b639541529fc9521f6facdce3))
* **resolution:** converge validate, view, and archive onto canonical resolution ([#1182](https://github.com/markusbrand/OpenSpec/issues/1182), [#1202](https://github.com/markusbrand/OpenSpec/issues/1202), [#1156](https://github.com/markusbrand/OpenSpec/issues/1156)) ([#1280](https://github.com/markusbrand/OpenSpec/issues/1280)) ([a325305](https://github.com/markusbrand/OpenSpec/commit/a3253051ea1934fd0d76620addb855dfce801742))
* **schema:** preserve YAML formatting when forking a schema ([#1607](https://github.com/markusbrand/OpenSpec/issues/1607)) ([8127c7b](https://github.com/markusbrand/OpenSpec/commit/8127c7b7ccc52d0e6749e7290c548ef199a128d0))
* **schema:** resolve main-spec reads against the store-aware root ([#1703](https://github.com/markusbrand/OpenSpec/issues/1703)) ([9643888](https://github.com/markusbrand/OpenSpec/commit/9643888a7525467c7a076bfec9bb075910e78bb8))
* **schemas:** honor canonical root selection ([#1616](https://github.com/markusbrand/OpenSpec/issues/1616)) ([8364428](https://github.com/markusbrand/OpenSpec/commit/836442866134187434f59c44d96c78994809b9fe))
* **schemas:** include spec content guidance from concepts docs in specs instructions ([#1326](https://github.com/markusbrand/OpenSpec/issues/1326)) ([4fdb2a5](https://github.com/markusbrand/OpenSpec/commit/4fdb2a5f08b434153c1a92fb17e7df57b906e4fe)), closes [#1289](https://github.com/markusbrand/OpenSpec/issues/1289)
* **schemas:** resolve blocking open questions instead of deferring them to design.md ([#1366](https://github.com/markusbrand/OpenSpec/issues/1366)) ([a313bf1](https://github.com/markusbrand/OpenSpec/commit/a313bf1bfe45d159dc08da8f8a940ebda9e4bd5a))
* **schemas:** stop design.md from restating the proposal ([#1401](https://github.com/markusbrand/OpenSpec/issues/1401)) ([b33b15d](https://github.com/markusbrand/OpenSpec/commit/b33b15d98ae929624c991632c7382ebc234d4ca7))
* **schema:** validate artifacts before forced init ([#1446](https://github.com/markusbrand/OpenSpec/issues/1446)) ([5348da9](https://github.com/markusbrand/OpenSpec/commit/5348da930c4038ffd5b5a521702b71315dcd0019))
* **security:** keep paths on a short leash ([#1499](https://github.com/markusbrand/OpenSpec/issues/1499)) ([9cd845f](https://github.com/markusbrand/OpenSpec/commit/9cd845fc459b71486d9f2424c2e1f38e2ca8766e))
* **security:** patch fast-uri, postcss, and brace-expansion advisories ([#1510](https://github.com/markusbrand/OpenSpec/issues/1510)) ([02b124e](https://github.com/markusbrand/OpenSpec/commit/02b124e6b64369e283db1827a4470e0c1553ba8c))
* set USERPROFILE for Windows compatibility in telemetry tests ([#469](https://github.com/markusbrand/OpenSpec/issues/469)) ([4715138](https://github.com/markusbrand/OpenSpec/commit/47151389271fba6063fb7680c572c58a2d4a9560))
* silence telemetry network errors in firewalled environments ([#959](https://github.com/markusbrand/OpenSpec/issues/959)) ([4df6a48](https://github.com/markusbrand/OpenSpec/commit/4df6a4889bc5a0a7f06a0796e8d447f708173c19))
* skip additional Windows-specific tests ([#465](https://github.com/markusbrand/OpenSpec/issues/465)) ([504c93b](https://github.com/markusbrand/OpenSpec/commit/504c93bdf10da0f053770faee2934eca1311c951))
* skip Windows-specific permission tests that rely on chmod() ([#464](https://github.com/markusbrand/OpenSpec/issues/464)) ([c4a54a8](https://github.com/markusbrand/OpenSpec/commit/c4a54a8d5441d82dbf9812ac0f1ab032f9131ecf))
* **spec:** align cli-completion spec with implementation ([#360](https://github.com/markusbrand/OpenSpec/issues/360)) ([5e1cef3](https://github.com/markusbrand/OpenSpec/commit/5e1cef3b3ba3d129374ada657bebc7bee61f0420))
* **specs:** discover nested spec paths recursively across parse, apply, and archive ([#1355](https://github.com/markusbrand/OpenSpec/issues/1355)) ([3fdd2f2](https://github.com/markusbrand/OpenSpec/commit/3fdd2f2f7b055d25672d7a36ba006dcfc8478eb0))
* **specs:** warn before archiving deletes a note next to a requirement ([#1490](https://github.com/markusbrand/OpenSpec/issues/1490)) ([45cca5d](https://github.com/markusbrand/OpenSpec/commit/45cca5db6137ed209117cc70510eb3e057fb981b))
* **status:** clarify planning completion ([#1505](https://github.com/markusbrand/OpenSpec/issues/1505)) ([afea111](https://github.com/markusbrand/OpenSpec/commit/afea111cd45c2c07f825b3912ce3b925e1cd2c07))
* **status:** exit gracefully when no changes exist ([#759](https://github.com/markusbrand/OpenSpec/issues/759)) ([afdca0d](https://github.com/markusbrand/OpenSpec/commit/afdca0d5dab1aa109cfd8848b2512333ccad60c3))
* **status:** order artifacts by the schema, not the alphabet ([#1465](https://github.com/markusbrand/OpenSpec/issues/1465)) ([f917b8b](https://github.com/markusbrand/OpenSpec/commit/f917b8be5e1100189ef62320ba9322763053640e))
* suppress ora spinner output when --json flag is used ([#960](https://github.com/markusbrand/OpenSpec/issues/960)) ([a18d992](https://github.com/markusbrand/OpenSpec/commit/a18d992fa1c1f53512870a2272faebe367af0062)), closes [#957](https://github.com/markusbrand/OpenSpec/issues/957)
* **tasks:** count indented sub-tasks in task progress ([#1486](https://github.com/markusbrand/OpenSpec/issues/1486)) ([427abf4](https://github.com/markusbrand/OpenSpec/commit/427abf40ac45a9a44f78eb74c81f53f9f4197ccf)), closes [#1485](https://github.com/markusbrand/OpenSpec/issues/1485)
* **tasks:** include verification in generated plans ([#1660](https://github.com/markusbrand/OpenSpec/issues/1660)) ([7da3f34](https://github.com/markusbrand/OpenSpec/commit/7da3f34fb66d602bd987caa7dddcf3d6621e7d44))
* **telemetry:** honor telemetry.enabled in global config ([#1513](https://github.com/markusbrand/OpenSpec/issues/1513)) ([622c509](https://github.com/markusbrand/OpenSpec/commit/622c509a1349c3ad9c52cd1a4ee007bd47549204))
* **telemetry:** print first-run notice to stderr, not stdout ([#1666](https://github.com/markusbrand/OpenSpec/issues/1666)) ([db981f2](https://github.com/markusbrand/OpenSpec/commit/db981f279d818b5c17096a35734d22161f035412))
* **telemetry:** send the usage event directly instead of via posthog-node ([#1476](https://github.com/markusbrand/OpenSpec/issues/1476)) ([8731290](https://github.com/markusbrand/OpenSpec/commit/87312900f532c6c13ea556d4badaff2efdfa9602))
* **telemetry:** suppress first-run notice in --json mode ([#1609](https://github.com/markusbrand/OpenSpec/issues/1609)) ([804427b](https://github.com/markusbrand/OpenSpec/commit/804427b6ff3f3b35b542365ba8b32e183fce3287))
* **templates:** auto-select the only active change instead of always prompting ([#1468](https://github.com/markusbrand/OpenSpec/issues/1468)) ([fc886af](https://github.com/markusbrand/OpenSpec/commit/fc886af7f93068482bbf2c66fd1eb76b40c6a22f))
* **templates:** correct generated workflow guidance ([#1500](https://github.com/markusbrand/OpenSpec/issues/1500)) ([26bd1d4](https://github.com/markusbrand/OpenSpec/commit/26bd1d4e5c6c6ba75bd7d6136424019b2bf89ced))
* **templates:** deduplicate apply skill and command instructions ([#1153](https://github.com/markusbrand/OpenSpec/issues/1153)) ([0b233ef](https://github.com/markusbrand/OpenSpec/commit/0b233efb862445d99aa0365aae3b7ef7c5ea915b))
* **templates:** don't archive a change before its spec sync finishes ([#1394](https://github.com/markusbrand/OpenSpec/issues/1394)) ([b474f81](https://github.com/markusbrand/OpenSpec/commit/b474f81cb4bebbeff0e447fd78c34a613ebd02fa))
* **templates:** give explore the project's context and rules ([#1408](https://github.com/markusbrand/OpenSpec/issues/1408)) ([378d468](https://github.com/markusbrand/OpenSpec/commit/378d468ad348dc1e973ed30c5cfa458fb77c9de3))
* **templates:** make the schema instruction field authoritative for artifact creation ([#1405](https://github.com/markusbrand/OpenSpec/issues/1405)) ([5dfef4b](https://github.com/markusbrand/OpenSpec/commit/5dfef4b00c233fbe78f40488bd4ff98f4204684c))
* **templates:** re-read dependency artifacts from disk before creating the next one ([#1368](https://github.com/markusbrand/OpenSpec/issues/1368)) ([de78c31](https://github.com/markusbrand/OpenSpec/commit/de78c31ffd885a0558ae55d332f74d5485dc01c0))
* **templates:** replace Claude-only AskUserQuestion instruction with neutral ask-the-user guidance ([#1464](https://github.com/markusbrand/OpenSpec/issues/1464)) ([5bcf057](https://github.com/markusbrand/OpenSpec/commit/5bcf05766a70ec0163c3e700a3029b1c1da895d8)), closes [#920](https://github.com/markusbrand/OpenSpec/issues/920) [#717](https://github.com/markusbrand/OpenSpec/issues/717)
* **templates:** replace Claude-only TodoWrite instruction with a generic todo list ([#1403](https://github.com/markusbrand/OpenSpec/issues/1403)) ([2d6c447](https://github.com/markusbrand/OpenSpec/commit/2d6c447100c51fb1e5f65c6f6a35ce02a3196a10)), closes [#643](https://github.com/markusbrand/OpenSpec/issues/643)
* **templates:** restore intentional apply skill/command separation ([#1514](https://github.com/markusbrand/OpenSpec/issues/1514)) ([06b310b](https://github.com/markusbrand/OpenSpec/commit/06b310bf57b7fcf0dbeba73578a8ae06e1ddc72c))
* **templates:** show the main spec format in the sync-specs skill ([#1402](https://github.com/markusbrand/OpenSpec/issues/1402)) ([0da5f98](https://github.com/markusbrand/OpenSpec/commit/0da5f98e147543a44379e32295e2e9798d775d83)), closes [#1120](https://github.com/markusbrand/OpenSpec/issues/1120)
* **templates:** stop instructing a second date prefix on dated archive names ([#1388](https://github.com/markusbrand/OpenSpec/issues/1388)) ([9b5d2cd](https://github.com/markusbrand/OpenSpec/commit/9b5d2cdd0c1aa4b1b49da4f95c6cec8d7d38b155))
* **templates:** stop propose from skipping the specs artifact ([#1412](https://github.com/markusbrand/OpenSpec/issues/1412)) ([1dc670d](https://github.com/markusbrand/OpenSpec/commit/1dc670deea741b8313b8a22fb975741f84677b3f))
* **templates:** stop the bulk archive when the user picks Cancel ([#1398](https://github.com/markusbrand/OpenSpec/issues/1398)) ([97d441a](https://github.com/markusbrand/OpenSpec/commit/97d441a8ee2738d3008709e61acfc91925c7ae3a)), closes [#1381](https://github.com/markusbrand/OpenSpec/issues/1381)
* **templates:** use store-aware root for main specs in sync/archive ([#1360](https://github.com/markusbrand/OpenSpec/issues/1360)) ([15ef3bc](https://github.com/markusbrand/OpenSpec/commit/15ef3bcf3139384da9266c06239733e6658d6b7e)), closes [#1358](https://github.com/markusbrand/OpenSpec/issues/1358)
* **ui:** preserve Windows input after welcome screen ([#1175](https://github.com/markusbrand/OpenSpec/issues/1175)) ([596d6ba](https://github.com/markusbrand/OpenSpec/commit/596d6ba7f41160da9ab99cf4b891353baeb7eeb0))
* update polish-release-notes workflow to use correct Claude Code action parameters ([#504](https://github.com/markusbrand/OpenSpec/issues/504)) ([c57e421](https://github.com/markusbrand/OpenSpec/commit/c57e421cc2a46105b8ca7685b10f3c21dc7df782))
* **update:** don't hijack the agents target on legacy Codex upgrade ([#1522](https://github.com/markusbrand/OpenSpec/issues/1522)) ([07dea6e](https://github.com/markusbrand/OpenSpec/commit/07dea6ed2faf71c8b9f4944d64246f2ff39eeffc))
* **update:** only suggest IDE restarts when needed ([#1656](https://github.com/markusbrand/OpenSpec/issues/1656)) ([a72a74d](https://github.com/markusbrand/OpenSpec/commit/a72a74de6571c26fd79a193bb33fa3b8e1a767fb))
* **update:** refresh command files for tools configured without skills ([#1442](https://github.com/markusbrand/OpenSpec/issues/1442)) ([10fa39b](https://github.com/markusbrand/OpenSpec/commit/10fa39b1c3a3e88c02ae7d3053864c03a793ff47))
* **update:** warn when a custom profile is missing core workflows ([#1354](https://github.com/markusbrand/OpenSpec/issues/1354)) ([d423a59](https://github.com/markusbrand/OpenSpec/commit/d423a594f967684114acc68d132d4081392fd2a8))
* use actionCommand for telemetry command tracking ([#472](https://github.com/markusbrand/OpenSpec/issues/472)) ([4971cda](https://github.com/markusbrand/OpenSpec/commit/4971cda812525b7be28f3dedb0278c044c9ebe9f))
* use change-id as fallback title instead of "Untitled Change" ([#236](https://github.com/markusbrand/OpenSpec/issues/236)) ([92b4546](https://github.com/markusbrand/OpenSpec/commit/92b45462c6493a6deac1edbe293efcbd3ce07a2b))
* use correct scoped package name in changeset ([#166](https://github.com/markusbrand/OpenSpec/issues/166)) ([a50105e](https://github.com/markusbrand/OpenSpec/commit/a50105e03cc00138e1647a022081b91e400640b3))
* use local dates for CLI date-only values ([#1361](https://github.com/markusbrand/OpenSpec/issues/1361)) ([9acddcd](https://github.com/markusbrand/OpenSpec/commit/9acddcda07815e9bec091c04f3e7b72d3ccf90c9))
* use path.join for cross-platform compatibility in Codex FILE_PATHS ([#134](https://github.com/markusbrand/OpenSpec/issues/134)) ([a785c2a](https://github.com/markusbrand/OpenSpec/commit/a785c2a99ac112d2eea55aa3c6d90204b6a8d7b1))
* use path.resolve in Codex adapter test for Windows compatibility ([#624](https://github.com/markusbrand/OpenSpec/issues/624)) ([5e2e02c](https://github.com/markusbrand/OpenSpec/commit/5e2e02c090304e86007d1727414da78de9a9608e))
* use skill references in SKILL.md for skills-only delivery ([#1194](https://github.com/markusbrand/OpenSpec/issues/1194)) ([b7c85c7](https://github.com/markusbrand/OpenSpec/commit/b7c85c741ca56748a4ae095b573fe4550c5c977f))
* use Skill tool for sync invocation in archive templates ([#632](https://github.com/markusbrand/OpenSpec/issues/632)) ([1d34e72](https://github.com/markusbrand/OpenSpec/commit/1d34e72f1071b64ee1dc551d4c07e843d68b448b))
* **validate:** allow non-English requirements ([#1502](https://github.com/markusbrand/OpenSpec/issues/1502)) ([ece8660](https://github.com/markusbrand/OpenSpec/commit/ece8660d44bd19b86440376327752cda3d7b0717))
* **validate:** allow numeric-prefixed change names ([#1435](https://github.com/markusbrand/OpenSpec/issues/1435)) ([6a5171e](https://github.com/markusbrand/OpenSpec/commit/6a5171e18630db4ed8e78c9edfaae4be532e2af6))
* **validate:** count every level-4 header as a scenario in the loss guard ([#1521](https://github.com/markusbrand/OpenSpec/issues/1521)) ([c751b3d](https://github.com/markusbrand/OpenSpec/commit/c751b3da52a7f06d6662a8673feff4685566cdd4))
* **validate:** reject a delta spec at the change's specs/ root ([#1392](https://github.com/markusbrand/OpenSpec/issues/1392)) ([a13abea](https://github.com/markusbrand/OpenSpec/commit/a13abeac47d419462b0193dbf9423dd466ffe6c7))
* **validate:** report scenarios a MODIFIED requirement would drop ([#1482](https://github.com/markusbrand/OpenSpec/issues/1482)) ([84ebc57](https://github.com/markusbrand/OpenSpec/commit/84ebc57cb3f0e91b93484484092fdc2f9fcf39e6))
* **validate:** warn on ambiguous task numbering ([#1523](https://github.com/markusbrand/OpenSpec/issues/1523)) ([e50bd09](https://github.com/markusbrand/OpenSpec/commit/e50bd0983dc8dc48250e3181f36e28450542f2ab))
* **validator:** hint when SHALL/MUST appears only in requirement header ([#1135](https://github.com/markusbrand/OpenSpec/issues/1135)) ([9aded17](https://github.com/markusbrand/OpenSpec/commit/9aded17af760ad2015ed3e91ce3b93bec9f3adfc)), closes [#356](https://github.com/markusbrand/OpenSpec/issues/356)
* **vitest:** cap worker parallelism to prevent process storms ([#500](https://github.com/markusbrand/OpenSpec/issues/500)) ([322bfd4](https://github.com/markusbrand/OpenSpec/commit/322bfd455a8d60b00fb69089bfc9ee800bba7a0b))
* **website:** show openspec init in the homepage getting-started box ([#1434](https://github.com/markusbrand/OpenSpec/issues/1434)) ([b976fc0](https://github.com/markusbrand/OpenSpec/commit/b976fc06661ade5aeed13d2d50320496b7c55897)), closes [#1282](https://github.com/markusbrand/OpenSpec/issues/1282)
* Windows path compatibility in resolver tests ([#524](https://github.com/markusbrand/OpenSpec/issues/524)) ([32fc19a](https://github.com/markusbrand/OpenSpec/commit/32fc19a60d44ed6c400286cb575be12e117020f9))
* **workflow:** keep no-spec schema changes valid ([#1655](https://github.com/markusbrand/OpenSpec/issues/1655)) ([a2b965a](https://github.com/markusbrand/OpenSpec/commit/a2b965aa5e0b7b3d096a5ab6d6506b5a26a1993a))
* **workflows:** preserve nested spec paths ([#1508](https://github.com/markusbrand/OpenSpec/issues/1508)) ([3d0701f](https://github.com/markusbrand/OpenSpec/commit/3d0701f871438d7c844a3a1ec565a5c2a4a83220))


### Performance Improvements

* add path filtering to Nix validation CI job ([#518](https://github.com/markusbrand/OpenSpec/issues/518)) ([dbd4ed7](https://github.com/markusbrand/OpenSpec/commit/dbd4ed7bfbde277107b4576cf8ffb986831f1c7e))


### Documentation

* add anvil to Community Schemas table ([#1469](https://github.com/markusbrand/OpenSpec/issues/1469)) ([ec6cbb4](https://github.com/markusbrand/OpenSpec/commit/ec6cbb4b0bd9c6f0ff2ffac88114f8ec5c5517a8))
* add artifact POC analysis document ([#398](https://github.com/markusbrand/OpenSpec/issues/398)) ([2c2599b](https://github.com/markusbrand/OpenSpec/commit/2c2599b1f0587a12680da2a8f07a471ee3c35eed))
* add cloudflare documentation deployment website ([#1285](https://github.com/markusbrand/OpenSpec/issues/1285)) ([65a7233](https://github.com/markusbrand/OpenSpec/commit/65a7233f36ad022e99cc23115279768b8ca24fb6))
* add Community Schemas section + README entry ([#1043](https://github.com/markusbrand/OpenSpec/issues/1043)) ([76c80f8](https://github.com/markusbrand/OpenSpec/commit/76c80f80f3be9e6baf47fe1dee5e1c6a85e23034)), closes [#970](https://github.com/markusbrand/OpenSpec/issues/970)
* add Crush to supported AI tools in README ([#235](https://github.com/markusbrand/OpenSpec/issues/235)) ([5ab438f](https://github.com/markusbrand/OpenSpec/commit/5ab438f5fd85bd95c7769a373ea570c3d639513c))
* add deno install instructions ([#1079](https://github.com/markusbrand/OpenSpec/issues/1079)) ([1da6dfa](https://github.com/markusbrand/OpenSpec/commit/1da6dfa8d74675f888abba50934e43e16af01dc9))
* add e2e-runbooks to Community Schemas table ([#1255](https://github.com/markusbrand/OpenSpec/issues/1255)) ([fdf3d12](https://github.com/markusbrand/OpenSpec/commit/fdf3d1282da691e1d0e66464060e12a25adb8991))
* add experimental workflow (OPSX) user guide ([#456](https://github.com/markusbrand/OpenSpec/issues/456)) ([3ed1270](https://github.com/markusbrand/OpenSpec/commit/3ed1270316353e4fde994e2f9e4c680096488410))
* add guidance for populating project-level context ([#241](https://github.com/markusbrand/OpenSpec/issues/241)) ([a665807](https://github.com/markusbrand/OpenSpec/commit/a66580735c3da8563749760fca694592e28e6f17))
* add MAINTAINERS.md with core maintainers and advisors ([#495](https://github.com/markusbrand/OpenSpec/issues/495)) ([08c3493](https://github.com/markusbrand/OpenSpec/commit/08c349369a6781ce2fa23e3b97a147e87809e77a))
* add nanopm to community schemas catalog ([#1109](https://github.com/markusbrand/OpenSpec/issues/1109)) ([a824aae](https://github.com/markusbrand/OpenSpec/commit/a824aae9daaae5847cb6a43bcf94b05f0c66f461))
* add OPSX experimental workflow visibility to README ([#460](https://github.com/markusbrand/OpenSpec/issues/460)) ([bb9f6ce](https://github.com/markusbrand/OpenSpec/commit/bb9f6ce0ea108e8c861d16ed6bce32740e26dc74))
* add project-config demo guide ([#521](https://github.com/markusbrand/OpenSpec/issues/521)) ([90d05b7](https://github.com/markusbrand/OpenSpec/commit/90d05b71154a627a349433f70169bbff69764ecb))
* add spec-kit comparison and comparison overview section ([#127](https://github.com/markusbrand/OpenSpec/issues/127)) ([d84069a](https://github.com/markusbrand/OpenSpec/commit/d84069a3ae32e7ea2c21b2e1805c344e1dff3722))
* add workspace reimplementation proposal slices ([#1025](https://github.com/markusbrand/OpenSpec/issues/1025)) ([cb9641a](https://github.com/markusbrand/OpenSpec/commit/cb9641a45054391c8386ee5eff150073207ca413))
* align cli-update OpenCode spec with commands/ and opsx-* paths ([#1170](https://github.com/markusbrand/OpenSpec/issues/1170)) ([d2082d1](https://github.com/markusbrand/OpenSpec/commit/d2082d1f91558f2802a099167728e3cfdd0df7de))
* catalog intent-driven community schema ([#1487](https://github.com/markusbrand/OpenSpec/issues/1487)) ([1014c59](https://github.com/markusbrand/OpenSpec/commit/1014c59ed1515206fcaec334b4be15183cfa0061))
* clarify Bun install still requires Node ([#1032](https://github.com/markusbrand/OpenSpec/issues/1032)) ([a974c67](https://github.com/markusbrand/OpenSpec/commit/a974c679864e39e64630b1e792f9b561c3f0ea7c))
* clarify change name format ([#1261](https://github.com/markusbrand/OpenSpec/issues/1261)) ([4ef0761](https://github.com/markusbrand/OpenSpec/commit/4ef07610802276ef04235ce8d780cdc07b6b0ab4))
* clarify GitHub Copilot CLI limitation for custom prompts ([#676](https://github.com/markusbrand/OpenSpec/issues/676)) ([c574e79](https://github.com/markusbrand/OpenSpec/commit/c574e7992dc9d3ac019f8c2e882406f696271eb6))
* clarify initiative-first workspace model ([#969](https://github.com/markusbrand/OpenSpec/issues/969)) ([c0f2904](https://github.com/markusbrand/OpenSpec/commit/c0f29044f9addb13b4c0873d1e7c8177abe04500))
* comprehensive overhaul — discoverability, explore-first, and closing recurring doc-request issues ([#1237](https://github.com/markusbrand/OpenSpec/issues/1237)) ([bb1f18c](https://github.com/markusbrand/OpenSpec/commit/bb1f18c483e8c53485091a08d1cbd4d71f1576ac))
* expand workspace planning explorations ([#965](https://github.com/markusbrand/OpenSpec/issues/965)) ([cd5e493](https://github.com/markusbrand/OpenSpec/commit/cd5e49346f91f37d18f0035ca50ed17d9be2c062))
* fix docs/concepts nested code-block format ([#763](https://github.com/markusbrand/OpenSpec/issues/763)) ([d199dfa](https://github.com/markusbrand/OpenSpec/commit/d199dfa407811977d832927ff25fd908f97fcf9c))
* fix openspec status examples in cli.md ([#761](https://github.com/markusbrand/OpenSpec/issues/761)) ([3d3bf96](https://github.com/markusbrand/OpenSpec/commit/3d3bf960612f7bdad6c141fe47b45f16463aaee7))
* **installation:** add an AI-assistant setup prompt ([#1466](https://github.com/markusbrand/OpenSpec/issues/1466)) ([9a61f3f](https://github.com/markusbrand/OpenSpec/commit/9a61f3f30d2025807d2e5b9715ee68bde6dd8f54))
* **migration-guide:** fix inconsistent /opsx:sync description ([#1059](https://github.com/markusbrand/OpenSpec/issues/1059)) ([053d8a5](https://github.com/markusbrand/OpenSpec/commit/053d8a59d587f3c027a06ad80503a6b43d4f2a92))
* modernize opsx.md ([#616](https://github.com/markusbrand/OpenSpec/issues/616)) ([ddbfa52](https://github.com/markusbrand/OpenSpec/commit/ddbfa529f4903bffc4bbef39e16bc1fab7730e6c))
* note restart for slash commands ([#182](https://github.com/markusbrand/OpenSpec/issues/182)) ([4cf7bf8](https://github.com/markusbrand/OpenSpec/commit/4cf7bf863de098e7e55dbc133120c0531d0ae18f))
* **opsx:** clarify /opsx:sync description and add usage section ([#1606](https://github.com/markusbrand/OpenSpec/issues/1606)) ([1a10dd5](https://github.com/markusbrand/OpenSpec/commit/1a10dd582096090effac4b9047bd97c601196451))
* **readme:** alphabetize AI tools list and make collapsible ([#343](https://github.com/markusbrand/OpenSpec/issues/343)) ([6d3cfe0](https://github.com/markusbrand/OpenSpec/commit/6d3cfe0443646e34eeb866172587ea430824d95d))
* **readme:** show what a spec actually looks like in "See it in action" ([#1365](https://github.com/markusbrand/OpenSpec/issues/1365)) ([924354b](https://github.com/markusbrand/OpenSpec/commit/924354b7262af19c06b3d223ae4feb7d15e3fec2))
* realign defaults, profile workflows, and tool references ([#746](https://github.com/markusbrand/OpenSpec/issues/746)) ([d7d1860](https://github.com/markusbrand/OpenSpec/commit/d7d186088eb1c5878c3d9f91bd928f06483fcb98))
* rebuild docs site from docs-lab ([#1649](https://github.com/markusbrand/OpenSpec/issues/1649)) ([f1b521d](https://github.com/markusbrand/OpenSpec/commit/f1b521dffac38ed6638689cd28b0c204b1eef0f1))
* remove teams slack mention from readme ([#991](https://github.com/markusbrand/OpenSpec/issues/991)) ([9001740](https://github.com/markusbrand/OpenSpec/commit/900174000b8a09f3c46c8e09e7e5e6be35375e45))
* rewrite customization guide to document schema commands ([#582](https://github.com/markusbrand/OpenSpec/issues/582)) ([0bfe1d4](https://github.com/markusbrand/OpenSpec/commit/0bfe1d4426571ed00a17dd18c1395bb44a19fc9b))
* **stores:** add multi-repo implementation flow ([#1491](https://github.com/markusbrand/OpenSpec/issues/1491)) ([d9bcc18](https://github.com/markusbrand/OpenSpec/commit/d9bcc18582fe6dd818af954752b37a2f47dbe552))
* support Trae AI ([#601](https://github.com/markusbrand/OpenSpec/issues/601)) ([277be19](https://github.com/markusbrand/OpenSpec/commit/277be194efdac6e86384b4eb6e5ad00f633814a2))
* switch Roo Code references to Zoo Code ([#1428](https://github.com/markusbrand/OpenSpec/issues/1428)) ([81d5109](https://github.com/markusbrand/OpenSpec/commit/81d5109b86f16537deb99f84a772a83235dc9e09))
* sync AGENTS.md and agents-template with explicit change-id notation ([#189](https://github.com/markusbrand/OpenSpec/issues/189)) ([ce74222](https://github.com/markusbrand/OpenSpec/commit/ce7422209fc91f361740cf96ed061b28b6bcf2c3))
* sync tool ID lists with AI_TOOLS source of truth ([#1027](https://github.com/markusbrand/OpenSpec/issues/1027)) ([347f027](https://github.com/markusbrand/OpenSpec/commit/347f0277e3be3549cd85cdea364fbd7710f1922b))
* update workflow docs and mark schema commands as experimental ([#526](https://github.com/markusbrand/OpenSpec/issues/526)) ([43b01ad](https://github.com/markusbrand/OpenSpec/commit/43b01ad374164d1b9dd4e4bfb0d5864b61c6f7db))
* **workflows:** fix sequence diagram rendering ([#1654](https://github.com/markusbrand/OpenSpec/issues/1654)) ([98c7932](https://github.com/markusbrand/OpenSpec/commit/98c79324acb802d765d9d11c7b117079667aa7d7))
* **workflows:** visualize the OpenSpec lifecycle ([#1507](https://github.com/markusbrand/OpenSpec/issues/1507)) ([4e4c9e1](https://github.com/markusbrand/OpenSpec/commit/4e4c9e1ffd8ebddcb50d49360b3f8e94a72def22))


### Code Refactoring

* **commands:** modularize artifact workflow into separate files ([#562](https://github.com/markusbrand/OpenSpec/issues/562)) ([f90c7c3](https://github.com/markusbrand/OpenSpec/commit/f90c7c335486bd190c4ffcd9ee0350da68230dde))
* **setup:** simplify config creation and fix test hanging ([#537](https://github.com/markusbrand/OpenSpec/issues/537)) ([e073680](https://github.com/markusbrand/OpenSpec/commit/e0736807b4899eed4cd87cf243fa20a427f8bdd5))
* split skill templates into workflow modules ([#698](https://github.com/markusbrand/OpenSpec/issues/698)) ([92731e2](https://github.com/markusbrand/OpenSpec/commit/92731e226381178070cc06f3e83e7f59733293c7))
* **templates:** share one apply instruction body across skill and command ([#1515](https://github.com/markusbrand/OpenSpec/issues/1515)) ([96a6548](https://github.com/markusbrand/OpenSpec/commit/96a6548664fd72d1145e4dc9613f75ecb1f5801e))
* unify requirement reader and surface [#498](https://github.com/markusbrand/OpenSpec/issues/498) ([#1281](https://github.com/markusbrand/OpenSpec/issues/1281)) ([9a0dfb5](https://github.com/markusbrand/OpenSpec/commit/9a0dfb5cd136b423c9f13c0b29ec3ea69761b4e6))


### Miscellaneous Chores

* add changeset for 1.0.0 release ([#578](https://github.com/markusbrand/OpenSpec/issues/578)) ([0cc9d90](https://github.com/markusbrand/OpenSpec/commit/0cc9d9025af367faa1688a7b2606a2549053cd3f))
* add changeset for AI assistants support and validation fixes ([#227](https://github.com/markusbrand/OpenSpec/issues/227)) ([668a125](https://github.com/markusbrand/OpenSpec/commit/668a125d4db6216560ff2d924882b76e2e8e7bb7))
* add changeset for cross-platform fixes release ([#147](https://github.com/markusbrand/OpenSpec/issues/147)) ([2ae0484](https://github.com/markusbrand/OpenSpec/commit/2ae0484ac77ff1dfc6111da56a2189c3522c010b))
* add changeset for new features and improvements ([#326](https://github.com/markusbrand/OpenSpec/issues/326)) ([c08fbc1](https://github.com/markusbrand/OpenSpec/commit/c08fbc1ba00dbffe528493eeb422c0068db82d8b))
* add changeset for new release ([#130](https://github.com/markusbrand/OpenSpec/issues/130)) ([efbbf3b](https://github.com/markusbrand/OpenSpec/commit/efbbf3b9f123b93a5d7fef066c3a1735f6290576))
* add changeset for opsx:verify skill and bug fixes ([#502](https://github.com/markusbrand/OpenSpec/issues/502)) ([9db74aa](https://github.com/markusbrand/OpenSpec/commit/9db74aa5ac6547efadaed795217cfa17444f2004))
* add changeset for stores beta and config JSON parsing ([#1267](https://github.com/markusbrand/OpenSpec/issues/1267)) ([96f6cac](https://github.com/markusbrand/OpenSpec/commit/96f6cacb206c65bee30066f6a1f4e9b855a0d783))
* add changeset for v1.3.0 ([#952](https://github.com/markusbrand/OpenSpec/issues/952)) ([cce787e](https://github.com/markusbrand/OpenSpec/commit/cce787ec4083da2b27781f6786f5ce0002909a7b))
* add changeset for Windows OpenSpec fix ([#136](https://github.com/markusbrand/OpenSpec/issues/136)) ([8210970](https://github.com/markusbrand/OpenSpec/commit/821097079a307dd5cebb9e6c9a401f4678581bcc))
* add missing v1.6.0 changeset ([#1340](https://github.com/markusbrand/OpenSpec/issues/1340)) ([1552731](https://github.com/markusbrand/OpenSpec/commit/15527310f9be13cc9a4035ea01b93ba85873d956))
* add OpenSpec release skill ([#1341](https://github.com/markusbrand/OpenSpec/issues/1341)) ([3f02c68](https://github.com/markusbrand/OpenSpec/commit/3f02c686c5c52ea03e66912354b49c25c5cf0f8b))
* archive 4 completed changes and update specs ([#172](https://github.com/markusbrand/OpenSpec/issues/172)) ([4a86328](https://github.com/markusbrand/OpenSpec/commit/4a863285b0a043e19a7ba5ac250be6f4209f0f11))
* archive 7 completed changes and update specs ([#170](https://github.com/markusbrand/OpenSpec/issues/170)) ([345f9db](https://github.com/markusbrand/OpenSpec/commit/345f9dbb456b4387b47d4ce73845ceee7ae2d1e4))
* archive completed changes and clean up stale ones ([#455](https://github.com/markusbrand/OpenSpec/issues/455)) ([eb15cdb](https://github.com/markusbrand/OpenSpec/commit/eb15cdb983e8e88981e1374461a25020107eca84))
* **changeset:** add catch-up changesets for 6 untracked fixes ([#1640](https://github.com/markusbrand/OpenSpec/issues/1640)) ([610b78f](https://github.com/markusbrand/OpenSpec/commit/610b78f6554e8aabfa294df53962428ff85c8b76))
* **dependabot:** ignore unsupported major updates ([#1623](https://github.com/markusbrand/OpenSpec/issues/1623)) ([144901c](https://github.com/markusbrand/OpenSpec/commit/144901ca74c401905fe0482930d090b3c28e1358))
* **deps-dev:** bump development-dependencies group + refresh flake hash ([#1633](https://github.com/markusbrand/OpenSpec/issues/1633)) ([4b114aa](https://github.com/markusbrand/OpenSpec/commit/4b114aade9debd808ac2e051e810b5e94dfa881a))
* **deps-dev:** bump eslint from 10.7.0 to 10.8.0 in the development-dependencies group ([#1494](https://github.com/markusbrand/OpenSpec/issues/1494)) ([23c2787](https://github.com/markusbrand/OpenSpec/commit/23c2787789e68146d94b4e7ece197f81fe7de146))
* **deps:** bump next from 16.2.10 to 16.2.11 in /website ([#1429](https://github.com/markusbrand/OpenSpec/issues/1429)) ([2b50338](https://github.com/markusbrand/OpenSpec/commit/2b503389f59a5cf344a3a5a046afb27b2a1a3ed3))
* **deps:** bump next in /website in the website-dependencies group ([#1420](https://github.com/markusbrand/OpenSpec/issues/1420)) ([11a301d](https://github.com/markusbrand/OpenSpec/commit/11a301d5fbddf6e5628e82b4feb5807538884dbc))
* **deps:** bump safe website-dependencies subset ([#1634](https://github.com/markusbrand/OpenSpec/issues/1634)) ([b96b3e8](https://github.com/markusbrand/OpenSpec/commit/b96b3e85cdfc3cb5b64b1d05d5654541130df76a))
* **deps:** bump the website-dependencies group ([#1496](https://github.com/markusbrand/OpenSpec/issues/1496)) ([80ad1fb](https://github.com/markusbrand/OpenSpec/commit/80ad1fbaef85c66a4d542b4a2a96fdcdea3342fa))
* **deps:** bump the website-dependencies group ([#1680](https://github.com/markusbrand/OpenSpec/issues/1680)) ([cfc74ee](https://github.com/markusbrand/OpenSpec/commit/cfc74eeb055a1cf809ddfbcea828c245c0e9d1f2))
* **deps:** bump the website-dependencies group ([#1719](https://github.com/markusbrand/OpenSpec/issues/1719)) ([6926ccb](https://github.com/markusbrand/OpenSpec/commit/6926ccb18afa4ff621112813e9968334576ee11a))
* **deps:** bump the website-dependencies group in /website with 2 updates ([#1636](https://github.com/markusbrand/OpenSpec/issues/1636)) ([6d031f1](https://github.com/markusbrand/OpenSpec/commit/6d031f12f7d94c7ddac51569171efdce805f56e0))
* **deps:** consolidate dependabot bumps with flake hash update ([#1427](https://github.com/markusbrand/OpenSpec/issues/1427)) ([5406c8b](https://github.com/markusbrand/OpenSpec/commit/5406c8b3ff6cf59d04512eccb1ad5543ae4882c6))
* **deps:** consolidate dependabot bumps with flake hash update ([#1457](https://github.com/markusbrand/OpenSpec/issues/1457)) ([abb422a](https://github.com/markusbrand/OpenSpec/commit/abb422a04b10a364327f4e630cecc7ee6d00c81f))
* **deps:** migrate to @inquirer/prompts v8 + @inquirer/core v11 ([#1667](https://github.com/markusbrand/OpenSpec/issues/1667)) ([9181364](https://github.com/markusbrand/OpenSpec/commit/91813641cf91d86beb97d9b8cda8bec5c6d871ae))
* **dev:** add VS Code dev container configuration ([#209](https://github.com/markusbrand/OpenSpec/issues/209)) ([822464e](https://github.com/markusbrand/OpenSpec/commit/822464ec44cc384ae739637eaf9ad7e934790593))
* improve release notes pipeline ([#481](https://github.com/markusbrand/OpenSpec/issues/481)) ([36078b1](https://github.com/markusbrand/OpenSpec/commit/36078b19473cdbc191154568d7c3dd47c885ee6e))
* **main:** release 1.11.0 ([4e34c80](https://github.com/markusbrand/OpenSpec/commit/4e34c8029fd10b03f59612d09acef78a4974e8cb))
* **main:** release 1.11.0 ([c3cffd3](https://github.com/markusbrand/OpenSpec/commit/c3cffd3b6b225a447e5d8e06e23276e1f9767123))
* **nix:** improve flake with dynamic version and build optimization ([#550](https://github.com/markusbrand/OpenSpec/issues/550)) ([86d2e04](https://github.com/markusbrand/OpenSpec/commit/86d2e04cae76a999dbd1b4571f52fa720036be0c))
* **openspec:** add feedback command change proposal ([#496](https://github.com/markusbrand/OpenSpec/issues/496)) ([40afee6](https://github.com/markusbrand/OpenSpec/commit/40afee643e4b036a24f1a5f86e261dc3f2f9f248))
* **openspec:** archive schema init force validation change ([#1467](https://github.com/markusbrand/OpenSpec/issues/1467)) ([d32d49f](https://github.com/markusbrand/OpenSpec/commit/d32d49f06698c6ae647dc844ff72c00ac494af42))
* **release:** add catch-up changeset for Rovo, Codex dir, status ([#1518](https://github.com/markusbrand/OpenSpec/issues/1518)) ([568e56c](https://github.com/markusbrand/OpenSpec/commit/568e56c67231dbe2447aca4f0e7995c05ada95a3))
* **release:** integrate release-please and deprecate changesets ([c926f9b](https://github.com/markusbrand/OpenSpec/commit/c926f9ba0528ef01f9b983a99866b3c8ca392757))
* **release:** version packages ([#131](https://github.com/markusbrand/OpenSpec/issues/131)) ([af51319](https://github.com/markusbrand/OpenSpec/commit/af513191eb56d34af3b4f1120b80d945e61a7e46))
* **release:** version packages ([#137](https://github.com/markusbrand/OpenSpec/issues/137)) ([06bd399](https://github.com/markusbrand/OpenSpec/commit/06bd3999bf826779dd6d02119f7e3879afca7548))
* **release:** version packages ([#138](https://github.com/markusbrand/OpenSpec/issues/138)) ([c7ca76c](https://github.com/markusbrand/OpenSpec/commit/c7ca76cb4f857a5483457d246c37e6c5b1a48d9a))
* **release:** version packages ([#150](https://github.com/markusbrand/OpenSpec/issues/150)) ([c482f1b](https://github.com/markusbrand/OpenSpec/commit/c482f1b47a94eb9a85708e0b21de7f2775c0ac50))
* **release:** version packages ([#158](https://github.com/markusbrand/OpenSpec/issues/158)) ([f56189a](https://github.com/markusbrand/OpenSpec/commit/f56189a8f721f6f738c1115fb747af74ea712077))
* **release:** version packages ([#167](https://github.com/markusbrand/OpenSpec/issues/167)) ([108bcd6](https://github.com/markusbrand/OpenSpec/commit/108bcd66d89fc9a8929e023df273b8ba4b3f4beb))
* **release:** version packages ([#180](https://github.com/markusbrand/OpenSpec/issues/180)) ([b30882b](https://github.com/markusbrand/OpenSpec/commit/b30882b57928ae086b4577cee9aed3ab09bbf1e5))
* **release:** version packages ([#228](https://github.com/markusbrand/OpenSpec/issues/228)) ([5855fa2](https://github.com/markusbrand/OpenSpec/commit/5855fa2353ef75e613dae7bc4ccd71c6cdb428f1))
* **release:** version packages ([#271](https://github.com/markusbrand/OpenSpec/issues/271)) ([d32e50f](https://github.com/markusbrand/OpenSpec/commit/d32e50fe36ffa58c45781dc3d5815b692f4df90b))
* **release:** version packages ([#305](https://github.com/markusbrand/OpenSpec/issues/305)) ([17d7e59](https://github.com/markusbrand/OpenSpec/commit/17d7e59343559cc6bf8693b0bd953f78008a46e6))
* **release:** version packages ([#327](https://github.com/markusbrand/OpenSpec/issues/327)) ([3f5a66d](https://github.com/markusbrand/OpenSpec/commit/3f5a66d3e4e0cd0df2eac6c8173dd9f855c7a60b))
* **release:** version packages ([#389](https://github.com/markusbrand/OpenSpec/issues/389)) ([c2a1a4c](https://github.com/markusbrand/OpenSpec/commit/c2a1a4c807d93c9bb30998efe47321fd9e9f1e53))
* **release:** version packages ([#394](https://github.com/markusbrand/OpenSpec/issues/394)) ([fb264bc](https://github.com/markusbrand/OpenSpec/commit/fb264bcbcd154d92207e58e1127a14f8a19ebb0f))
* **release:** version packages ([#397](https://github.com/markusbrand/OpenSpec/issues/397)) ([c08a53c](https://github.com/markusbrand/OpenSpec/commit/c08a53cb2125128bd151ce9c19f0f3e53c20d97c))
* **release:** version packages ([#458](https://github.com/markusbrand/OpenSpec/issues/458)) ([533cb0f](https://github.com/markusbrand/OpenSpec/commit/533cb0fa87e104ca71ef62d3898c91bc659f2311))
* remove scheduled docs workflow ([#1324](https://github.com/markusbrand/OpenSpec/issues/1324)) ([871dece](https://github.com/markusbrand/OpenSpec/commit/871dece1beb38b70a94b0999dfdc278764fe2856))
* remove stale npm lockfile ([#1319](https://github.com/markusbrand/OpenSpec/issues/1319)) ([8ac624b](https://github.com/markusbrand/OpenSpec/commit/8ac624b279974d0aacb44a93d913f7129a784a66))
* remove TDD schema and all references ([#586](https://github.com/markusbrand/OpenSpec/issues/586)) ([12a7224](https://github.com/markusbrand/OpenSpec/commit/12a7224dc628ca6eb98bbaebb8b9bd330f73871c))
* rename "Qoder (CLI)" to "Qoder" ([#552](https://github.com/markusbrand/OpenSpec/issues/552)) ([70c2e17](https://github.com/markusbrand/OpenSpec/commit/70c2e175253dd8c46310434a9f31a0d266f64312))
* route reviews to maintainer team ([#1441](https://github.com/markusbrand/OpenSpec/issues/1441)) ([c33fcb3](https://github.com/markusbrand/OpenSpec/commit/c33fcb3fdb729455b114bdcfad84df01b3531bfe))
* **scripts:** add a parity-hash regeneration helper ([#1416](https://github.com/markusbrand/OpenSpec/issues/1416)) ([ffe27de](https://github.com/markusbrand/OpenSpec/commit/ffe27de18d718312fb4a84c0da8e4af4d318f620))
* **security:** add security policy, dependabot config, and config key guards ([#1415](https://github.com/markusbrand/OpenSpec/issues/1415)) ([e2f748c](https://github.com/markusbrand/OpenSpec/commit/e2f748c64f05efaeac720f83c71fb6f1b6f6e18d))
* **security:** create test temp dirs with mkdtemp and override two pinned CVEs ([#1432](https://github.com/markusbrand/OpenSpec/issues/1432)) ([a874d1d](https://github.com/markusbrand/OpenSpec/commit/a874d1d6715886db9210c527b1fc3799d9688a76))
* **security:** override brace-expansion to fix the failing audit ([#1461](https://github.com/markusbrand/OpenSpec/issues/1461)) ([05c7019](https://github.com/markusbrand/OpenSpec/commit/05c701970acf680c1276362d48c6d339794c4340))
* trigger release workflow for v0.19.0 ([#480](https://github.com/markusbrand/OpenSpec/issues/480)) ([d0e1b07](https://github.com/markusbrand/OpenSpec/commit/d0e1b076c2c5eac85fd86f806f42bb0b1efa7fa2))

## [1.11.0](https://github.com/markusbrand/OpenSpec/compare/v1.10.0...v1.11.0) (2026-08-26)


### Features

* add spec-driven-github schema and openspec-issue adapter tooling ([94d6ca6](https://github.com/markusbrand/OpenSpec/commit/94d6ca604453fd8b85a53dd49278787e8f40ba3f))


### Bug Fixes

* **ci:** enable release-please workflow on repository ([3c24bff](https://github.com/markusbrand/OpenSpec/commit/3c24bfff9ae919e87e3319c1cd6ec2666427c8bd))
* **ci:** tolerate disabled dependency graph in dependency-review action ([f01e0b6](https://github.com/markusbrand/OpenSpec/commit/f01e0b6a95b91bb83121e1ef609239e88901a284))
* **ci:** update release-please-action reference ([9e5d463](https://github.com/markusbrand/OpenSpec/commit/9e5d46365dc55e6750cda58d9805b18864eec05d))
* **nix:** update pnpm-deps hash in flake.nix ([3dbf00f](https://github.com/markusbrand/OpenSpec/commit/3dbf00f9fe10e9c84a6438a977fcb21431a5f044))


### Documentation

* rebuild docs site from docs-lab ([#1649](https://github.com/markusbrand/OpenSpec/issues/1649)) ([f1b521d](https://github.com/markusbrand/OpenSpec/commit/f1b521dffac38ed6638689cd28b0c204b1eef0f1))


### Miscellaneous Chores

* **deps:** bump the website-dependencies group ([#1719](https://github.com/markusbrand/OpenSpec/issues/1719)) ([6926ccb](https://github.com/markusbrand/OpenSpec/commit/6926ccb18afa4ff621112813e9968334576ee11a))
* **release:** integrate release-please and deprecate changesets ([c926f9b](https://github.com/markusbrand/OpenSpec/commit/c926f9ba0528ef01f9b983a99866b3c8ca392757))

## 1.10.0

### Minor Changes

- [#1685](https://github.com/Fission-AI/OpenSpec/pull/1685) [`c747ed1`](https://github.com/Fission-AI/OpenSpec/commit/c747ed1f34459ca6bc15d43ad9f68dfdf7750875) Thanks [@clay-good](https://github.com/clay-good)! - Add `openspec init --language <language>` to configure the language used for artifacts in new projects.

### Patch Changes

- [#1704](https://github.com/Fission-AI/OpenSpec/pull/1704) [`7276c6c`](https://github.com/Fission-AI/OpenSpec/commit/7276c6c26832f699a63544302d38b1af8ddb9844) Thanks [@clay-good](https://github.com/clay-good)! - Drop the npm `postinstall` script. Its only job was printing a one-line tip about opt-in shell completions, but shipping any install script made `npm install -g @fission-ai/openspec` emit an `allow-scripts` warning that reads as a packaging fault (and `npm approve-scripts` then fails with `ENOMATCH` on a global install, since it looks in the local project). The tip now prints from the CLI on its first run — to stderr, in an interactive terminal, once, and not at all if you already have completions installed — and the published package declares no `preinstall`/`install`/`postinstall` script, so a registry install runs no OpenSpec code. Suppress the tip with `OPENSPEC_NO_COMPLETIONS=1`.

- [#1656](https://github.com/Fission-AI/OpenSpec/pull/1656) [`a72a74d`](https://github.com/Fission-AI/OpenSpec/commit/a72a74de6571c26fd79a193bb33fa3b8e1a767fb) Thanks [@clay-good](https://github.com/clay-good)! - ### Bug Fixes

  - `openspec update` now suggests restarting an IDE only when it updates an IDE-resident tool. CLI tools such as Claude Code, Codex, and Gemini CLI no longer show an unnecessary restart hint.

- [#1703](https://github.com/Fission-AI/OpenSpec/pull/1703) [`9643888`](https://github.com/Fission-AI/OpenSpec/commit/9643888a7525467c7a076bfec9bb075910e78bb8) Thanks [@clay-good](https://github.com/clay-good)! - Point the spec-driven `specs` instruction's main-spec read and edit at the store-aware root. It named `openspec/specs/<capability-path>/spec.md`, a path relative to the current directory, for both step 1 of the MODIFIED workflow ("locate the existing requirement") and the edit that fixes a leftover `TBD` Purpose. When the change lives in a store — whether selected with `--store`, a project `store:` pointer, or a global default store — the main spec is under the store root, so that read missed it, or silently returned a different capability when a local one happened to share the name, and the MODIFIED block was then copied from the wrong requirement. Both operations now use `<planningHome.root>/openspec/specs/...`, the root already returned by `openspec instructions ... --json` and the same convention the sync and archive workflows use. Fixes [#1702](https://github.com/Fission-AI/OpenSpec/issues/1702).

- [#1699](https://github.com/Fission-AI/OpenSpec/pull/1699) [`18688c8`](https://github.com/Fission-AI/OpenSpec/commit/18688c8b27820da3435a47a7f11e90073724b728) Thanks [@clay-good](https://github.com/clay-good)! - archive: tell the author how to retire a capability when the emptied spec also holds content the merge cannot account for. That combination printed only "Spec must have at least one requirement" and no guidance at all; the abort now names the blocking lines and reports a `retire_capabilities` marker that is present but cannot be honored. Authored content quoted in those messages - the blocking lines, and the marker's own reason, which `openspec validate` prints too - is stripped of control characters and bounded in length before it reaches the terminal.

- [#1660](https://github.com/Fission-AI/OpenSpec/pull/1660) [`7da3f34`](https://github.com/Fission-AI/OpenSpec/commit/7da3f34fb66d602bd987caa7dddcf3d6621e7d44) Thanks [@clay-good](https://github.com/clay-good)! - Require generated tasks to state how their completion can be verified.

## 1.9.0

### Minor Changes

- [#1622](https://github.com/Fission-AI/OpenSpec/pull/1622) [`59c16a4`](https://github.com/Fission-AI/OpenSpec/commit/59c16a4461254ed984d1d5e29d00af1a5610035a) Thanks [@clay-good](https://github.com/clay-good)! - ### New Features

  - **Command Code command adapter** — Command Code is now a first-class, adapter-backed tool. `openspec init` generates OpenSpec commands under `.commandcode/commands/opsx-<id>.md` (invoked as `/opsx-<id>`) alongside the skills under `.commandcode/skills/`, matching Command Code's documented custom-slash-command surface.

- [#1613](https://github.com/Fission-AI/OpenSpec/pull/1613) [`42d7f67`](https://github.com/Fission-AI/OpenSpec/commit/42d7f673bc5f13378451267c8a9d0c23f63a2d1a) Thanks [@Angelthebestone](https://github.com/Angelthebestone)! - ### New Features

  - **Command Code support** — `openspec init` now supports Command Code as an adapterless skills-only tool. It installs the OpenSpec skills under `.commandcode/skills/` and invokes them as `/openspec-*` commands, matching Command Code's native skill surface.

- [#1604](https://github.com/Fission-AI/OpenSpec/pull/1604) [`83be9d1`](https://github.com/Fission-AI/OpenSpec/commit/83be9d113e8310789c281f7c8a00ed4fad191dd5) Thanks [@clay-good](https://github.com/clay-good)! - Add `openspec validate --archived`: an opt-in check that every change under `changes/archive/` has all of its `tasks.md` checkboxes ticked, exiting non-zero if any are unchecked. This surfaces changes that were archived with unfinished work — which the normal validate flow never catches, because it only looks at active changes — and is meant for a pre-commit or CI hook ([#205](https://github.com/Fission-AI/OpenSpec/issues/205)). It is a standalone scope: it does not alter any existing `validate` invocation and does not re-validate already-applied spec deltas.

### Patch Changes

- [#1530](https://github.com/Fission-AI/OpenSpec/pull/1530) [`bf5099e`](https://github.com/Fission-AI/OpenSpec/commit/bf5099e39fdb5d7bde2adc84f49ea93afd7463e9) Thanks [@clay-good](https://github.com/clay-good)! - Apply workflow now tells agents to surface unexpected scope instead of hiding it. When a task needs work beyond what the spec describes, the `/opsx:apply` skill and command guidance direct the agent to pause and report the added scope rather than silently narrowing, deferring, or simplifying away specified behavior, and to mark a task complete only when its specified behavior is fully implemented. Fixes [#1529](https://github.com/Fission-AI/OpenSpec/issues/1529).

- [#1603](https://github.com/Fission-AI/OpenSpec/pull/1603) [`9ae75c8`](https://github.com/Fission-AI/OpenSpec/commit/9ae75c86efe5d326ffa7ca5a3fd64b1f1e7728c2) Thanks [@clay-good](https://github.com/clay-good)! - `openspec archive` no longer writes terminal escape codes to a redirected or captured stdout. Its confirmation prompts and the no-argument change picker drew their live UI with ANSI cursor-move sequences even when stdout was not a terminal — noise in a redirected log, and in some non-interactive hosts an unbounded render loop that could grow the captured output until the disk filled. When stdout (or stdin) is not a terminal, archive now reads the confirmations as plain text, and a no-argument run asks you to pass a change name up front instead of drawing a menu. Piped answers (`printf 'y\n' | openspec archive …`) and `--yes` behave as before, and interactive terminals are unchanged. Fixes [#1526](https://github.com/Fission-AI/OpenSpec/issues/1526).

- [#1528](https://github.com/Fission-AI/OpenSpec/pull/1528) [`9425897`](https://github.com/Fission-AI/OpenSpec/commit/942589741de35f1b8896b410d7ea70295bb137c0) Thanks [@Marzx13](https://github.com/Marzx13)! - Canonicalize rebuilt specs to end with exactly one final LF. Previously a spec whose `## Requirements` section was last was rebuilt with a trailing blank line (`\n\n`), which failed Markdown whitespace checks after sync or archive. Internal spacing and content after the Requirements section are unchanged.

- [#1640](https://github.com/Fission-AI/OpenSpec/pull/1640) [`610b78f`](https://github.com/Fission-AI/OpenSpec/commit/610b78f6554e8aabfa294df53962428ff85c8b76) Thanks [@clay-good](https://github.com/clay-good)! - Preserve the blank lines around a spec's `## Requirements` heading when syncing a delta. `openspec archive` rebuilt `openspec/specs/<capability>/spec.md` by joining its slices with a bare newline, so the blank lines that surround the heading were dropped and the resulting file failed Markdown whitespace checks. The rebuild now keeps that spacing intact. Fixes [#1625](https://github.com/Fission-AI/OpenSpec/issues/1625). Thanks [@jwang513](https://github.com/jwang513)! ([#1637](https://github.com/Fission-AI/OpenSpec/pull/1637))

- [#1640](https://github.com/Fission-AI/OpenSpec/pull/1640) [`610b78f`](https://github.com/Fission-AI/OpenSpec/commit/610b78f6554e8aabfa294df53962428ff85c8b76) Thanks [@clay-good](https://github.com/clay-good)! - `openspec validate --all` and `openspec list --json` no longer silently pass when run outside an OpenSpec project. From a directory with no root they used to resolve the current directory as an implicit root, exit 0, and report empty results — a false pass for CI and agents. Bulk validation (`--all`, `--changes`, `--specs`) and `list` now require an existing root (the `openspec/project.md` fallback for legacy projects is kept), while direct validation and other intentional implicit-root workflows are unchanged. Thanks [@clay-good](https://github.com/clay-good)! ([#1612](https://github.com/Fission-AI/OpenSpec/pull/1612))

- [#1640](https://github.com/Fission-AI/OpenSpec/pull/1640) [`610b78f`](https://github.com/Fission-AI/OpenSpec/commit/610b78f6554e8aabfa294df53962428ff85c8b76) Thanks [@clay-good](https://github.com/clay-good)! - Label the `update` workflow in the `openspec config` workflow picker. The checklist had friendly labels for 11 of the 12 workflows but was missing `update`, so that row — one of the six core workflows every user sees — fell back to its raw id with a placeholder description. The update-change template's stale "expanded-profile" wording is also reworded to "optional". Fixes [#1627](https://github.com/Fission-AI/OpenSpec/issues/1627). Thanks [@clay-good](https://github.com/clay-good)! ([#1632](https://github.com/Fission-AI/OpenSpec/pull/1632))

- [#1640](https://github.com/Fission-AI/OpenSpec/pull/1640) [`610b78f`](https://github.com/Fission-AI/OpenSpec/commit/610b78f6554e8aabfa294df53962428ff85c8b76) Thanks [@clay-good](https://github.com/clay-good)! - `openspec schema fork` now preserves the source schema's YAML formatting. Renaming a forked `schema.yaml` round-tripped through a parse/re-serialize step that dropped comments, could rewrite block-scalar style (a literal `|` folded to `>`), and reordered keys, so the fork no longer matched its source. The rename now edits the document in place via the YAML Document API, leaving comments, scalar style, and key order untouched. Thanks [@clay-good](https://github.com/clay-good)! ([#1607](https://github.com/Fission-AI/OpenSpec/pull/1607))

- [#1640](https://github.com/Fission-AI/OpenSpec/pull/1640) [`610b78f`](https://github.com/Fission-AI/OpenSpec/commit/610b78f6554e8aabfa294df53962428ff85c8b76) Thanks [@clay-good](https://github.com/clay-good)! - `openspec schemas` now resolves through the canonical OpenSpec root-selection precedence instead of always reading from the current directory. It accepts `--store <id>`, rejects `--store-path` like the other store-aware commands, and returns the shared machine-readable diagnostics on JSON failures, while preserving the existing human output and bare JSON array on success. Thanks [@Patodo](https://github.com/Patodo)! ([#1616](https://github.com/Fission-AI/OpenSpec/pull/1616))

- [#1640](https://github.com/Fission-AI/OpenSpec/pull/1640) [`610b78f`](https://github.com/Fission-AI/OpenSpec/commit/610b78f6554e8aabfa294df53962428ff85c8b76) Thanks [@clay-good](https://github.com/clay-good)! - `openspec validate` now warns on ambiguous task numbering in `spec-driven` changes: a task ID duplicated at full depth (including across resolved task files), or a task whose leading number disagrees with its enclosing `## N.` group. Numeric-looking text outside numbered groups is ignored, and custom schemas are unchanged until they opt in. The checks run across direct, bulk, and deprecated change validation. Closes [#1520](https://github.com/Fission-AI/OpenSpec/issues/1520). Thanks [@alectimison-maker](https://github.com/alectimison-maker)! ([#1523](https://github.com/Fission-AI/OpenSpec/pull/1523))

- [#1522](https://github.com/Fission-AI/OpenSpec/pull/1522) [`07dea6e`](https://github.com/Fission-AI/OpenSpec/commit/07dea6ed2faf71c8b9f4944d64246f2ff39eeffc) Thanks [@clay-good](https://github.com/clay-good)! - ### Bug Fixes

  - **Don't let a legacy Codex upgrade hijack the vendor-neutral `agents` target** — `openspec update` no longer overwrites an existing `.agents` skills tree (and its ownership marker) when Codex is detected only from leftover global `~/.codex/prompts`. Because Codex and the vendor-neutral `agents` target share `.agents/skills`, a project that used the `agents` target could have its generic skills silently rewritten with Codex-specific syntax and its target flipped to Codex on the next `update --force`. The legacy-upgrade path now respects the established owner of a shared skills directory, matching the one-writer rule `openspec init` already applies. When an upgrade is skipped this way, that tool's repo-local legacy files (e.g. `.codex/prompts/openspec-*.md`) are also preserved rather than cleaned up, since no replacement was written to take their place. A genuine first-time Codex upgrade (no `.agents` tree yet) is unaffected.

- [#1521](https://github.com/Fission-AI/OpenSpec/pull/1521) [`c751b3d`](https://github.com/Fission-AI/OpenSpec/commit/c751b3da52a7f06d6662a8673feff4685566cdd4) Thanks [@clay-good](https://github.com/clay-good)! - ### Bug Fixes

  - **Stop silently dropping unlabeled scenarios on archive** — `openspec validate` and `openspec archive` now recognize every level-4 (`####` followed by whitespace) child of a requirement as a scenario, matching how the spec is counted elsewhere. Before, the scenario-loss guard only recognized headers written exactly as `#### Scenario:`, so a `MODIFIED` requirement that dropped a differently-labeled child (for example `#### Edge case`) passed validation and was then permanently deleted by archive with no warning. Both paths now agree, so the loss is caught at authoring time. Scenario names are normalized when comparing (an optional `Scenario:` prefix and a CommonMark closing `#` run are ignored), so simply relabeling a scenario is not mistaken for dropping one.

- [#1610](https://github.com/Fission-AI/OpenSpec/pull/1610) [`17581c1`](https://github.com/Fission-AI/OpenSpec/commit/17581c11edf6b27ef18be7be1e4dcc06c81a3fff) Thanks [@clay-good](https://github.com/clay-good)! - ### Bug Fixes

  - `openspec init` now suggests an IDE restart only when an IDE-resident tool such as Cursor, GitHub Copilot, Continue, or Cline was configured. CLI tools like Claude Code, Codex, and Gemini CLI no longer show the hint, since their commands work as soon as the files exist.

- [#1609](https://github.com/Fission-AI/OpenSpec/pull/1609) [`804427b`](https://github.com/Fission-AI/OpenSpec/commit/804427b6ff3f3b35b542365ba8b32e183fce3287) Thanks [@clay-good](https://github.com/clay-good)! - Suppress the first-run telemetry disclosure notice when `--json` is used. On a
  first-ever run the notice was written to stdout and could break `--json`
  consumers; it is now deferred to the first later non-JSON run, keeping `--json`
  output valid while still guaranteeing the disclosure.

## 1.8.0

### Minor Changes

- [#1303](https://github.com/Fission-AI/OpenSpec/pull/1303) [`1aa0f2a`](https://github.com/Fission-AI/OpenSpec/commit/1aa0f2abfc19f2487f5b8566e6eb3bf15f41c20a) Thanks [@solanab](https://github.com/solanab)! - Add the vendor-neutral `agents` target: `openspec init --tools agents` installs the workflow skills to `.agents/skills/openspec-*/SKILL.md`, the shared location AGENTS.md-compatible assistants read. It is skills-only, so no slash commands are generated. Because `agents` is now a real target, `--tools all` includes it and creates `.agents/skills/` where it previously did not.

- [#1274](https://github.com/Fission-AI/OpenSpec/pull/1274) [`7a4a745`](https://github.com/Fission-AI/OpenSpec/commit/7a4a745d803b698c34947eda6d73b5a24aebb58c) Thanks [@NicoAvanzDev](https://github.com/NicoAvanzDev)! - Generate GitHub Copilot coding agent setup and custom agent files during `openspec init` and keep them synchronized during `openspec update`.

- [#1214](https://github.com/Fission-AI/OpenSpec/pull/1214) [`161f945`](https://github.com/Fission-AI/OpenSpec/commit/161f9454a372aab67c495d780928bba89c829f3e) Thanks [@showms](https://github.com/showms)! - Add MiniMax Code as a global skills-only tool target.

- [#1518](https://github.com/Fission-AI/OpenSpec/pull/1518) [`568e56c`](https://github.com/Fission-AI/OpenSpec/commit/568e56c67231dbe2447aca4f0e7995c05ada95a3) Thanks [@clay-good](https://github.com/clay-good)! - ### New Features

  - **Atlassian Rovo Dev CLI** — `openspec init --tools rovodev` installs the OpenSpec workflow skills for Atlassian's Rovo Dev CLI. It is skills-only (no slash commands), written to `.rovodev`.

  ### Bug Fixes

  - **Codex skills now live in the shared `.agents` directory** — `openspec init` and `openspec update` install Codex skills under `.agents/skills/` (the canonical location assistants read) and migrate an existing `.codex` skills directory in place. Files you customized are preserved, not overwritten.
  - **`openspec status` separates planning from implementation** — status now reports `isPlanningComplete` (every non-skipped planning artifact exists; skipped artifacts count as satisfied without being written) distinctly from overall progress, and its messages no longer imply a change is finished before it has been implemented. `isComplete` is kept as a compatibility alias, so existing scripts keep working.

- [#1517](https://github.com/Fission-AI/OpenSpec/pull/1517) [`73207a6`](https://github.com/Fission-AI/OpenSpec/commit/73207a6f2cd235729ac3fe3cb1e44152b8f63f12) Thanks [@clay-good](https://github.com/clay-good)! - Make GitHub Copilot cloud coding-agent files opt-in. Selecting the `github-copilot` tool no longer silently writes a GitHub Actions workflow into `.github/`; `openspec init` now asks first (default No) and remembers the choice in `openspec/config.yaml` (`githubCopilot.cloudAgent`). Use `--copilot-cloud` / `--no-copilot-cloud` to decide non-interactively.

  - `openspec update` never prompts — it only refreshes cloud files for projects that opted in (or that already have generated cloud files, so existing setups keep working).
  - Opting out (`--no-copilot-cloud` or `cloudAgent: false`) removes OpenSpec-managed cloud files; a user-customized file is always preserved, never overwritten or deleted.
  - `init` and `update` now report whether cloud files were written, skipped, or left untouched — and if you already have your own `copilot-setup-steps.yml`, they say it was preserved and that you need to add the OpenSpec install step by hand.

- [#1484](https://github.com/Fission-AI/OpenSpec/pull/1484) [`521ee33`](https://github.com/Fission-AI/OpenSpec/commit/521ee33e6ece269241b45e08017ee60f13fdef08) Thanks [@clay-good](https://github.com/clay-good)! - Retire a capability when a change removes its last requirement. A change that declares `retire_capabilities: true` in its `.openspec.yaml` (alongside the `schema:` that file requires) may now be archived even when its REMOVED entries take a capability's last requirement: `openspec archive` deletes that capability's main spec instead of aborting with "Spec must have at least one requirement". Without the marker nothing changes — the archive aborts exactly as before, except the message now names the marker as the way out. Retirement happens only when the emptied spec could not have been written at all, every one is named in the archive output, a pasteable `git checkout` is included when the spec lived in the caller's checkout, and `--no-validate` never retires. Archive now also rejects a main spec with duplicate canonical requirement names instead of letting delta reconciliation collapse one of the duplicate blocks. One thing to know before retiring: a capability's spec is the base another change's MODIFIED block is checked against, so an in-flight change that modifies the capability you just retired will keep validating clean and then refuse to archive ("target spec does not exist; only ADDED requirements are allowed for new specs") — close or rework that change alongside the retirement.

### Patch Changes

- [#1502](https://github.com/Fission-AI/OpenSpec/pull/1502) [`ece8660`](https://github.com/Fission-AI/OpenSpec/commit/ece8660d44bd19b86440376327752cda3d7b0717) Thanks [@clay-good](https://github.com/clay-good)! - `openspec validate` now treats the English `SHALL`/`MUST` convention as guidance in normal mode, so requirements written in other languages can validate. Strict mode continues to enforce the convention.

- [#1483](https://github.com/Fission-AI/OpenSpec/pull/1483) [`2b3d368`](https://github.com/Fission-AI/OpenSpec/commit/2b3d368539132be6311e55db58899abbf5306b81) Thanks [@clay-good](https://github.com/clay-good)! - Tell the caller which flag to pass when `openspec archive` cannot ask its confirmation questions. An AI agent (or any script) runs the CLI with stdin closed, so every prompt rejects with `@inquirer`'s `User force closed the prompt with 0 null` — the archive aborted with an error that named neither the question nor the flag, and agents burned a turn guessing ([#1479](https://github.com/Fission-AI/OpenSpec/issues/1479)). Each confirmation now reports what it needed and a pasteable rerun that carries the flags you already passed: `openspec archive <name> --skip-specs --yes` stays a `--skip-specs` run, so following the suggestion cannot merge specs you opted out of merging, and a change name that needs quoting gets double quotes, the one form bash, zsh, PowerShell and cmd.exe all read the same way (a name no shell reads literally even quoted — one containing `$`, a backtick, or the `%`/`!` that cmd.exe still expands inside quotes — is left as a `<change-name>` placeholder rather than a command that would target something else). `openspec archive` with no change name used to swallow the same failure, print `No change selected. Aborting.` and exit 0 — success for a run that archived nothing; it now exits 1 asking for a change name, matching how `openspec show` and `openspec validate` already behave without a terminal. The check is reactive — it inspects a prompt that already failed — so answers piped into the command, `--yes`, `--json`, and Ctrl-C all behave exactly as before, and a run that OpenSpec already considers non-interactive (`CI`, `OPEN_SPEC_INTERACTIVE=0`, `--no-interactive`) gets the guidance even when the runner allocated a pty. The onboarding walkthrough, the only generated guidance that tells an agent to run `openspec archive`, now shows `--yes`.

- [#1486](https://github.com/Fission-AI/OpenSpec/pull/1486) [`427abf4`](https://github.com/Fission-AI/OpenSpec/commit/427abf40ac45a9a44f78eb74c81f53f9f4197ccf) Thanks [@clay-good](https://github.com/clay-good)! - Task progress now counts indented sub-tasks. A `tasks.md` whose sub-tasks were unfinished reported `✓ Complete` in `openspec list` and `openspec view`, was missing those tasks from the `openspec instructions apply` list, and archived with no incomplete-task warning, because both checkbox parsers only matched checkboxes at column 0.

  Progress counting and the apply task list now share one parser, so `list`, `view`, `archive` and `apply` agree about which lines of a tasks file are tasks. A checkbox with no text after it is left out of the apply list, which has nothing to act on, but still counts toward every progress number; a file of nothing but such checkboxes now asks to be rewritten rather than reporting itself done. The shared pattern matches every line the two it replaced matched, and more, so task counts can rise but never fall: no change starts reporting less work than before, and archive's incomplete-task warning can only become stricter. Checkboxes are still counted wherever they appear, including inside a code fence, an HTML comment or an indented block, so a `tasks.md` that shows a checklist as a format example can now count that example as work — remove it from the file, or pass `--yes` to archive.

- [#1500](https://github.com/Fission-AI/OpenSpec/pull/1500) [`26bd1d4`](https://github.com/Fission-AI/OpenSpec/commit/26bd1d4e5c6c6ba75bd7d6136424019b2bf89ced) Thanks [@clay-good](https://github.com/clay-good)! - Keep generated workflows on the selected store, handle optional workflow fallbacks safely, and validate synced specs before reporting success.

- [#1490](https://github.com/Fission-AI/OpenSpec/pull/1490) [`45cca5d`](https://github.com/Fission-AI/OpenSpec/commit/45cca5db6137ed209117cc70510eb3e057fb981b) Thanks [@clay-good](https://github.com/clay-good)! - Say before confirmation when archiving a change will delete a note written next to a requirement. A requirement absorbs anything below it that OpenSpec doesn't recognize as a new heading — a note indented by the one to three spaces Markdown allows, for example — so removing or modifying that requirement took the note with it, silently. `openspec archive` now names content the rebuilt spec would actually drop and where to move it to keep it. The merge itself is unchanged: nothing is relocated, because a `#` line inside a scenario looks identical to a note and moving one of those would rewrite the spec wrongly.

- [#1492](https://github.com/Fission-AI/OpenSpec/pull/1492) [`690a27e`](https://github.com/Fission-AI/OpenSpec/commit/690a27e649c4a3325daeb0f6667ebe0f82792179) Thanks [@mc856](https://github.com/mc856)! - `openspec init` and `openspec update` no longer delete the CoStrict and Junie command files they just generated. Legacy cleanup removes artifacts older OpenSpec versions left behind, and two of its patterns named paths the current adapters still write to. CoStrict's was a whole-directory removal of `.cospec/openspec/commands/`, the folder the adapter writes `opsx-<id>.md` into, so every run wiped the directory — including any file the user kept there — while the banner above it read `No user content to preserve`. Junie's `.junie/commands/opsx-*.md` listed its own current output. Cleanup runs before the config migration, so on a config that has no `profile` key yet the missing command files make delivery detection read the project as skills-only and persist that to the global config: the files are not regenerated, and the preference changes for every other project too.

  CoStrict is now a file pattern, `.cospec/openspec/commands/openspec-*.md`, matching the three commands the pre-`opsx` CoStrict integration wrote there (`openspec-proposal.md`, `openspec-apply.md`, `openspec-archive.md`) and the same shape every other file-based tool already uses. Junie's entry is removed outright: Junie support arrived after the slash configurators that wrote `openspec-*` files were deleted, so no OpenSpec version ever created those files there. Genuinely legacy files are still detected and removed, and no other tool's patterns change — they never overlapped their adapter's current output.

- [#1501](https://github.com/Fission-AI/OpenSpec/pull/1501) [`0b20ae3`](https://github.com/Fission-AI/OpenSpec/commit/0b20ae3964283bdcb4e34ea7380770857f6a339c) Thanks [@clay-good](https://github.com/clay-good)! - Keep the propose workflow focused on planning, clarify material ambiguities before creating a change, and hand implementation off to the apply workflow.

- [#1503](https://github.com/Fission-AI/OpenSpec/pull/1503) [`8a3850d`](https://github.com/Fission-AI/OpenSpec/commit/8a3850da735e241c14ad94935463f879b33f21a9) Thanks [@clay-good](https://github.com/clay-good)! - When exploration turns into a new change, generated explore guidance now instructs agents to run `openspec new change` before writing requested artifacts. This preserves the required `.openspec.yaml` metadata instead of letting an agent create an incomplete change directory by hand. After the user accepts a capture, explore also creates the requested artifacts without requiring another workflow command.

- [#1513](https://github.com/Fission-AI/OpenSpec/pull/1513) [`622c509`](https://github.com/Fission-AI/OpenSpec/commit/622c509a1349c3ad9c52cd1a4ee007bd47549204) Thanks [@FasterPHP](https://github.com/FasterPHP)! - Honor `telemetry.enabled` in global config. `false` disables anonymous telemetry and `openspec update` version checks; unset keeps telemetry enabled, and env/CI opt-outs still take precedence.

- [#1499](https://github.com/Fission-AI/OpenSpec/pull/1499) [`9cd845f`](https://github.com/Fission-AI/OpenSpec/commit/9cd845fc459b71486d9f2424c2e1f38e2ca8766e) Thanks [@clay-good](https://github.com/clay-good)! - Keep generated files, specs, archive moves, and local state inside their intended security boundaries without breaking linked monorepo workflows.

- [#1482](https://github.com/Fission-AI/OpenSpec/pull/1482) [`84ebc57`](https://github.com/Fission-AI/OpenSpec/commit/84ebc57cb3f0e91b93484484092fdc2f9fcf39e6) Thanks [@clay-good](https://github.com/clay-good)! - `openspec validate <change>` now reports a MODIFIED requirement that omits a scenario the main spec still has — the same loss archive already refuses to apply — so the change fails at authoring time instead of at archive time. A change carrying a stale MODIFIED block will start failing validation; it was already unarchivable, and the message names the scenarios to copy back in.

## 1.7.0

### Minor Changes

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Add CodeArts Agent skills support: `openspec init --tools codeartsagent` installs the workflow skills.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Add Hermes Agent as a supported AI tool: `openspec init --tools hermes` installs the workflow skills (Hermes is skills-only and invokes them directly).

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Add ZCode as a supported AI tool: `openspec init --tools zcode` generates its skills and `/opsx:*` commands.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Codex is now skills-only: workflows install as `$openspec-*` skills and previously managed custom prompts are retired (existing ones are cleaned up on update).

- [#1062](https://github.com/Fission-AI/OpenSpec/pull/1062) [`eac2973`](https://github.com/Fission-AI/OpenSpec/commit/eac2973819037727b10214f70db2f54d82f2d891) Thanks [@showms](https://github.com/showms)! - Add current project context and per-operation guidance to apply and archive workflows. Projects can configure `operations.apply.guidance` and `operations.archive.guidance`; `openspec instructions apply` returns apply inputs, and the new read-only `openspec instructions archive` surface returns archive inputs for the selected root.

  Archive, bulk archive, and sync skills now load current archive inputs and `specs` artifact rules at execution time, fail before writes or moves when required instruction lookups fail, and reuse specs-rule snapshots during inline sync.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Publish the workflow skills as static `skills/<name>/SKILL.md` files so `npx skills add Fission-AI/OpenSpec` works.

- [#1399](https://github.com/Fission-AI/OpenSpec/pull/1399) [`27b22ab`](https://github.com/Fission-AI/OpenSpec/commit/27b22ab4cbf530fa00e17f0f6b75a44d56777542) Thanks [@clay-good](https://github.com/clay-good)! - Add `skip_specs: true` change metadata for work with no spec-level behavior change (pure refactors, tooling, docs). `openspec validate` accepts a zero-delta change that declares the marker (honored only when the metadata parses under the shared change-metadata schema and names a schema that loads) and errors when the marker and delta specs are both present, the artifact graph no longer blocks `tasks` on spec files for such changes, `openspec status` renders the specs stage as explicitly skipped, and the propose/specs guidance points to the marker instead of contradicting the validator.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Resolve symlinked schema directories so schemas shared via symlink (e.g. from a dotfiles repo) are discovered.

- [#1470](https://github.com/Fission-AI/OpenSpec/pull/1470) [`6295515`](https://github.com/Fission-AI/OpenSpec/commit/6295515d4da4f7c76eaed00b7f1926771eae92de) Thanks [@clay-good](https://github.com/clay-good)! - `openspec update` now offers to upgrade the CLI when yours is behind the published one. Instruction files are generated by the installed CLI, so a stale install reported `✓ All 1 tool(s) up to date (v1.6.0)` while the workflows added in newer releases were never written:

  ```text
  A newer OpenSpec CLI is available (v1.6.0 → v1.7.0).
    Running from: /usr/local/lib/node_modules/@fission-ai/openspec
  ? Upgrade to v1.7.0 now? (Y/n)
  ```

  Say yes and it upgrades, confirms the new version is the one that answers, then re-runs the update so the new workflows arrive in the same command. Say no and it prints the command matching how you installed OpenSpec, and updates with what you have. Nothing happens to your machine that you did not agree to: the offer appears only in an interactive terminal and only where `npm install -g` would help, and the check is skipped in CI or when `OPENSPEC_NO_UPDATE_CHECK`, `DO_NOT_TRACK=1`, or `OPENSPEC_TELEMETRY=0` is set.

  See [CLI reference → `openspec update`](https://github.com/Fission-AI/OpenSpec/blob/main/docs/cli.md#openspec-update) for the per-install-method behavior and every opt-out.

### Patch Changes

- [#1404](https://github.com/Fission-AI/OpenSpec/pull/1404) [`a84ae70`](https://github.com/Fission-AI/OpenSpec/commit/a84ae70e8c6ef6ffaab56599d6f91fa39873e63d) Thanks [@clay-good](https://github.com/clay-good)! - Generated skills for tools without a command adapter (Kimi Code, Mistral Vibe, Hermes, ForgeCode, CodeArts) no longer reference `/opsx:*` commands that were never generated: skill cross-references, the init getting-started hint, and the profile-migration message now use each tool's documented skill invocation (Kimi Code: `/skill:openspec-*`; others: `/openspec-*`), and Codex — skills-invocable with no slash surface — gets a syntax-neutral hint that names the skill. Selections that mix invocation syntaxes print one labeled hint per distinct form, so every advertised instruction is usable by the tool it names. When `delivery: commands` would generate nothing for a selected tool, init prints a configuration correction naming that tool, even when other tools did get commands or skills. The committed skills.sh distribution is regenerated with skill references (default `/openspec-*` form, as that channel installs skills only).

- [#1363](https://github.com/Fission-AI/OpenSpec/pull/1363) [`5199f41`](https://github.com/Fission-AI/OpenSpec/commit/5199f41a5d523b9212dd2854ec5e505d2f80e2e7) Thanks [@clay-good](https://github.com/clay-good)! - ### Features

  - **One default store for every repo on your machine** — `openspec config set defaultStore <id>` sets a machine-level fallback root: any command run outside a planning root, with no `--store` flag and no project `store:` pointer, resolves to that store. It sits at the bottom of the precedence list, so `--store`, a local root, and a project pointer all still win. The root banner and JSON `root` block report the distinct provenance `source: "global_default"`, so users and tooling can tell a machine-wide default from a repo's own pointer. A stale id degrades to the underlying store error with a fix that names `openspec config unset defaultStore`.

- [#1435](https://github.com/Fission-AI/OpenSpec/pull/1435) [`6a5171e`](https://github.com/Fission-AI/OpenSpec/commit/6a5171e18630db4ed8e78c9edfaae4be532e2af6) Thanks [@clay-good](https://github.com/clay-good)! - `openspec new change` now accepts numeric-prefixed names like `100-add-feature` or `00001-add-auth`, useful for ordering or tiering changes. Change names now use the same kebab-case grammar as store ids and change metadata (a leading digit is allowed); `archive` already treated date-prefixed names as a supported convention. Uppercase, spaces, underscores, and leading/trailing or consecutive hyphens are still rejected, and every previously valid name stays valid.

- [#1425](https://github.com/Fission-AI/OpenSpec/pull/1425) [`040a869`](https://github.com/Fission-AI/OpenSpec/commit/040a86931f5398167137a483b2e8081aec13016e) Thanks [@clay-good](https://github.com/clay-good)! - Compare config key guards literally instead of through a helper.

  `setNestedValue` and `deleteNestedValue` rejected prototype-reaching key segments through a helper that did a `Set` lookup. That is correct, but static analysis could not follow it, so CodeQL kept reporting prototype-pollution on the very assignments the guard protects. The segments are now compared literally in the same function, still checked across the whole path before anything is written. Behavior is unchanged for every input, verified against the previous implementation across 400,000 generated cases.

- [#1431](https://github.com/Fission-AI/OpenSpec/pull/1431) [`6a4f0d7`](https://github.com/Fission-AI/OpenSpec/commit/6a4f0d7f3384486132cb9c516b635c23cadc1fa2) Thanks [@clay-good](https://github.com/clay-good)! - A delta spec that introduces a brand-new capability can now open with a `## Purpose`, and `openspec archive` uses it as the Purpose of the main spec it creates instead of writing the `TBD - created by archiving change <name>. Update Purpose after archive.` placeholder over it. The `specs` artifact instruction, its example, the delta template and the `openspec-sync-specs` skill all tell authors and agents to write one, so the CLI and agent-driven sync paths produce the same main spec.

  Archive keeps the placeholder when the delta has no usable `## Purpose`:

  - no `## Purpose` header outside a code fence or HTML comment, or a body that is only a code fence or only a comment
  - a body that would leave a spec its own parser cannot read — a heading or requirement header that truncates a section, an unterminated fence, or any HTML comment
  - in the second case archive also says why, and still completes rather than aborting

  A carried Purpose under 50 characters is kept but warned about, since `openspec validate --strict` reports it as too brief. The Purpose of an existing main spec is never touched; archive warns when it ignores a delta's Purpose there.

- [#1437](https://github.com/Fission-AI/OpenSpec/pull/1437) [`19d4171`](https://github.com/Fission-AI/OpenSpec/commit/19d41714c8b790488732687443713e406ef5aeef) Thanks [@clay-good](https://github.com/clay-good)! - `openspec archive` no longer aborts when a REMOVED delta's requirement is already gone from the main spec (the early-sync pattern the sync skill teaches): it warns, treats the removal as already applied, and reports applied-only totals. In `--json` mode those warnings are carried in a new optional `warnings` array on the archive result. When every operation for a spec was already synced, archive skips rewriting that file instead of churning normalization differences into it. A delta that both RENAMEs and REMOVEs the same requirement is now rejected explicitly, by both `validate` and `archive` — the two spellings are compared case- and whitespace-insensitively — and a REMOVED header that differs only in case or whitespace from an existing requirement still aborts (that is a typo, not an early sync). Also fixed: the archive delta gate matches section headers case-insensitively like the parser; symlinked `specs/<capability>/spec.md` files are discovered instead of silently dropped; `openspec show <change>` no longer prints a spurious "scenarios" flag warning; files generated for qwen and bob reference commands by their real hyphenated names (`/opsx-<id>`), and init's getting-started hint follows suit; apply/update/onboard guidance names the CLI fallback for profiles that don't install `/opsx:continue` or `/opsx:new`.

- [#1411](https://github.com/Fission-AI/OpenSpec/pull/1411) [`c439a4e`](https://github.com/Fission-AI/OpenSpec/commit/c439a4ee48ef02dcdae6ac8101b7d12924695e7e) Thanks [@clay-good](https://github.com/clay-good)! - Fix phantom requirements parsed from delta specs, which made `openspec archive` warn about problems `openspec validate` never reported.

  A header inside a delta section that is not a `### Requirement:` header — a divider such as `### Documentation Requirements` — was read as a requirement with no scenario. `openspec archive` warned that it was missing a scenario, and `openspec show <change> --json` and `openspec change list` counted it as an extra delta. The change parser now ignores those headers, matching the delta reader, so the phantom is gone from the warnings and from the JSON. Main spec parsing is unchanged.

  `openspec archive` also no longer repeats requirement-level issues from the delta specs in its non-blocking "Proposal warnings in proposal.md" block. Each defect was printed twice there, and a `## REMOVED Requirements` entry — names-only by design — was reported as missing a scenario on every correct removal. Delta spec validation still reports and blocks on genuine defects, and proposal-level warnings are unchanged.

- [#1394](https://github.com/Fission-AI/OpenSpec/pull/1394) [`b474f81`](https://github.com/Fission-AI/OpenSpec/commit/b474f81cb4bebbeff0e447fd78c34a613ebd02fa) Thanks [@clay-good](https://github.com/clay-good)! - ### Bug Fixes

  - **Archive no longer races the spec sync, or reports a sync that never landed** — the generated `openspec-archive-change` skill (and the matching `opsx:archive` command) handed the spec sync to a background task and then moved the change folder immediately. The archive could move the delta specs out from under the running sync: the change ended up archived, `openspec/specs/` was never updated, and the summary still reported `Specs: ✓ Synced`. The sync now runs inline, and the archive only proceeds once every capability with a delta spec has been checked against it — ADDED present, MODIFIED changes applied, REMOVED gone, RENAMED under the new name and not the old. If the sync fails or a capability doesn't match, the archive stops and reports what differs instead of claiming success; nothing has moved, so you can fix it and retry.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Apply profile changes with the installed CLI instead of shelling out to `npx`, which could run a different version.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Delta and main-spec parsers strip a UTF-8 BOM, so files saved by Windows editors or PowerShell redirects no longer fail with "No delta sections found".

- [#1398](https://github.com/Fission-AI/OpenSpec/pull/1398) [`97d441a`](https://github.com/Fission-AI/OpenSpec/commit/97d441a8ee2738d3008709e61acfc91925c7ae3a) Thanks [@clay-good](https://github.com/clay-good)! - ### Bug Fixes

  - **Bulk archive now stops when you pick "Cancel"** — the generated `openspec-bulk-archive-change` skill (and the matching `opsx:bulk-archive` command) offered a "Cancel" option at the confirmation prompt but never told the agent what to do with it, so the next step archived every selected change anyway. The prompt now routes each answer by intent: "Cancel" stops without archiving anything, the archive options proceed (the ready-only option archives just the changes the status table marks `Ready` or `Ready*`), and any other answer re-asks instead of archiving. The single-change archive skill already routes Cancel this way; this brings the bulk variant in line.

- [#1375](https://github.com/Fission-AI/OpenSpec/pull/1375) [`52a8bce`](https://github.com/Fission-AI/OpenSpec/commit/52a8bce1fd2bc98c51fa35cf0cfa05e799eb4404) Thanks [@clay-good](https://github.com/clay-good)! - `--change` now accepts any change name that exists on disk (e.g. date-prefixed names like `2026-07-04-voice-copilot-v1`), matching what `list`, `validate`, and `archive` already resolve. Lookup still rejects unsafe names (path separators, `..`, hidden entries); the kebab-case naming rule still applies when creating a change.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - `openspec new change` rejects names over 200 characters with a validation message instead of surfacing a raw ENAMETOOLONG filesystem error.

- [#1447](https://github.com/Fission-AI/OpenSpec/pull/1447) [`fb19699`](https://github.com/Fission-AI/OpenSpec/commit/fb196995dad017074415a638824eb546f3321cbc) Thanks [@hsusul](https://github.com/hsusul)! - Generated tool command files now carry valid YAML frontmatter for every supported tool. Command names ship as `OPSX: Explore`, and the unquoted `name: OPSX: Explore` that adapters emitted is not parseable YAML — strict parsers rejected the whole file, so the command failed to load. Several adapters also re-implemented their own escaping, and a few interpolated descriptions in raw.

  Escaping now lives in one place (`escapeYamlValue` / `formatTagsArray`) and every adapter uses it. String frontmatter values are always double-quoted, which also keeps values like `true`, `null` and `123` from round-tripping as booleans, nulls and numbers. Non-string fields such as `allowed-tools` and `invokable` are unchanged. Expect the first `openspec update` after upgrading to rewrite the frontmatter lines of your generated command files.

  Archive workflow guidance also gets two corrections: bulk archive now carries its per-delta include/exclude decisions into execution, so a delta whose implementation was not found is reported as `sync skipped` instead of being synced anyway, and both archive workflows verify the main specs before moving the change directory.

- [#1471](https://github.com/Fission-AI/OpenSpec/pull/1471) [`9a937cb`](https://github.com/Fission-AI/OpenSpec/commit/9a937cb9b36fb1040bdbde3bab3fa3903944ef10) Thanks [@clay-good](https://github.com/clay-good)! - Reference slash commands by the name each tool actually registers. Command bodies, generated `SKILL.md` cross-references, and the `init`/`update`/migration hints all advertised `/opsx:<id>`, but only 7 of the 28 tools with a command adapter register that name — the ones whose files sit in an `opsx/` directory. The other 21 write `.../opsx-<id>.md`, where the filename is the command, so tools such as Cursor, GitHub Copilot, Windsurf and Kilo Code were told to type a command their palette never had; a single generated Cursor file named itself `/opsx-apply` in frontmatter and then told the reader to run `/opsx:apply`. The command _name_ is now derived from the command file each adapter writes rather than a hand-maintained tool list, so a newly added adapter cannot drift, and the _wrapper_ around it is adapter metadata: Amazon Q loads its files into a prompt library invoked with `@`, so it now gets `@opsx-<id>` in command bodies, skills, and the onboarding hint instead of a slash command it never registers. Codex, which generates no command files at all, now gets `$openspec-<skill>` — the syntax its CLI actually accepts — everywhere it previously advertised `/opsx:*`, superseding the syntax-neutral hint described in the pending `adapterless-skill-references` note. Command filenames and paths are unchanged, and Claude Code output is byte-identical.

- [#1364](https://github.com/Fission-AI/OpenSpec/pull/1364) [`f58b445`](https://github.com/Fission-AI/OpenSpec/commit/f58b4456925b6331f3e5902a1c57905afe7edbf5) Thanks [@clay-good](https://github.com/clay-good)! - Fix `openspec completion install` detecting the wrong shell for fish (and other)
  users whose interactive shell differs from their login shell. Detection now
  consults the parent process before falling back to `$SHELL`, so running the
  command from fish installs fish completions instead of defaulting to bash.

- [#1377](https://github.com/Fission-AI/OpenSpec/pull/1377) [`285dfd7`](https://github.com/Fission-AI/OpenSpec/commit/285dfd7d764752b2a1e7e8cc843d613421e62652) Thanks [@clay-good](https://github.com/clay-good)! - ### Bug Fixes

  - Config `rules:` keys are no longer reported as `Unknown artifact ID` when they belong to a different schema. The global rules map is now validated against the union of artifact IDs across every available schema, so multi-schema projects stop seeing spurious warnings on every command ([#1322](https://github.com/Fission-AI/OpenSpec/issues/1322)).

- [#1401](https://github.com/Fission-AI/OpenSpec/pull/1401) [`b33b15d`](https://github.com/Fission-AI/OpenSpec/commit/b33b15d98ae929624c991632c7382ebc234d4ca7) Thanks [@clay-good](https://github.com/clay-good)! - Stop `design.md` from restating the proposal. In the default `spec-driven` schema, the design instruction asked for "Background, current state, constraints, stakeholders" and "What this design achieves and excludes" without saying that motivation and scope already live in `proposal.md`, so agents restated the proposal's Why and What Changes instead of adding the design's own value - approach, alternatives, and trade-offs. The instruction and the design template now state the boundary explicitly (the proposal covers why and what, design covers how) and tell the agent to reference those documents rather than repeat them ([#1382](https://github.com/Fission-AI/OpenSpec/issues/1382)).

- [#1167](https://github.com/Fission-AI/OpenSpec/pull/1167) [`1637856`](https://github.com/Fission-AI/OpenSpec/commit/1637856c423f2e84457652d1ab58885fe9744fb2) Thanks [@mehdishahdoost](https://github.com/mehdishahdoost)! - **Windsurf is now Devin Desktop.** Windsurf was rebranded on June 2, 2026 and its config directory moved: `.devin/` is the preferred read + write location, `.windsurf/` a legacy read-only fallback that the Devin Local agent does not read at all. OpenSpec follows the rename rather than carrying two ids for one product — the tool id is `devin`, writing `.devin/workflows/opsx-<id>.md` and `.devin/skills/openspec-*/SKILL.md`, and it is detected from either directory.

  - `--tools windsurf` still resolves, so existing setup scripts keep working; it now configures `.devin/`.
  - If your OpenSpec files are still in `.windsurf/`, `openspec update` explains the rebrand and offers to move them. `--force` and non-interactive runs take the move; declining leaves every file exactly where it is. Only the files OpenSpec generates move — each skill's `SKILL.md` and commands named `opsx-*`. A hand-written Cascade workflow, a reference file you keep beside a `SKILL.md`, a command file you edited, and `.devin/rules/` all stay exactly where they are.
  - Devin skills and the getting-started hint reference `/openspec-*` skills rather than `/opsx-*` workflows, because only Devin Desktop reads workflows; the `/openspec-*` form works on both agents. Workflow bodies still use `/opsx-<id>`, the name Devin registers for a workflow file.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - `openspec doctor` now notes when a store checkout is behind its upstream ref.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Make the archive scenario-drift check multiplicity-aware: a MODIFIED block that keeps only one of two same-named scenarios no longer silently drops the other.

- [#1408](https://github.com/Fission-AI/OpenSpec/pull/1408) [`378d468`](https://github.com/Fission-AI/OpenSpec/commit/378d468ad348dc1e973ed30c5cfa458fb77c9de3) Thanks [@clay-good](https://github.com/clay-good)! - Explore now reads the project's context and rules from `openspec/config.yaml` (or `config.yml`) at the start of a session, so it reasons with the same tech stack and conventions the artifact-creating workflows already receive.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - `openspec feedback` shows the formatted text and a pre-filled submission URL on any gh failure (issues disabled, network, rate limit), not only when gh is missing or unauthenticated.

- [#1396](https://github.com/Fission-AI/OpenSpec/pull/1396) [`60f720c`](https://github.com/Fission-AI/OpenSpec/commit/60f720c43acd94de7645ac8629c614ede4682b6a) Thanks [@clay-good](https://github.com/clay-good)! - Fix `openspec feedback` failing when the repository does not define the `feedback` label. The command now retries without the label and notes that it was not applied, instead of exiting with an error and discarding the feedback.

- [#1151](https://github.com/Fission-AI/OpenSpec/pull/1151) [`18cbf5d`](https://github.com/Fission-AI/OpenSpec/commit/18cbf5d32ffe1bff4fff692e24568c605cf1e0fa) Thanks [@javigomez](https://github.com/javigomez)! - ### Fixed

  - Ignore Markdown structure (requirement headers, delta sections, scenarios, REMOVED/RENAMED entries) that appears inside fenced code blocks when parsing delta specs. Previously a fenced `### Requirement:` example was parsed as a real (phantom) requirement, producing spurious `validate` errors and risking incorrect `archive` output. Fenced-code detection is now shared across the Markdown parsers so `validate` and `archive` behave consistently.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - The archive scenario-drift check now ignores `#### Scenario:` lines inside fenced code blocks, matching validate: a fenced example no longer false-aborts an archive, and a fenced name no longer masks a genuinely dropped scenario.

- [#1316](https://github.com/Fission-AI/OpenSpec/pull/1316) [`9b70481`](https://github.com/Fission-AI/OpenSpec/commit/9b70481df727ab9f7a00dd0118e4e09373a36fb9) Thanks [@mc856](https://github.com/mc856)! - ### Bug Fixes

  - **`archive` no longer stacks a second date prefix** — archiving a change whose name already starts with a `YYYY-MM-DD-` prefix (a common authoring convention) keeps the name as-is instead of prepending today's date. Previously `openspec archive 2026-07-04-voice-copilot-v1 --yes` produced `2026-07-06-2026-07-04-voice-copilot-v1`, and when run on a later day the folder sorted under a day on which the change did not happen. Names without a full date prefix (including partial dates like `2026-07-feature`) are dated as before, and the naming is now idempotent.

- [#1374](https://github.com/Fission-AI/OpenSpec/pull/1374) [`da3907b`](https://github.com/Fission-AI/OpenSpec/commit/da3907b8a9170711c8b7f63e18352e8577cf7df5) Thanks [@clay-good](https://github.com/clay-good)! - fix(completion): make the PowerShell completion script parse and load again

  The generated `OpenSpecCompletion.ps1` contained 18 empty `switch ($positionalIndex) { }` blocks — emitted for commands whose positionals are all `path`-typed (PowerShell completes paths natively, so those cases produce no clauses). A switch with no clauses is a PowerShell parse error ("Missing condition in switch statement clause"), and PowerShell parses the whole file before running it, so the script never loaded and completions never registered. The generator now skips the positional-index block entirely when no positional produces completions, so the script parses clean (18 → 0 errors) and tab completion works.

- [#1388](https://github.com/Fission-AI/OpenSpec/pull/1388) [`9b5d2cd`](https://github.com/Fission-AI/OpenSpec/commit/9b5d2cdd0c1aa4b1b49da4f95c6cec8d7d38b155) Thanks [@mc856](https://github.com/mc856)! - ### Bug Fixes

  - **Archive workflow templates no longer teach agents to stack a second date prefix** — the `openspec-archive-change` and `openspec-bulk-archive-change` skill/command templates (and the onboarding walkthrough's archived-path example) now mirror the `openspec archive` rule: a change whose name already starts with a `YYYY-MM-DD-` prefix is archived under its own name, while other names get the current date prepended as before. Previously an agent following the workflow instructions on a change named `2026-07-04-voice-copilot-v1` produced `archive/2026-07-07-2026-07-04-voice-copilot-v1`, whatever the CLI did.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Gemini command files escape TOML-active characters (quotes, backslashes, control characters) in the description and prompt, so a template value containing them can no longer produce an invalid `.toml` file.

- [#1464](https://github.com/Fission-AI/OpenSpec/pull/1464) [`5bcf057`](https://github.com/Fission-AI/OpenSpec/commit/5bcf05766a70ec0163c3e700a3029b1c1da895d8) Thanks [@clay-good](https://github.com/clay-good)! - Workflow skills and commands no longer tell agents to use the Claude Code-only AskUserQuestion tool. The same templates are generated for every supported tool, and agents without that tool (OpenCode, Factory Droid, Codex, and others) errored or stalled on the instruction. The guidance is now runtime-neutral: agents are simply told to ask the user.

- [#1403](https://github.com/Fission-AI/OpenSpec/pull/1403) [`2d6c447`](https://github.com/Fission-AI/OpenSpec/commit/2d6c447100c51fb1e5f65c6f6a35ce02a3196a10) Thanks [@clay-good](https://github.com/clay-good)! - ### Bug Fixes

  - **Propose and fast-forward skills no longer name the Claude-only TodoWrite tool** — the generated `openspec-propose` and `openspec-ff-change` skills (and their `/opsx:propose` / `/opsx:ff` commands) told every agent to "Use the **TodoWrite tool**", which only exists in Claude Code. Codex, Cursor, Gemini, Copilot, and the other supported tools have no such tool, so agents either errored or stalled looking for it. The instruction is now runtime-neutral ("Use a todo list to track progress"), which works everywhere — including Claude Code.

- [#1415](https://github.com/Fission-AI/OpenSpec/pull/1415) [`e2f748c`](https://github.com/Fission-AI/OpenSpec/commit/e2f748c64f05efaeac720f83c71fb6f1b6f6e18d) Thanks [@clay-good](https://github.com/clay-good)! - Reject config key paths that reach the prototype chain, and update the bundled `yaml` dependency.

  `openspec config set --allow-unknown __proto__.polluted <value>` reported success and assigned onto `Object.prototype` for the rest of the process. `--allow-unknown` was meant to relax the known-key check only, but it skipped every key check, so `__proto__`, `constructor`, and `prototype` segments reached the nested-write helper. Those segments are now rejected in `config set` whether or not `--allow-unknown` is passed, and `setNestedValue` / `deleteNestedValue` refuse them regardless of caller. Ordinary keys such as `featureFlags.myFlag` behave exactly as before.

  The `yaml` runtime dependency moves from 2.8.2 to 2.9.0, picking up the fix for a stack overflow on deeply nested input (GHSA / advisory patched in 2.8.3).

- [#1376](https://github.com/Fission-AI/OpenSpec/pull/1376) [`7958924`](https://github.com/Fission-AI/OpenSpec/commit/7958924e95654af981437951e967983385da8001) Thanks [@clay-good](https://github.com/clay-good)! - ### Bug Fixes

  - **Archive after early sync** — `openspec archive` no longer fails with `ADDED failed … already exists` when a change's specs were already synced to the main specs before archiving (the early-sync pattern from the `sync` workflow). If an ADDED requirement already exists in the target spec with identical content, applying it is treated as a no-op; a same-named requirement with different content still aborts the archive as a genuine conflict ([#1332](https://github.com/Fission-AI/OpenSpec/issues/1332)).

- [#1386](https://github.com/Fission-AI/OpenSpec/pull/1386) [`b419e96`](https://github.com/Fission-AI/OpenSpec/commit/b419e965bbf413cc658bbac37325ebc147b1c869) Thanks [@mc856](https://github.com/mc856)! - ### Bug Fixes

  - **Archive after early sync (RENAMED)** — `openspec archive` no longer fails with `RENAMED failed … source not found` when a change's renames were already synced to the main specs before archiving (the early-sync pattern from the `sync` workflow). If a RENAMED requirement's source header is gone but the target header exists in the spec, applying the rename is treated as a no-op; a rename whose source and target are both missing still aborts the archive as a genuine error, and reported counts reflect only renames actually applied.

- [#1462](https://github.com/Fission-AI/OpenSpec/pull/1462) [`ebf66c7`](https://github.com/Fission-AI/OpenSpec/commit/ebf66c7ee1df3f7465d7f480753f952483133a73) Thanks [@clay-good](https://github.com/clay-good)! - Respect reduced-motion preferences in `openspec init`: the welcome animation is skipped when the OS reduced-motion setting is on (macOS Reduce Motion, GNOME animations disabled), when `OPENSPEC_NO_ANIMATION` is set, or when the new `--no-animation` flag is passed. The static welcome screen is shown instead.

- [#1405](https://github.com/Fission-AI/OpenSpec/pull/1405) [`5dfef4b`](https://github.com/Fission-AI/OpenSpec/commit/5dfef4b00c233fbe78f40488bd4ff98f4204684c) Thanks [@clay-good](https://github.com/clay-good)! - ### Bug Fixes

  - **Custom schema instructions are no longer overridden by hard-coded spec-driven patterns** — the `openspec-continue-change` skill/command embedded one-line "common artifact patterns" for proposal.md, specs, design.md, and tasks.md, so agents followed those shortcuts instead of the schema's `instruction` field whenever a custom schema reused familiar artifact names. The templates now state that the `instruction` field is the authoritative guidance, and the `propose`, `continue`, and `ff` workflows direct the agent — both in the artifact-creation step and in the guidelines — to invoke a skill when the instruction delegates artifact creation to one, verifying the artifact exists afterward (fixes [#777](https://github.com/Fission-AI/OpenSpec/issues/777)).

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Follow the Kimi CLI rename to Kimi Code: new install paths with automatic migration of existing `.kimi` setups.

- [#1415](https://github.com/Fission-AI/OpenSpec/pull/1415) [`e2f748c`](https://github.com/Fission-AI/OpenSpec/commit/e2f748c64f05efaeac720f83c71fb6f1b6f6e18d) Thanks [@clay-good](https://github.com/clay-good)! - Parse spec headings in linear time when the title is padded with whitespace.

  Building the reference index read the first Purpose line with a regex that backtracked quadratically on a heading full of spaces: 10,000 characters of padding took 60ms, and 100,000 would have taken roughly six seconds. The heading scan is now hand-rolled and linear. Behavior is unchanged — the replacement was checked against the old implementation across 303,000 generated inputs, including CommonMark closing sequences (`## Purpose ##`), seven-hash lines, and headings with no space after the hashes.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Use local dates for CLI date-only values (archive names, timestamps) instead of UTC, so late-evening archives no longer get tomorrow's date.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - `openspec update` warns when a custom profile is missing core workflows instead of silently generating a partial install.

- [#1428](https://github.com/Fission-AI/OpenSpec/pull/1428) [`81d5109`](https://github.com/Fission-AI/OpenSpec/commit/81d5109b86f16537deb99f84a772a83235dc9e09) Thanks [@taltas](https://github.com/taltas)! - Update current Roo Code product references to its community successor, Zoo Code.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Archive treats a MODIFIED delta whose content already matches the main spec as a no-op: a fully early-synced change now reports "Specs already in sync" instead of rewriting the file and claiming modifications.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Render multi-select prompts with `[x]`/`[ ]` checkbox markers instead of radio-button icons.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Discover nested spec paths like `specs/<area>/<capability>/spec.md` recursively and consistently across parse, apply, and archive.

- [#1410](https://github.com/Fission-AI/OpenSpec/pull/1410) [`b3b05e1`](https://github.com/Fission-AI/OpenSpec/commit/b3b05e1abeb312caefd57e60be799aeb466c1d0e) Thanks [@clay-good](https://github.com/clay-good)! - Only advertise onboarding commands that will actually exist. The `openspec init` welcome screen and the `openspec update` "Getting started" summary listed `/opsx:new` and `/opsx:continue`, which the default `core` profile never generates, so users were told to run commands that did not exist. Both surfaces now list the commands for the installed workflows. The `init` and `update` completion hints also name the skill (`/openspec-propose`) instead of a command for tools that receive no command files — Codex, and any tool under skills-only delivery.

- [#1412](https://github.com/Fission-AI/OpenSpec/pull/1412) [`1dc670d`](https://github.com/Fission-AI/OpenSpec/commit/1dc670deea741b8313b8a22fb975741f84677b3f) Thanks [@clay-good](https://github.com/clay-good)! - ### Fixed

  - **`/opsx:propose` and `/opsx:ff` no longer finish a change with no spec written.** The workflows listed only `proposal`/`design`/`tasks` and treated the apply phase's `tasks` artifact as the stop condition — but `status` marks an artifact `done` as soon as a matching file exists, so writing `tasks.md` early satisfied the loop while `specs/<capability>/spec.md` was never created (a spec-less change in a spec-driven tool). The loop now derives the full required set — every apply dependency plus everything it transitively `requires` — from a single `status` call, creates each missing artifact, and only skips one when its own `instruction` field marks it conditional. ([#1260](https://github.com/Fission-AI/OpenSpec/issues/1260), [#788](https://github.com/Fission-AI/OpenSpec/issues/788))

  ### Changed

  - **`openspec status --json` now reports each artifact's `requires` edges.** Every entry in the `artifacts` array carries a `requires` array of the ids it directly depends on, present for every status (including `done`) so agents can compute the transitive required set from `status` alone. Additive and backward-compatible — existing fields are unchanged.

- [#1191](https://github.com/Fission-AI/OpenSpec/pull/1191) [`7704702`](https://github.com/Fission-AI/OpenSpec/commit/7704702d61fa71e4f553c21a06bdf8e4ee803b4a) Thanks [@mc856](https://github.com/mc856)! - Generate Markdown commands for Qwen Code instead of deprecated TOML format. Qwen Code now recommends Markdown custom commands with YAML frontmatter; the old `.qwen/commands/opsx-*.toml` files are cleaned up as legacy artifacts on update.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - An already-synced RENAMED delta aborts when a case/whitespace variant of the source requirement still exists — the same typo guard REMOVED deltas have.

- [#1368](https://github.com/Fission-AI/OpenSpec/pull/1368) [`de78c31`](https://github.com/Fission-AI/OpenSpec/commit/de78c31ffd885a0558ae55d332f74d5485dc01c0) Thanks [@clay-good](https://github.com/clay-good)! - ### Fixes

  - **Regenerated artifacts now pick up your manual edits** — the continue, propose, and fast-forward workflows (and the `openspec instructions` dependency block) now tell the agent to re-read dependency artifacts from disk before creating the next one, instead of trusting whatever version it saw earlier in the conversation. Previously, editing `spec.md` and deleting `design.md`/`tasks.md` to regenerate them could silently produce artifacts based on the stale, pre-edit content.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Proposal guidance now resolves blocking open questions with the user instead of deferring them to design.md.

- [#1392](https://github.com/Fission-AI/OpenSpec/pull/1392) [`a13abea`](https://github.com/Fission-AI/OpenSpec/commit/a13abeac47d419462b0193dbf9423dd466ffe6c7) Thanks [@clay-good](https://github.com/clay-good)! - ### Fixed

  - Stop a delta spec written directly at a change's `specs/` root from being silently dropped. `validate` accepted `specs/spec.md` and counted its deltas, but the apply/archive merge only reads capability folders (`specs/<capability>/spec.md`), so the change could pass validation and be archived while its requirements never reached `openspec/specs/`. `validate` now uses the same discovery rules as the merge path and reports the misplaced file with a fix hint, and `archive` blocks instead of completing.

- [#1465](https://github.com/Fission-AI/OpenSpec/pull/1465) [`f917b8b`](https://github.com/Fission-AI/OpenSpec/commit/f917b8be5e1100189ef62320ba9322763053640e) Thanks [@clay-good](https://github.com/clay-good)! - Order artifacts by the schema's declaration order instead of alphabetically.

  `specs` and `design` both require only `proposal`, so both become ready at once - and the tie used to be broken alphabetically, which put `design` first. `openspec status` listed design above specs and `nextSteps` recommended writing `design.md` before any spec existed, contradicting the spec-driven schema's own documented `proposal → specs → design → tasks` sequence.

  Ties now follow the order the schema declares its artifacts, so `openspec status`, `status --json`, `nextSteps`, `blocked by:` lists, and an artifact's `unlocks` all agree. No dependency edges changed, so nothing newly blocks and `design.md` stays optional - only the order of equally-ready artifacts moved. Custom schemas get the same guarantee: dependency order still comes first, but wherever your schema leaves two artifacts equally ready, the order of its `artifacts:` list now decides which one the CLI recommends - so reorder that list if it was never deliberate.

- [#1446](https://github.com/Fission-AI/OpenSpec/pull/1446) [`5348da9`](https://github.com/Fission-AI/OpenSpec/commit/5348da930c4038ffd5b5a521702b71315dcd0019) Thanks [@showms](https://github.com/showms)! - ### Bug Fixes

  - Preserve an existing project-local schema when `openspec schema init --force` rejects an unknown artifact ID. Forced replacement now begins only after artifact validation succeeds.

- [#1433](https://github.com/Fission-AI/OpenSpec/pull/1433) [`26f009d`](https://github.com/Fission-AI/OpenSpec/commit/26f009d940f311b99db7f310816bb166a99fb3ef) Thanks [@clay-good](https://github.com/clay-good)! - Change lookup no longer requires `proposal.md`. `openspec show`, `openspec change list/show/validate`, and shell completion now resolve a change by its directory, matching `openspec list`, `status`, `instructions`, and `validate`.

  Previously a change created by `openspec new change` — which scaffolds only `.openspec.yaml` — was reported as `Unknown item` by `openspec show` and was missing from completions and `openspec change list` until a proposal was written, and a change from a schema with no proposal artifact was never resolvable. `openspec change list` now reports the same set as `openspec list`, keeps task counts for a change that has no proposal yet, and labels it `(no proposal.md yet)` rather than `(unable to read)`. Showing such a change explains that the proposal is not written yet and points at `openspec status --change <name>`.

- [#1468](https://github.com/Fission-AI/OpenSpec/pull/1468) [`fc886af`](https://github.com/Fission-AI/OpenSpec/commit/fc886af7f93068482bbf2c66fd1eb76b40c6a22f) Thanks [@clay-good](https://github.com/clay-good)! - The continue, update, verify, sync, and archive workflow skills now select a change the same way apply does: use the provided name, infer it from conversation context, auto-select when exactly one active change exists, and only prompt when the choice is genuinely ambiguous. Previously these workflows were told to always prompt ("Do NOT guess or auto-select"), so invoking them with a single active change stalled on a question with only one possible answer. The selection is always announced ("Using change: <name>") with how to override, and bulk archive still always prompts.

- [#1194](https://github.com/Fission-AI/OpenSpec/pull/1194) [`b7c85c7`](https://github.com/Fission-AI/OpenSpec/commit/b7c85c741ca56748a4ae095b573fe4550c5c977f) Thanks [@mc856](https://github.com/mc856)! - Fix skills-only delivery emitting `/opsx:*` command references. SKILL.md files generated by init, update, and workspace skill setup now reference the corresponding skills (e.g. `/openspec-apply-change`) when `delivery: 'skills'` is configured, instead of commands that were never generated.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Specs instructions include the spec content guidance from the concepts docs, so generated specs follow the requirement/scenario format.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - The static welcome screen (reduced motion, `--no-animation`, narrow terminals) now waits for the Enter it asks for instead of letting the keystroke submit the tool picker unseen.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Sync and archive workflows resolve main specs through the store-aware root instead of assuming `openspec/specs` in the repo.

- [#1402](https://github.com/Fission-AI/OpenSpec/pull/1402) [`0da5f98`](https://github.com/Fission-AI/OpenSpec/commit/0da5f98e147543a44379e32295e2e9798d775d83) Thanks [@clay-good](https://github.com/clay-good)! - Show the main spec format in the sync-specs skill so agents stop leaving delta operation headers (`## ADDED/MODIFIED Requirements`) in `openspec/specs/` — merged main specs with those headers parse as 0 requirements in `openspec view` ([#1120](https://github.com/Fission-AI/OpenSpec/issues/1120)).

- [#1476](https://github.com/Fission-AI/OpenSpec/pull/1476) [`8731290`](https://github.com/Fission-AI/OpenSpec/commit/87312900f532c6c13ea556d4badaff2efdfa9602) Thanks [@clay-good](https://github.com/clay-good)! - Telemetry no longer depends on `posthog-node`: the single usage event is sent with a plain fetch to the same endpoint. Installing OpenSpec no longer pulls the fast-publishing `posthog-node`/`@posthog/core`/`@posthog/types` tree, which broke downstream installs under supply-chain age policies like pnpm's `minimumReleaseAge` ([#1390](https://github.com/Fission-AI/OpenSpec/issues/1390)).

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - The stale-CLI check hardens its install detection: a directory merely named `volta` no longer changes the upgrade hint, the Windows npm-ownership check corroborates against the `openspec.cmd` shim npm actually writes, and a registry redirect from https to plain http is no longer followed.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - The stale-CLI check tears down a redirected registry connection when its time budget expires instead of leaving the socket open.

- [#1442](https://github.com/Fission-AI/OpenSpec/pull/1442) [`10fa39b`](https://github.com/Fission-AI/OpenSpec/commit/10fa39b1c3a3e88c02ae7d3053864c03a793ff47) Thanks [@hsusul](https://github.com/hsusul)! - `openspec update` now refreshes tools that are configured with command files but no skills (delivery `commands`). Previously it read the generating version only from skill files, so such a tool was reported as "up to date" forever and its command files were never regenerated after a CLI upgrade. Command files carry no version stamp, so OpenSpec compares their contents against what it would generate now — including removing a command file left behind by a workflow you have since deselected. CRLF line endings and a UTF-8 BOM are treated as checkout artifacts rather than drift, so a Windows clone does not report a spurious update.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - `openspec update` with `delivery: commands` prints the same configuration correction as init when it removes the skills of a tool that supports only skills, instead of deleting them silently.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - `openspec validate` reports an unreadable specs/ directory as the error it is instead of misdiagnosing it as "no deltas found".

- [#1455](https://github.com/Fission-AI/OpenSpec/pull/1455) [`6b3623a`](https://github.com/Fission-AI/OpenSpec/commit/6b3623a39e96f49995d38d642738b31f68e92039) Thanks [@c4patino](https://github.com/c4patino)! - `openspec view` now resolves the configured OpenSpec root instead of always reading the current directory, and accepts `--store <id>` like its sibling commands. Projects whose `openspec/config.yaml` points at an external store saw an empty dashboard — 0 specs, 0 requirements — while `openspec list` read the same store correctly.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - Preserve keyboard input on Windows after the welcome screen instead of dropping the first keystrokes.

- [#1475](https://github.com/Fission-AI/OpenSpec/pull/1475) [`17af60c`](https://github.com/Fission-AI/OpenSpec/commit/17af60c66e4c049e3986fdbafcdc16b202cda59f) Thanks [@clay-good](https://github.com/clay-good)! - zsh completion install honors `$ZSH` and `$ZSH_CUSTOM`, so Oh My Zsh setups at custom locations get the completion where their shell actually loads it.

## 1.6.0

### Minor Changes

- [#1090](https://github.com/Fission-AI/OpenSpec/pull/1090) [`3f0ca3f`](https://github.com/Fission-AI/OpenSpec/commit/3f0ca3f6ce6f2ec41260c5cbe7954b7e46adcf43) Thanks [@jjxyxsjr](https://github.com/jjxyxsjr)! - ### New Features

  - **TRAE command adapter** — Added command adapter for Trae IDE, enabling generation of `.trae/commands/opsx-<id>.md` files for custom slash commands

- [#1340](https://github.com/Fission-AI/OpenSpec/pull/1340) [`1552731`](https://github.com/Fission-AI/OpenSpec/commit/15527310f9be13cc9a4035ea01b93ba85873d956) Thanks [@TabishB](https://github.com/TabishB)! - ### New Features

  - **Oh My Pi support** — Generate native OPSX commands and skills for Oh My Pi projects, including tool detection and the expected `.omp` directory layout.
  - **Update planning artifacts in place** — Use `/opsx:update` to revise an existing change's planning artifacts, reconcile related artifacts, and keep implementation work delegated to `/opsx:apply`.

  ### Bug Fixes

  - **Fresh store registration** — Register and use newly created stores before their empty changes, specs, or archive directories have been committed.
  - **Safer requirement archiving** — Stop stale `MODIFIED` requirements from silently deleting scenarios that were added by an earlier archive.

### Patch Changes

- [#1300](https://github.com/Fission-AI/OpenSpec/pull/1300) [`a5bfeda`](https://github.com/Fission-AI/OpenSpec/commit/a5bfedafc8b3d914fe01d05eb36ad9ad3fbe35a2) Thanks [@clay-good](https://github.com/clay-good)! - ### Features

  - **Auto-approve the OpenSpec CLI in generated skills and commands** — every generated `SKILL.md` (all tools) and every Claude Code `/opsx:*` slash command now carries `allowed-tools: Bash(openspec:*)` in its frontmatter, so agents that honor the Agent Skills standard run `openspec` commands without prompting for approval on each call; tools that don't recognize the field ignore it. Scope is limited to the `openspec` CLI; because `allowed-tools` pre-approves rather than restricts, every other tool a skill or command uses stays available under your normal permission settings.

- [#1311](https://github.com/Fission-AI/OpenSpec/pull/1311) [`5956a8e`](https://github.com/Fission-AI/OpenSpec/commit/5956a8e872f41a8f690922b5c9b6927970252b2a) Thanks [@danilopopeye](https://github.com/danilopopeye)! - ### Bug Fixes

  - **`archive` exits non-zero when blocked in human mode** — `openspec archive <change> -y` (and any non-`--json` invocation) no longer returns exit code 0 when validation fails and nothing is archived. The three blocking paths in human mode — delta-spec validation failure, spec rebuild failure, and rebuilt-spec validation failure — now set `process.exitCode = 1`, matching the existing `--json` behavior. Previously the command printed "Validation failed" (or "Aborted. No files were changed.") and exited 0, letting scripts and CI believe the archive succeeded. Aligns `archive` with the same exit-code guarantee already approved for `apply` instructions (#1250).

- [#1280](https://github.com/Fission-AI/OpenSpec/pull/1280) [`a325305`](https://github.com/Fission-AI/OpenSpec/commit/a3253051ea1934fd0d76620addb855dfce801742) Thanks [@clay-good](https://github.com/clay-good)! - ### Bug Fixes

  - **`validate` resolves changes like `status`** — `openspec validate <change>` (and `--all`/`--changes` and the interactive selector) now resolves a change by directory existence, matching `status`/`instructions`, instead of requiring `proposal.md`. A scaffolded or still-authoring change is validated rather than reported as `Unknown item`, and a resolved-but-invalid change now exits non-zero. Delta discovery also recurses the nested `specs/<area>/<capability>/spec.md` layout. (#1182)
  - **Task progress reads nested/glob `tasks.md`** — `openspec view`, `list`, and the `archive` incomplete-task gate now resolve task progress through the tracked-tasks artifact's `generates` glob (the same file-resolution `status` uses), so a change whose tasks live in nested `tasks.md` files is classified correctly and can no longer archive while unfinished. (#1202)
  - **SHALL/MUST body-keyword hint applies to main specs** — A main-spec requirement whose normative keyword sits only in the `### Requirement:` header now receives the same targeted "move it to the body line" remediation as a change delta, emitted exactly once. (#1156)

- [#1281](https://github.com/Fission-AI/OpenSpec/pull/1281) [`9a0dfb5`](https://github.com/Fission-AI/OpenSpec/commit/9a0dfb5cd136b423c9f13c0b29ec3ea69761b4e6) Thanks [@clay-good](https://github.com/clay-good)! - ### Bug Fixes

  - **Requirement reading fidelity** — The requirement reader used by `validate <change>`, `validate <spec>`, and `archive` is now unified into one fence-, metadata-, and multi-line-aware extraction, closing the known divergences between the change-delta path and the main-spec path (the remaining ones are documented in the change's design doc):

    - A `SHALL`/`MUST` keyword that wraps onto a later body line is detected instead of dropped (#361).
    - Metadata lines (`**ID**:`, `**Priority**:`) before the description are skipped on the spec path, matching the change path (#418). A requirement written entirely as metadata (e.g. `**Constraint**: The system MUST ...`) keeps that line as its text instead of being emptied.
    - A fenced code block before the prose line no longer becomes the requirement text (#312).
    - A `#### Scenario:` inside a fenced example no longer counts as a real scenario in `validate <change>`, matching `validate <spec>`.
    - `SHALL`/`MUST` detection uses one whole-word predicate across all readers, and a requirement with no body text falls back to its header title on both paths.

    Displayed requirement text (e.g. in JSON output and delta descriptions) now reflects the full requirement body rather than only its first line. Archived spec content is unchanged — the archive rebuild reads raw `### Requirement:` blocks, not the parsed text.

  - **Surface non-canonical delta headers** — `validate <change>` now emits an INFO note when an `## ADDED`/`## MODIFIED Requirements` section contains a level-3 header that is not a canonical `### Requirement:` header (one the delta reader silently skips, such as a stray `### Documentation Requirements` divider). The note never changes the `valid` result, including under `--strict` (#498).

## 1.5.0

### Minor Changes

- [#1267](https://github.com/Fission-AI/OpenSpec/pull/1267) [`96f6cac`](https://github.com/Fission-AI/OpenSpec/commit/96f6cacb206c65bee30066f6a1f4e9b855a0d783) Thanks [@TabishB](https://github.com/TabishB)! - ### New Features

  - **Stores (very early beta)** — Introduces stores as a simpler way to organize specs and changes, replacing the workspace and initiative model. This feature is in very early beta — expect rough edges and breaking changes in upcoming releases.

  ### Bug Fixes

  - **Config parsing** — Configuration values wrapped in JSON containers are now parsed correctly.

### Patch Changes

- [#1240](https://github.com/Fission-AI/OpenSpec/pull/1240) [`cbf386b`](https://github.com/Fission-AI/OpenSpec/commit/cbf386bd6888f103f8ff7d59b3eab98ce5b57998) Thanks [@zied-jlassi](https://github.com/zied-jlassi)! - fix(adapters): escape carriage returns in generated YAML frontmatter

  `escapeYamlValue` flagged `\r` as a character requiring quoting but never escaped it, leaving a literal carriage return inside the double-quoted scalar where YAML line folding/normalization could silently corrupt the value (realistic with CRLF-authored command descriptions). Carriage returns are now escaped as `\r`. The helper — previously duplicated verbatim across five adapters (bob, claude, cursor, pi, windsurf) — is extracted into a shared `command-generation/yaml.ts` module so the behavior stays consistent and is fixed in one place.

## 1.4.1

### Patch Changes

- [#1165](https://github.com/Fission-AI/OpenSpec/pull/1165) [`0a01146`](https://github.com/Fission-AI/OpenSpec/commit/0a01146c181a3af8dbf645547bcbe20c0d48d615) Thanks [@TabishB](https://github.com/TabishB)! - Move beta workspace view state to `.openspec-workspace/view.yaml`, stop top-level `openspec update` from routing into workspace updates, and ignore foreign root `workspace.yaml` files so Dagster projects keep updating normally.

## 1.4.0

### Minor Changes

- [#1003](https://github.com/Fission-AI/OpenSpec/pull/1003) [`342ed43`](https://github.com/Fission-AI/OpenSpec/commit/342ed43e694abba65a3ea275f94ba3b77df85da3) Thanks [@Miss-you](https://github.com/Miss-you)! - ### New Features

  - **Kimi CLI support** — OpenSpec can now initialize Kimi CLI as a supported skills-only tool using `.kimi/skills/`

  ### Other

  - Added Kimi-specific docs and init coverage aligned with skill-based `/skill:openspec-*` usage

- [#1154](https://github.com/Fission-AI/OpenSpec/pull/1154) [`aa16080`](https://github.com/Fission-AI/OpenSpec/commit/aa16080d16b70f7b26cebd465334b2e16c0e7a43) Thanks [@TabishB](https://github.com/TabishB)! - ### New Features

  - **Mistral Vibe support** — OpenSpec can now initialize Mistral Vibe as a supported skills-only tool using `.vibe/skills/`

  ### Bug Fixes

  - **Case-insensitive requirement headers** — Requirement headers are now parsed regardless of capitalization, so specs no longer fail to parse over header casing
  - **Zsh completions on oh-my-zsh** — Fixed shell completion setup so tab completion installs correctly under oh-my-zsh's `compinit`

  ### Other

  - **Clearer validation hints** — When a requirement has SHALL/MUST only in its header, `openspec validate` now points you to move the keyword onto the requirement body line instead of showing the generic error

- [#1030](https://github.com/Fission-AI/OpenSpec/pull/1030) [`485c97e`](https://github.com/Fission-AI/OpenSpec/commit/485c97e97d766e35dd16c02370baee2044abc4f4) Thanks [@TabishB](https://github.com/TabishB)! - ### New Features

  - Include the sync workflow in the default core profile so new installs generate `/opsx:sync` skills and commands by default.

### Patch Changes

- [#1111](https://github.com/Fission-AI/OpenSpec/pull/1111) [`7fdb177`](https://github.com/Fission-AI/OpenSpec/commit/7fdb1771585b1688597d73dde5a8bc906084d0de) Thanks [@TabishB](https://github.com/TabishB)! - ### Fixed

  - Preserve workspace planning detection when Windows short paths or symlink aliases resolve to a canonical workspace root.

## 1.3.1

### Patch Changes

- [#995](https://github.com/Fission-AI/OpenSpec/pull/995) [`d1f3861`](https://github.com/Fission-AI/OpenSpec/commit/d1f3861d9ec694cc924b042b5da01963dcf93137) Thanks [@TabishB](https://github.com/TabishB)! - ### Bug Fixes

  - **Canonical artifact paths** — Workflow artifact paths are now resolved via the native `realpath`, so symlinks and case-insensitive filesystems no longer cause path mismatches during apply and archive.
  - **Glob apply instructions** — Apply instructions with glob artifact outputs now resolve correctly, and literal artifact outputs are enforced to be file paths.
  - **Hidden main spec requirements** — Requirements nested inside fenced code blocks or otherwise hidden in main specs are now detected during validation.
  - **Clean `--json` output** — Spinner progress text no longer leaks into stderr when `--json` is passed, so AI agents that combine stdout and stderr can parse the JSON reliably.
  - **Silent telemetry in firewalled environments** — PostHog network errors are now swallowed with a 1s timeout and retries/remote config disabled, so OpenSpec no longer surfaces `PostHogFetchNetworkError` in locked-down networks. Telemetry opt-out is documented earlier in the README, installation guide, and CLI reference.

## 1.3.0

### Minor Changes

- [#952](https://github.com/Fission-AI/OpenSpec/pull/952) [`cce787e`](https://github.com/Fission-AI/OpenSpec/commit/cce787ec4083da2b27781f6786f5ce0002909a7b) Thanks [@TabishB](https://github.com/TabishB)! - ### New Features

  - **Junie support** — Added tool and command generation for JetBrains Junie
  - **Lingma IDE support** — Added configuration support for Lingma IDE
  - **ForgeCode support** — Added tool support for ForgeCode
  - **IBM Bob support** — Added support for IBM Bob coding assistant

  ### Bug Fixes

  - **Shell completions opt-in** — Completion install is now opt-in, fixing PowerShell encoding corruption
  - **Copilot auto-detection** — Prevented false GitHub Copilot detection from a bare `.github/` directory
  - **pi.dev command generation** — Fixed command reference transforms and template argument passing

### Patch Changes

- [#760](https://github.com/Fission-AI/OpenSpec/pull/760) [`61eb999`](https://github.com/Fission-AI/OpenSpec/commit/61eb999f7c6c0fc98d2e7f3678756fce6a3f4378) Thanks [@fsilvaortiz](https://github.com/fsilvaortiz)! - fix: OpenCode adapter now uses `.opencode/commands/` (plural) to match OpenCode's official directory convention. Fixes #748.

- [#759](https://github.com/Fission-AI/OpenSpec/pull/759) [`afdca0d`](https://github.com/Fission-AI/OpenSpec/commit/afdca0d5dab1aa109cfd8848b2512333ccad60c3) Thanks [@fsilvaortiz](https://github.com/fsilvaortiz)! - fix: `openspec status` now exits gracefully when no changes exist instead of throwing a fatal error. Fixes #714.

## 1.2.0

### Minor Changes

- [#747](https://github.com/Fission-AI/OpenSpec/pull/747) [`1e94443`](https://github.com/Fission-AI/OpenSpec/commit/1e94443a3551b228eecbc89e95d96d3b9600a192) Thanks [@TabishB](https://github.com/TabishB)! - ### New Features

  - **Profile system** — Choose between `core` (4 essential workflows) and `custom` (pick any subset) profiles to control which skills get installed. Manage profiles with the new `openspec config profile` command
  - **Propose workflow** — New one-step workflow creates a complete change proposal with design, specs, and tasks from a single request — no need to run `new` then `ff` separately
  - **AI tool auto-detection** — `openspec init` now scans your project for existing tool directories (`.claude/`, `.cursor/`, etc.) and pre-selects detected tools
  - **Pi (pi.dev) support** — Pi coding agent is now a supported tool with prompt and skill generation
  - **Kiro support** — AWS Kiro IDE is now a supported tool with prompt and skill generation
  - **Sync prunes deselected workflows** — `openspec update` now removes command files and skill directories for workflows you've deselected, keeping your project clean
  - **Config drift warning** — `openspec config list` warns when global config is out of sync with the current project

  ### Bug Fixes

  - Fixed onboard preflight giving a false "not initialized" error on freshly initialized projects
  - Fixed archive workflow stopping mid-way when syncing — it now properly resumes after sync completes
  - Added Windows PowerShell alternatives for onboard shell commands

## 1.1.1

### Patch Changes

- [#627](https://github.com/Fission-AI/OpenSpec/pull/627) [`afb73cf`](https://github.com/Fission-AI/OpenSpec/commit/afb73cf9ec59c6f8b26d0c538c0218c203ba3c56) Thanks [@TabishB](https://github.com/TabishB)! - ### Bug Fixes

  - **OpenCode command references** — Command references in generated files now use the correct `/opsx-` hyphen format instead of `/opsx:` colon format, ensuring commands work properly in OpenCode

## 1.1.0

### Minor Changes

- [#625](https://github.com/Fission-AI/OpenSpec/pull/625) [`53081fb`](https://github.com/Fission-AI/OpenSpec/commit/53081fb2a26ec66d2950ae0474b9a56cbc5b5a76) Thanks [@TabishB](https://github.com/TabishB)! - ### Bug Fixes

  - **Codex global path support** — Codex adapter now resolves global paths correctly, fixing workflow file generation when run outside the project directory (#622)
  - **Archive operations on cross-device or restricted paths** — Archive now falls back to copy+remove when rename fails with EPERM or EXDEV errors, fixing failures on networked/external drives (#605)
  - **Slash command hints in workflow messages** — Workflow completion messages now display helpful slash command hints for next steps (#603)
  - **Windsurf workflow file path** — Updated Windsurf adapter to use the correct `workflows` directory instead of the legacy `commands` path (#610)

### Patch Changes

- [#550](https://github.com/Fission-AI/OpenSpec/pull/550) [`86d2e04`](https://github.com/Fission-AI/OpenSpec/commit/86d2e04cae76a999dbd1b4571f52fa720036be0c) Thanks [@jerome-benoit](https://github.com/jerome-benoit)! - ### Improvements

  - **Nix flake maintenance** — Version now read dynamically from package.json, reducing manual sync issues
  - **Nix build optimization** — Source filtering excludes node_modules and artifacts, improving build times
  - **update-flake.sh script** — Detects when hash is already correct, skipping unnecessary rebuilds

  ### Other

  - Updated Nix CI actions to latest versions (nix-installer v21, magic-nix-cache v13)

## 1.0.2

### Patch Changes

- [#596](https://github.com/Fission-AI/OpenSpec/pull/596) [`e91568d`](https://github.com/Fission-AI/OpenSpec/commit/e91568deb948073f3e9d9bb2d2ab5bf8080d6cf4) Thanks [@TabishB](https://github.com/TabishB)! - ### Bug Fixes

  - Clarified spec naming convention — Specs should be named after capabilities (`specs/<capability>/spec.md`), not changes
  - Fixed task checkbox format guidance — Tasks now clearly require `- [ ]` checkbox format for apply phase tracking

## 1.0.1

### Patch Changes

- [#587](https://github.com/Fission-AI/OpenSpec/pull/587) [`943e0d4`](https://github.com/Fission-AI/OpenSpec/commit/943e0d41026d034de66b9442d1276c01b293eb2b) Thanks [@TabishB](https://github.com/TabishB)! - ### Bug Fixes

  - Fixed incorrect archive path in onboarding documentation — the template now shows the correct path `openspec/changes/archive/YYYY-MM-DD-<name>/` instead of the incorrect `openspec/archive/YYYY-MM-DD--<name>/`

## 1.0.0

### Major Changes

- [#578](https://github.com/Fission-AI/OpenSpec/pull/578) [`0cc9d90`](https://github.com/Fission-AI/OpenSpec/commit/0cc9d9025af367faa1688a7b2606a2549053cd3f) Thanks [@TabishB](https://github.com/TabishB)! - ## OpenSpec 1.0 — The OPSX Release

  The workflow has been rebuilt from the ground up. OPSX replaces the old phase-locked `/openspec:*` commands with an action-based system where AI understands what artifacts exist, what's ready to create, and what each action unlocks.

  ### Breaking Changes

  - **Old commands removed** — `/openspec:proposal`, `/openspec:apply`, and `/openspec:archive` no longer exist
  - **Config files removed** — Tool-specific instruction files (`CLAUDE.md`, `.cursorrules`, `AGENTS.md`, `project.md`) are no longer generated
  - **Migration** — Run `openspec init` to upgrade. Legacy artifacts are detected and cleaned up with confirmation.

  ### From Static Prompts to Dynamic Instructions

  **Before:** AI received the same static instructions every time, regardless of project state.

  **Now:** Instructions are dynamically assembled from three layers:

  1. **Context** — Project background from `config.yaml` (tech stack, conventions)
  2. **Rules** — Artifact-specific constraints (e.g., "propose spike tasks for unknowns")
  3. **Template** — The actual structure for the output file

  AI queries the CLI for real-time state: which artifacts exist, what's ready to create, what dependencies are satisfied, and what each action unlocks.

  ### From Phase-Locked to Action-Based

  **Before:** Linear workflow — proposal → apply → archive. Couldn't easily go back or iterate.

  **Now:** Flexible actions on a change. Edit any artifact anytime. The artifact graph tracks state automatically.

  | Command              | What it does                                         |
  | -------------------- | ---------------------------------------------------- |
  | `/opsx:explore`      | Think through ideas before committing to a change    |
  | `/opsx:new`          | Start a new change                                   |
  | `/opsx:continue`     | Create one artifact at a time (step-through)         |
  | `/opsx:ff`           | Create all planning artifacts at once (fast-forward) |
  | `/opsx:apply`        | Implement tasks                                      |
  | `/opsx:verify`       | Validate implementation matches artifacts            |
  | `/opsx:sync`         | Sync delta specs to main specs                       |
  | `/opsx:archive`      | Archive completed change                             |
  | `/opsx:bulk-archive` | Archive multiple changes with conflict detection     |
  | `/opsx:onboard`      | Guided 15-minute walkthrough of complete workflow    |

  ### From Text Merging to Semantic Spec Syncing

  **Before:** Spec updates required manual merging or wholesale file replacement.

  **Now:** Delta specs use semantic markers that AI understands:

  - `## ADDED Requirements` — New requirements to add
  - `## MODIFIED Requirements` — Partial updates (add scenario without copying existing ones)
  - `## REMOVED Requirements` — Delete with reason and migration notes
  - `## RENAMED Requirements` — Rename preserving content

  Archive parses these at the requirement level, not brittle header matching.

  ### From Scattered Files to Agent Skills

  **Before:** 8+ config files at project root + slash commands scattered across 21 tool-specific locations with different formats.

  **Now:** Single `.claude/skills/` directory with YAML-fronted markdown files. Auto-detected by Claude Code, Cursor, Windsurf. Cross-editor compatible.

  ### New Features

  - **Onboarding skill** — `/opsx:onboard` walks new users through their first complete change with codebase-aware task suggestions and step-by-step narration (11 phases, ~15 minutes)

  - **21 AI tools supported** — Claude Code, Cursor, Windsurf, Continue, Gemini CLI, GitHub Copilot, Amazon Q, Cline, RooCode, Kilo Code, Auggie, CodeBuddy, Qoder, Qwen, CoStrict, Crush, Factory, OpenCode, Antigravity, iFlow, and Codex

  - **Interactive setup** — `openspec init` shows animated welcome screen and searchable multi-select for choosing tools. Pre-selects already-configured tools for easy refresh.

  - **Customizable schemas** — Define custom artifact workflows in `openspec/schemas/` without touching package code. Teams can share workflows via version control.

  ### Bug Fixes

  - Fixed Claude Code YAML parsing failure when command names contained colons
  - Fixed task file parsing to handle trailing whitespace on checkbox lines
  - Fixed JSON instruction output to separate context/rules from template — AI was copying constraint blocks into artifact files

  ### Documentation

  - New getting-started guide, CLI reference, concepts documentation
  - Removed misleading "edit mid-flight and continue" claims that weren't implemented
  - Added migration guide for upgrading from pre-OPSX versions

## 0.23.0

### Minor Changes

- [#540](https://github.com/Fission-AI/OpenSpec/pull/540) [`c4cfdc7`](https://github.com/Fission-AI/OpenSpec/commit/c4cfdc7c499daef30d8a218f5f59b8d9e5adb754) Thanks [@TabishB](https://github.com/TabishB)! - ### New Features

  - **Bulk archive skill** — Archive multiple completed changes in a single operation with `/opsx:bulk-archive`. Includes batch validation, spec conflict detection, and consolidated confirmation

  ### Other

  - **Simplified setup** — Config creation now uses sensible defaults with helpful comments instead of interactive prompts

## 0.22.0

### Minor Changes

- [#530](https://github.com/Fission-AI/OpenSpec/pull/530) [`33466b1`](https://github.com/Fission-AI/OpenSpec/commit/33466b1e2a6798bdd6d0e19149173585b0612e6f) Thanks [@TabishB](https://github.com/TabishB)! - Add project-level configuration, project-local schemas, and schema management commands

  **New Features**

  - **Project-level configuration** — Configure OpenSpec behavior per-project via `openspec/config.yaml`, including custom rules injection, context files, and schema resolution settings
  - **Project-local schemas** — Define custom artifact schemas within your project's `openspec/schemas/` directory for project-specific workflows
  - **Schema management commands** — New `openspec schema` commands (`list`, `show`, `export`, `validate`) for inspecting and managing artifact schemas (experimental)

  **Bug Fixes**

  - Fixed config loading to handle null `rules` field in project configuration

## 0.21.0

### Minor Changes

- [#516](https://github.com/Fission-AI/OpenSpec/pull/516) [`b5a8847`](https://github.com/Fission-AI/OpenSpec/commit/b5a884748be6156a7bb140b4941cfec4f20a9fc8) Thanks [@TabishB](https://github.com/TabishB)! - Add feedback command and Nix flake support

  **New Features**

  - **Feedback command** — Submit feedback directly from the CLI with `openspec feedback`, which creates GitHub Issues with automatic metadata inclusion and graceful fallback for manual submission
  - **Nix flake support** — Install and develop openspec using Nix with the new `flake.nix`, including automated flake maintenance and CI validation

  **Bug Fixes**

  - **Explore mode guardrails** — Explore mode now explicitly prevents implementation, keeping the focus on thinking and discovery while still allowing artifact creation

  **Other**

  - Improved change inference in `opsx apply` — automatically detects the target change from conversation context or prompts when ambiguous
  - Streamlined archive sync assessment with clearer delta spec location guidance

## 0.20.0

### Minor Changes

- [#502](https://github.com/Fission-AI/OpenSpec/pull/502) [`9db74aa`](https://github.com/Fission-AI/OpenSpec/commit/9db74aa5ac6547efadaed795217cfa17444f2004) Thanks [@TabishB](https://github.com/TabishB)! - Add `/opsx:verify` command and fix vitest process storms

  **New Features**

  - **`/opsx:verify` command** — Validate that change implementations match their specifications

  **Bug Fixes**

  - Fixed vitest process storms by capping worker parallelism
  - Fixed agent workflows to use non-interactive mode for validation commands
  - Fixed PowerShell completions generator to remove trailing commas

## 0.19.0

### Minor Changes

- eb152eb: Add Continue IDE support, shell completions, and `/opsx:explore` command

  **New Features**

  - **Continue IDE support** – OpenSpec now generates slash commands for [Continue](https://continue.dev/), expanding editor integration options alongside Cursor, Windsurf, Claude Code, and others
  - **Shell completions for Bash, Fish, and PowerShell** – Run `openspec completion install` to set up tab completion in your preferred shell
  - **`/opsx:explore` command** – A new thinking partner mode for exploring ideas and investigating problems before committing to changes
  - **Codebuddy slash command improvements** – Updated frontmatter format for better compatibility

  **Bug Fixes**

  - Shell completions now correctly offer parent-level flags (like `--help`) when a command has subcommands
  - Fixed Windows compatibility issues in tests

  **Other**

  - Added optional anonymous usage statistics to help understand how OpenSpec is used. This is **opt-out** by default – set `OPENSPEC_TELEMETRY=0` or `DO_NOT_TRACK=1` to disable. Only command names and version are collected; no arguments, file paths, or content. Automatically disabled in CI environments.

## 0.18.0

### Minor Changes

- 8dfd824: Add OPSX experimental workflow commands and enhanced artifact system

  **New Commands:**

  - `/opsx:ff` - Fast-forward through artifact creation, generating all needed artifacts in one go
  - `/opsx:sync` - Sync delta specs from a change to main specs
  - `/opsx:archive` - Archive completed changes with smart sync check

  **Artifact Workflow Enhancements:**

  - Schema-aware apply instructions with inline guidance and XML output
  - Agent schema selection for experimental artifact workflow
  - Per-change schema metadata via `.openspec.yaml` files
  - Agent Skills for experimental artifact workflow
  - Instruction loader for template loading and change context
  - Restructured schemas as directories with templates

  **Improvements:**

  - Enhanced list command with last modified timestamps and sorting
  - Change creation utilities for better workflow support

  **Fixes:**

  - Normalize paths for cross-platform glob compatibility
  - Allow REMOVED requirements when creating new spec files

## 0.17.2

### Patch Changes

- 455c65f: Fix `--no-interactive` flag in validate command to properly disable spinner, preventing hangs in pre-commit hooks and CI environments

## 0.17.1

### Patch Changes

- a2757e7: Fix pre-commit hook hang issue in config command by using dynamic import for @inquirer/prompts

  The config command was causing pre-commit hooks to hang indefinitely due to stdin event listeners being registered at module load time. This fix converts the static import to a dynamic import that only loads inquirer when the `config reset` command is actually used interactively.

  Also adds ESLint with a rule to prevent static @inquirer imports, avoiding future regressions.

## 0.17.0

### Minor Changes

- 2e71835: Add `openspec config` command and Oh-my-zsh completions

  **New Features**

  - Add `openspec config` command for managing global configuration settings
  - Implement global config directory with XDG Base Directory specification support
  - Add Oh-my-zsh shell completions support for enhanced CLI experience

  **Bug Fixes**

  - Fix hang in pre-commit hooks by using dynamic imports
  - Respect XDG_CONFIG_HOME environment variable on all platforms
  - Resolve Windows compatibility issues in zsh-installer tests
  - Align cli-completion spec with implementation
  - Remove hardcoded agent field from slash commands

  **Documentation**

  - Alphabetize AI tools list in README and make it collapsible

## 0.16.0

### Minor Changes

- c08fbc1: Add new AI tool integrations and enhancements:

  - **feat(iflow-cli)**: Add iFlow-cli integration with slash command support and documentation
  - **feat(init)**: Add IDE restart instruction after init to inform users about slash command availability
    **feat(antigravity)**: Add Antigravity slash command support
  - **fix**: Generate TOML commands for Qwen Code (fixes #293)
  - Clarify scaffold proposal documentation and enhance proposal guidelines
  - Update proposal guidelines to emphasize design-first approach before implementation

## Unreleased

### Minor Changes

- Add Continue slash command support so `openspec init` can generate `.continue/prompts/openspec-*.prompt` files with MARKDOWN frontmatter and `$ARGUMENTS` placeholder, and refresh them on `openspec update`.

- Add Antigravity slash command support so `openspec init` can generate `.agent/workflows/openspec-*.md` files with description-only frontmatter and `openspec update` refreshes existing workflows alongside Windsurf.

## 0.15.0

### Minor Changes

- 4758c5c: Add support for new AI tools with native slash command integration

  - **Gemini CLI**: Add native TOML-based slash command support for Gemini CLI with `.gemini/commands/openspec/` integration
  - **RooCode**: Add RooCode integration with configurator, slash commands, and templates
  - **Cline**: Fix Cline to use workflows instead of rules for slash commands (`.clinerules/workflows/` paths)
  - **Documentation**: Update documentation to reflect new integrations and workflow changes

## 0.14.0

### Minor Changes

- 8386b91: Add support for new AI assistants and configuration improvements

  - feat: add Qwen Code support with slash command integration
  - feat: add $ARGUMENTS support to apply slash command for dynamic variable passing
  - feat: add Qoder CLI support to configuration and documentation
  - feat: add CoStrict AI assistant support
  - fix: recreate missing openspec template files in extend mode
  - fix: prevent false 'already configured' detection for tools
  - fix: use change-id as fallback title instead of "Untitled Change"
  - docs: add guidance for populating project-level context
  - docs: add Crush to supported AI tools in README

## 0.13.0

### Minor Changes

- 668a125: Add support for multiple AI assistants and improve validation

  This release adds support for several new AI coding assistants:

  - CodeBuddy Code - AI-powered coding assistant
  - CodeRabbit - AI code review assistant
  - Cline - Claude-powered CLI assistant
  - Crush AI - AI assistant platform
  - Auggie (Augment CLI) - Code augmentation tool

  New features:

  - Archive slash command now supports arguments for more flexible workflows

  Bug fixes:

  - Delta spec validation now handles case-insensitive headers and properly detects empty sections
  - Archive validation now correctly honors --no-validate flag and ignores metadata

  Documentation improvements:

  - Added VS Code dev container configuration for easier development setup
  - Updated AGENTS.md with explicit change-id notation
  - Enhanced slash commands documentation with restart notes

## 0.12.0

### Minor Changes

- 082abb4: Add factory function support for slash commands and non-interactive init options

  This release includes two new features:

  - **Factory function support for slash commands**: Slash commands can now be defined as functions that return command objects, enabling dynamic command configuration
  - **Non-interactive init options**: Added `--tools`, `--all-tools`, and `--skip-tools` CLI flags to `openspec init` for automated initialization in CI/CD pipelines while maintaining backward compatibility with interactive mode

## 0.11.0

### Minor Changes

- 312e1d6: Add Amazon Q Developer CLI integration. OpenSpec now supports Amazon Q Developer with automatic prompt generation in `.amazonq/prompts/` directory, allowing you to use OpenSpec slash commands with Amazon Q's @-syntax.

## 0.10.0

### Minor Changes

- d7e0ce8: Improve init wizard Enter key behavior to allow proceeding through prompts more naturally

## 0.9.2

### Patch Changes

- 2ae0484: Fix cross-platform path handling issues. This release includes fixes for joinPath behavior and slash command path resolution to ensure OpenSpec works correctly across all platforms.

## 0.9.1

### Patch Changes

- 8210970: Fix OpenSpec not working on Windows when Codex integration is selected. This release includes fixes for cross-platform path handling and normalization to ensure OpenSpec works correctly on Windows systems.

## 0.9.0

### Minor Changes

- efbbf3b: Add support for Codex and GitHub Copilot slash commands with YAML frontmatter and $ARGUMENTS

## Unreleased

### Minor Changes

- Add GitHub Copilot slash command support. OpenSpec now writes prompts to `.github/prompts/openspec-{proposal,apply,archive}.prompt.md` with YAML frontmatter and `$ARGUMENTS` placeholder, and refreshes them on `openspec update`.

## 0.8.1

### Patch Changes

- d070d08: Fix CLI version mismatch and add a release guard that validates the packed tarball prints the same version as package.json via `openspec --version`.

## 0.8.0

### Minor Changes

- c29b06d: Add Windsurf support.
- Add Codex slash command support. OpenSpec now writes prompts directly to Codex's global directory (`~/.codex/prompts` or `$CODEX_HOME/prompts`) and refreshes them on `openspec update`.

## 0.7.0

### Minor Changes

- Add native Kilo Code workflow integration so `openspec init` and `openspec update` manage `.kilocode/workflows/openspec-*.md` files.
- Always scaffold the managed root `AGENTS.md` hand-off stub and regroup the AI tool prompts during init/update to keep instructions consistent.

## 0.6.0

### Minor Changes

- Slim the generated root agent instructions down to a managed hand-off stub and update the init/update flows to refresh it safely.

## 0.5.0

### Minor Changes

- feat: implement Phase 1 E2E testing with cross-platform CI matrix

  - Add shared runCLI helper in test/helpers/run-cli.ts for spawn testing
  - Create test/cli-e2e/basic.test.ts covering help, version, validate flows
  - Migrate existing CLI exec tests to use runCLI helper
  - Extend CI matrix to bash (Linux/macOS) and pwsh (Windows)
  - Split PR and main workflows for optimized feedback

### Patch Changes

- Make apply instructions more specific

  Improve agent templates and slash command templates with more specific and actionable apply instructions.

- docs: improve documentation and cleanup

  - Document non-interactive flag for archive command
  - Replace discord badge in README
  - Archive completed changes for better organization

## 0.4.0

### Minor Changes

- Add OpenSpec change proposals for CLI improvements and enhanced user experience
- Add Opencode slash commands support for AI-driven development workflows

### Patch Changes

- Add documentation improvements including --yes flag for archive command template and Discord badge
- Fix normalize line endings in markdown parser to handle CRLF files properly

## 0.3.0

### Minor Changes

- Enhance `openspec init` with extend mode, multi-tool selection, and an interactive `AGENTS.md` configurator.

## 0.2.0

### Minor Changes

- ce5cead: - Add an `openspec view` dashboard that rolls up spec counts and change progress at a glance
  - Generate and update AI slash commands alongside the renamed `openspec/AGENTS.md` instructions file
  - Remove the deprecated `openspec diff` command and direct users to `openspec show`

## 0.1.0

### Minor Changes

- 24b4866: Initial release
