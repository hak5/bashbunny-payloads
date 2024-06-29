$fillres = 1920, 1080
function Get-ScreenShot
{
    [CmdletBinding()]
    param(
        [parameter(Position  = 0, Mandatory = 0, ValueFromPipelinebyPropertyName = 1)]
        [ValidateNotNullOrEmpty()]
        [string]$OutPath = "$env:USERPROFILE\Documents\ScreenShot",
 
        #screenshot_[yyyyMMdd_HHmmss_ffff].png
        [parameter(Position  = 1, Mandatory = 0, ValueFromPipelinebyPropertyName = 1)]
        [ValidateNotNullOrEmpty()]
        [string]$FileNamePattern = 'screenshot_{0}.png',
 
        [parameter(Position  = 2,Mandatory = 0, ValueFromPipeline = 1, ValueFromPipelinebyPropertyName = 1)]
        [ValidateNotNullOrEmpty()]
        [int]$RepeatTimes = 0,
 
        [parameter(Position  = 3, Mandatory = 0, ValueFromPipelinebyPropertyName = 1)]
        [ValidateNotNullOrEmpty()]
        [int]$DurationMs = 1
     )
 
     begin
     {
        $ErrorActionPreference = 'Stop'
        Add-Type -AssemblyName System.Windows.Forms
 
        if (-not (Test-Path $OutPath))
        {
            New-Item $OutPath -ItemType Directory -Force
        }
     }
 
     process
     {
        0..$RepeatTimes `
        | %{
            $fileName = $FileNamePattern -f (Get-Date).ToString('yyyyMMdd_HHmmss_ffff')
            $path = Join-Path $OutPath $fileName
            
            if ($fillres -eq "null") {$b = New-Object System.Drawing.Bitmap([System.Windows.Forms.Screen]::PrimaryScreen.Bounds.Width, [System.Windows.Forms.Screen]::PrimaryScreen.Bounds.Height)}
            else {$b = New-Object System.Drawing.Bitmap($fillres)}

            $g = [System.Drawing.Graphics]::FromImage($b)
            $g.CopyFromScreen((New-Object System.Drawing.Point(0,0)), (New-Object System.Drawing.Point(0,0)), $b.Size)
            $g.Dispose()
            $b.Save($path)
 
            if ($RepeatTimes -ne 0)
            {
                Start-Sleep -Milliseconds $DurationMs
            }
        }
    }
}