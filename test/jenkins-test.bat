echo ==== Running tests ====
echo node= && node -v
echo npm= && npm -v
echo JUNIT_REPORT_PATH= && %JUNIT_REPORT_PATH%
echo ====
mocha
npm run test-jenkins
