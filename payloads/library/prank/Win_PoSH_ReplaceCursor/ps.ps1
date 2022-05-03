# Copies the bunny ani file to the users profile.
$p=(gwmi win32_volume -f 'label=''BashBunny''').Name+'payloads\switch1\b.ani'
$f= $Env:USERPROFILE+'\b.ani' 
if (Test-Path $p)
{
    cp $p $f
}
else
{
    cp ($p -replace "1", "2") $f
}
# Set the registory value of Arrow to the new cursor
sp 'HKCU:Control Panel\Cursors' Arrow '%USERPROFILE%\b.ani';
# Tell the system to update the displayed cursor 
(Add-Type -Name c -Pass -M '[DllImport("user32.dll")] public static extern bool SystemParametersInfo(int A,int b,int c,int d);')::SystemParametersInfo(87,0,0,3)