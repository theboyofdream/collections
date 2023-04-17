@ECHO OFF
:start
SET choice=
SET /p choice=Git pull(0) / push(1):
IF %choice%==0 GOTO pull
IF %choice%==1 GOTO push
ECHO "%choice%" is not valid
ECHO.
GOTO start
:push
git add .
SET commit_message=
SET /p commit_message=Commit Message:
IF '%commit_message%'=='' SET commit_message="automatic commit"
git commit -m %commit_message%
git push
PAUSE
EXIT
:pull
git pull
ECHO "Opening Current Directory in VsCode Editor:"
code ./
PAUSE
EXIT
