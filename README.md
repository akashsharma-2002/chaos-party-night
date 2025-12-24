# Chaos Party Night

Chaos Party Night is a fast, loud party game app built as a local-only experience (no backend, no accounts). It runs on iOS and Android via Capacitor, and uses AdMob interstitials only on the post-game screen.

## Highlights
- One-phone party game flow
- Local-only data (player names + settings)
- AdMob interstitials only on the post-game screen (90s cooldown)
- Consent flow (UMP + iOS ATT)

## Run (Web)
```bash
python3 -m http.server 8000
```
Open http://localhost:8000

## Run (Android / iOS)
After changing `index.html`, sync web assets and native projects:
```bash
npm run sync-web
npx cap sync
```

Open native projects:
```bash
npx cap open android
npx cap open ios
```

## Privacy Policy
https://akashsharma-2002.github.io/chaos-party-night/privacy-policy.html

## Ads
AdMob is enabled with interstitials shown only on the post-game screen. Replace the test AdMob IDs in:
- `index.html`
- `android/app/src/main/res/values/strings.xml`
- `ios/App/App/Info.plist`

## License
MIT
