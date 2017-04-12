echo ==== Running tests ====
echo node= && node -v
echo npm= && npm -v
echo ====
npm run test && npm run test-jenkins
