echo ==== Running tests ====
echo node= && node -v
echo npm= && npm -v
echo ====
mocha
npm run jenkins-test
