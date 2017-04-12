echo ==== Running tests ====
rem TODO, checking the versions interferes w/ running the test
rem echo node= && node -v
rem echo npm= && npm -v
echo ====
npm run test
npm run test-jenkins
