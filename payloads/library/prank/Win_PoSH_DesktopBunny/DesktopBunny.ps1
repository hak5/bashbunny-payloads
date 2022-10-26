[void] [System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms");
Add-Type -Assembly PresentationFramework
# xml of the wpf xaml code. this is the window to be shown
[xml]$xaml = @"
<Window
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    Width="200"
    Height="500"
    WindowStyle="None" 
    AllowsTransparency="True" 
    Background="Transparent" 
    Topmost="True" 
    ShowInTaskbar="False" 
    ResizeMode="NoResize">
    <Grid>
        <Viewbox xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" Stretch="Uniform" VerticalAlignment="Bottom">
            <Canvas Name="Layer_1" Width="380" Height="555" Canvas.Left="0" Canvas.Top="0" RenderTransformOrigin="0.5,0.5">
                <Canvas.RenderTransform>
                    <TransformGroup>
                        <ScaleTransform/>
                        <SkewTransform/>
                        <ScaleTransform x:Name="BunnyScale" ScaleX="1"/>
                        <TranslateTransform x:Name="BunnyTranslate" Y="100"/>
                    </TransformGroup>
                </Canvas.RenderTransform>
                <Canvas.Triggers>
                    <EventTrigger RoutedEvent="Window.Loaded">
                        <BeginStoryboard>
                            <Storyboard RepeatBehavior="Forever" AutoReverse="True" >

                                <DoubleAnimation
                                    Storyboard.TargetName="BunnyTranslate"
                                    Storyboard.TargetProperty="Y"
                                    From="100" To="-200"
                                    Duration="0:0:2"  >
                                    <DoubleAnimation.EasingFunction>
                                        <CubicEase EasingMode="EaseInOut"/>
                                    </DoubleAnimation.EasingFunction>
                                </DoubleAnimation>
                            </Storyboard>
                        </BeginStoryboard>
                    </EventTrigger>
                </Canvas.Triggers>
                <Canvas.Resources/>
                <!--Unknown tag: metadata-->
                <!--Unknown tag: sodipodi:namedview-->
                <Canvas Name="g8">
                    <Path xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Name="path2" Fill="#FFFFFFFF">
                        <Path.Data>
                            <PathGeometry Figures="M238.537 121.371c-1.011-0.572-4.782-28.592-4.771-29.741c0.385-39.871 7.374-71.639 15.939-71.639   c8.611 0 15.627 32.109 15.944 72.279c0.007 0.938-2.148 27.528-2.961 28.014" FillRule="NonZero"/>
                        </Path.Data>
                    </Path>
                    <Canvas Name="g6">
                        <Path xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Name="path4" Fill="#000000">
                            <Path.Data>
                                <PathGeometry Figures="M240.658 119.25c1.158 1.294 0.308 0.089 0.087-0.904c-0.318-1.428-0.559-2.875-0.808-4.317    c-0.667-3.859-1.229-7.736-1.784-11.612c-1.17-8.189-1.388-15.609-1.011-23.948c0.577-12.761 1.867-25.577 4.7-38.048    c0.923-4.065 2.851-15.947 7.837-17.439c3.343-1 6.91 13.536 7.354 15.238c3.151 12.088 4.317 24.707 5.07 37.14    c0.525 8.665 0.598 17.087-0.143 25.706c-0.334 3.886-0.698 7.771-1.11 11.65c-0.159 1.501-0.326 3.002-0.539 4.497    c-0.096 0.674-0.774 2.294-0.214 1.557c-2.342 3.083 2.873 6.066 5.181 3.028c1.076-1.417 0.984-4.132 1.193-5.777    c0.51-4.008 0.868-8.038 1.233-12.062c0.766-8.428 0.958-16.458 0.588-24.952c-0.565-12.978-1.883-26.025-4.613-38.737    c-1.503-7-3.453-15.514-8.611-20.848c-11.941-12.347-18.949 18.698-20.097 24.53c-2.591 13.17-3.593 26.676-4.05 40.069    c-0.258 7.551 0.653 14.52 1.732 21.984c0.543 3.756 1.118 7.509 1.782 11.246c0.359 2.021 0.546 4.641 1.98 6.242    C239 126.382 243.229 122.124 240.658 119.25L240.658 119.25z" FillRule="NonZero"/>
                            </Path.Data>
                        </Path>
                    </Canvas>
                </Canvas>
                <Canvas Name="g16">
                    <Path xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Name="path10" Fill="#FFDEA7E3">
                        <Path.Data>
                            <PathGeometry Figures="M246.363 121.371c-0.687-0.514-3.248-25.675-3.241-26.708c0.262-35.804 5.009-64.332 10.827-64.332   c5.849 0 10.615 28.834 10.83 64.906c0.005 0.843-1.459 24.72-2.011 25.156" FillRule="NonZero"/>
                        </Path.Data>
                    </Path>
                    <Canvas Name="g14">
                        <Path xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Name="path12" Fill="#000000">
                            <Path.Data>
                                <PathGeometry Figures="M248.953 119.857c0.546 0.854-0.065-0.707-0.146-1.178c-0.207-1.205-0.36-2.42-0.517-3.632    c-0.467-3.621-0.862-7.251-1.25-10.881c-0.758-7.084-0.913-13.771-0.677-20.932c0.375-11.363 1.207-22.774 3.088-33.994    c0.598-3.563 1.367-7.1 2.403-10.562c0.47-1.571 1.208-4.592 2.667-5.504c-0.851 0.532-1.436-0.578-0.69 0.436    c0.611 0.831 1.045 1.816 1.424 2.768c1.346 3.386 2.082 7.034 2.78 10.596c2.128 10.859 2.862 22.016 3.372 33.05    c0.355 7.697 0.412 15.276-0.085 22.951c-0.215 3.323-0.451 6.646-0.711 9.966c-0.11 1.401-0.232 2.801-0.366 4.2    c-0.048 0.501-0.564 2.664-0.067 1.739c-1.83 3.408 3.35 6.438 5.181 3.028c0.964-1.795 0.851-4.332 1.03-6.307    c0.381-4.203 0.657-8.417 0.934-12.627c0.661-10.044 0.318-20.039-0.297-30.089c-0.694-11.331-1.767-22.906-4.652-33.918    c-1.027-3.923-3.25-12.096-8.74-11.607c-5.747 0.512-7.494 9.084-8.582 13.468c-2.835 11.421-3.689 23.448-4.361 35.155    c-0.546 9.527-0.648 18.726 0.352 28.182c0.415 3.92 0.858 7.837 1.362 11.747c0.269 2.081 0.188 5.125 1.37 6.973    C245.848 126.134 251.043 123.128 248.953 119.857L248.953 119.857z" FillRule="NonZero"/>
                            </Path.Data>
                        </Path>
                    </Canvas>
                </Canvas>
                <Ellipse xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Canvas.Left="-1" Width="183" Canvas.Top="-153" Height="273" Name="ellipse18" Fill="#FFFFFFFF" StrokeThickness="5" Stroke="#FF000000" StrokeMiterLimit="10">
                    <Ellipse.RenderTransform>
                        <MatrixTransform Matrix="-0.9128 -0.4085 0.4085 -0.9128 185.2227 623.6099"/>
                    </Ellipse.RenderTransform>
                </Ellipse>
                <Path xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Name="path20" Fill="#FFFFFFFF" StrokeThickness="5" Stroke="#FF000000" StrokeMiterLimit="10">
                    <Path.Data>
                        <PathGeometry Figures="M326.527 169.453  c-2.807 26.521-40.552 44.27-84.306 39.639c-25.316-2.679-52.939-4.751-66.258-17.49c-9.699-9.277-9.066-27.739-7.884-38.915  c2.806-26.522 40.55-44.269 84.304-39.64C296.138 117.677 329.333 142.931 326.527 169.453z" FillRule="NonZero"/>
                    </Path.Data>
                </Path>
                <Ellipse xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Canvas.Left="22.4" Width="50.1" Canvas.Top="351.8" Height="51.7" Name="ellipse22" Fill="#FFFFFFFF" StrokeThickness="5" Stroke="#FF000000" StrokeMiterLimit="10"/>
                <Path xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Name="path24" Fill="#FFFFFFFF" StrokeThickness="5" Stroke="#FF000000" StrokeMiterLimit="10" RenderTransformOrigin="0.25,0.5" Canvas.Left="77.5" Canvas.Top="318.778" HorizontalAlignment="Center" Height="135" Stretch="Fill" VerticalAlignment="Top">
                    <Path.RenderTransform>
                        <TransformGroup>
                            <RotateTransform x:Name="FootRotateTransform" />
                        </TransformGroup>
                    </Path.RenderTransform>
                    <Path.Triggers>
                        <EventTrigger RoutedEvent="Window.Loaded">
                            <BeginStoryboard>
                                <Storyboard RepeatBehavior="Forever" AutoReverse="True" >

                                    <DoubleAnimation
                                    Storyboard.TargetName="FootRotateTransform"
                                    Storyboard.TargetProperty="Angle"
                                    From="0" To="45"
                                    Duration="0:0:2"  >
                                        <DoubleAnimation.EasingFunction>
                                            <CubicEase EasingMode="EaseInOut"/>
                                        </DoubleAnimation.EasingFunction>
                                    </DoubleAnimation>
                                </Storyboard>
                            </BeginStoryboard>
                        </EventTrigger>
                    </Path.Triggers>

                    <Path.Data>
                        <PathGeometry Figures="M218.222 383.974  c0.001 8.012-1.607 19.019 43.698 26.495c56.901 0.348 70.932 20.96 70.336 33.368c-11.268 14.292-156.122 2.734-175.526 2.734  c-33.961 0-61.493-28.025-61.493-62.598c0-34.573 27.531-62.599 61.493-62.599C190.691 321.375 218.222 349.401 218.222 383.974z" FillRule="NonZero">
                            <PathGeometry.Transform>
                                <TransformGroup>
                                    <ScaleTransform/>
                                    <SkewTransform/>
                                    <RotateTransform Angle="0"/>
                                    <TranslateTransform/>
                                </TransformGroup>
                            </PathGeometry.Transform>
                        </PathGeometry>
                    </Path.Data>
                </Path>
                <Ellipse xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Canvas.Left="242.8" Width="26.4" Canvas.Top="128.7" Height="25" Name="ellipse26" Fill="#FFFFFFFF" StrokeThickness="5" Stroke="#FF000000" StrokeMiterLimit="10"/>
                <Ellipse xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Canvas.Left="252.1" Width="12.5" Canvas.Top="138.4" Height="13.2" Name="ellipse28" Fill="#000000" StrokeThickness="5" Stroke="#FF000000" StrokeMiterLimit="10"/>
                <Path xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Name="path30" Fill="#FFDEA7E3" StrokeThickness="5" Stroke="#FF000000" StrokeMiterLimit="10">
                    <Path.Data>
                        <PathGeometry Figures="M305.693 171.171c1.66 7.306 6.931 12.535 10.5 12.922  c3.266-0.345 8.807-5.762 10.5-12.922c0-7.137-4.701-8.006-10.5-8.006C310.394 163.165 304.112 164.211 305.693 171.171z" FillRule="NonZero"/>
                    </Path.Data>
                </Path>
                <Canvas Name="g38">
                    <Path xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Name="path32" Fill="#FFFFFFFF">
                        <Path.Data>
                            <PathGeometry Figures="M183.904 130.665c-1.162-0.658-5.494-32.852-5.481-34.172c0.442-45.811 8.472-82.312 18.313-82.312   c9.894 0 17.956 36.893 18.319 83.047c0.008 1.078-2.468 31.629-3.402 32.187" FillRule="NonZero"/>
                        </Path.Data>
                    </Path>
                    <Canvas Name="g36">
                        <Path xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Name="path34" Fill="#000000">
                            <Path.Data>
                                <PathGeometry Figures="M186.025 128.543c1.214 1.28 0.236-0.101-0.018-1.249c-0.312-1.41-0.557-2.836-0.807-4.259    c-0.732-4.166-1.347-8.354-1.954-12.54c-1.069-7.375-1.873-14.197-1.677-21.652c0.374-14.249 1.515-28.533 3.936-42.586    c1.499-8.7 3.281-18.255 7.882-25.932c3.136-5.232 5.603-2.237 7.836 2.032c4.495 8.594 6.03 19.093 7.509 28.55    c3.31 21.166 3.888 42.364 1.881 63.63c-0.295 3.127-0.615 6.252-0.984 9.372c-0.122 1.033-0.263 2.063-0.432 3.09    c-0.192 1.166-0.906 1.836 0.336 0.293c-2.402 2.983 1.815 7.257 4.242 4.242c1.222-1.517 1.307-3.46 1.558-5.329    c0.521-3.878 0.905-7.773 1.279-11.668c0.61-6.369 1.49-12.848 1.424-19.255c-0.147-14.366-1.135-28.721-3.078-42.956    c-1.381-10.118-3.238-20.504-7.182-29.977c-1.858-4.462-5.017-10.854-10.623-11.148c-5.454-0.286-8.768 5.274-10.764 9.545    c-4.109 8.793-5.878 18.706-7.381 28.218c-2.182 13.81-3.123 27.807-3.49 41.771c-0.199 7.574 1.002 14.875 2.088 22.364    c0.635 4.382 1.304 8.762 2.09 13.12c0.372 2.057 0.563 4.958 2.085 6.564C184.449 135.599 188.685 131.349 186.025 128.543    L186.025 128.543z" FillRule="NonZero"/>
                            </Path.Data>
                        </Path>
                    </Canvas>
                </Canvas>
                <Canvas Name="g46">
                    <Path xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Name="path40" Fill="#FFDEA7E3">
                        <Path.Data>
                            <PathGeometry Figures="M193.643 130.665c-0.761-0.586-3.6-29.3-3.592-30.478c0.29-40.857 5.552-73.411 12.001-73.411   c6.484 0 11.766 32.904 12.004 74.067c0.006 0.961-1.617 28.209-2.229 28.707" FillRule="NonZero"/>
                        </Path.Data>
                    </Path>
                    <Canvas Name="g44">
                        <Path xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Name="path42" Fill="#000000">
                            <Path.Data>
                                <PathGeometry Figures="M196.233 129.15c0.566 0.853-0.104-0.901-0.199-1.475c-0.237-1.434-0.411-2.879-0.591-4.321    c-0.486-3.897-0.902-7.803-1.311-11.708c-0.811-7.756-1.093-15.055-0.868-22.886c0.377-13.085 1.255-26.225 3.267-39.168    c0.678-4.362 1.546-8.703 2.75-12.952c0.543-1.918 1.333-5.63 3.07-6.886c-0.75 0.542 0.587 1.647 1.181 3.083    c1.441 3.483 2.241 7.25 2.997 10.928c2.575 12.53 3.433 25.449 4.046 38.2c0.433 9.016 0.582 17.947 0.021 26.946    c-0.249 3.984-0.52 7.968-0.822 11.948c-0.128 1.687-0.27 3.373-0.427 5.057c-0.057 0.605-0.597 2.99-0.111 2.12    c-1.886 3.383 3.297 6.408 5.181 3.028c0.931-1.669 0.827-4.036 0.999-5.883c0.384-4.113 0.653-8.239 0.928-12.36    c0.568-8.516 0.72-16.808 0.45-25.359c-0.415-13.125-1.403-26.262-3.404-39.245c-1.064-6.908-2.12-15.564-6.345-21.413    c-3.017-4.176-7.423-3.532-10.265 0.381c-4.297 5.917-5.154 15.149-6.235 22.105c-3.241 20.851-4.505 42.349-2.309 63.345    c0.433 4.139 0.892 8.275 1.42 12.403c0.268 2.092 0.169 5.293 1.396 7.141C193.182 135.385 198.381 132.384 196.233 129.15    L196.233 129.15z" FillRule="NonZero"/>
                            </Path.Data>
                        </Path>
                    </Canvas>
                </Canvas>
                <Path xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Name="path48" Fill="#FFFFFFFF" StrokeThickness="5" Stroke="#FF000000" StrokeMiterLimit="10" Height="66" Canvas.Left="218.35" Stretch="Fill" Canvas.Top="261" Width="80" RenderTransformOrigin="0.1,0.2" HorizontalAlignment="Center" VerticalAlignment="Top">
                    <Path.RenderTransform>
                        <TransformGroup>
                            <RotateTransform x:Name="ArmRotateTransform" />
                        </TransformGroup>
                    </Path.RenderTransform>
                    <Path.Triggers>
                        <EventTrigger RoutedEvent="Window.Loaded">
                            <BeginStoryboard>
                                <Storyboard RepeatBehavior="Forever" AutoReverse="True" >

                                    <DoubleAnimation
                                    Storyboard.TargetName="ArmRotateTransform"
                                    Storyboard.TargetProperty="Angle"
                                    From="0" To="45"
                                    Duration="0:0:2" AutoReverse="True" RepeatBehavior="Forever" >
                                        <DoubleAnimation.EasingFunction>
                                            <CubicEase EasingMode="EaseInOut"/>
                                        </DoubleAnimation.EasingFunction>
                                    </DoubleAnimation>
                                </Storyboard>
                            </BeginStoryboard>
                        </EventTrigger>
                    </Path.Triggers>
                    <Path.Data>
                        <PathGeometry Figures="M301.488 296.48  c-5.436 12.691-14.261 21.088-42.658 8.925c-28.397-12.164-47.01-32.313-41.574-45.005s32.864-13.12 61.261-0.956  C306.915 271.608 306.924 283.789 301.488 296.48z" FillRule="NonZero"/>
                    </Path.Data>
                </Path>
            </Canvas>
        </Viewbox>
    </Grid>
</Window>
"@
# the direction the bunny is traveling in
$goingRight = $true;
$count = 0;
# get the screen
$Screen = [System.Windows.Forms.Screen]::PrimaryScreen;
# create a reader for the xml
$reader = (New-Object System.Xml.XmlNodeReader $xaml)
# create the window from the reader
$window = [Windows.Markup.XamlReader]::Load($reader)
# find the ScaleTransform for the Canvas on the window
# this is used for fliping the image
$Scale = $window.FindName("BunnyScale");
# find the TranslateTransform for the Canvas on the window
# this is used to see where the canvus is on the y axis
$Translate = $window.FindName("BunnyTranslate");

# add right click to window to close it
$handler = [Windows.Input.MouseButtonEventHandler]{ 
    $Timer.Stop();
    $window.Close(); 
    $_.Handled = $true; }
$window.Add_MouseRightButtonDown($handler);
# get task bar height
# Note: this is expecting is to be top or bottom
$taskbar = ($Screen.Bounds.Height - $Screen.WorkingArea.Height);
# set the window postion
$window.Left = $Screen.WorkingArea.Left;
$window.Top = $Screen.Bounds.Height - ($window.Height);
if ($Screen.WorkingArea.Top -eq 0)
{
    $window.Top = $window.Top - $taskbar;
}
# timer that is used to move the window
$Timer = New-Object System.Windows.Forms.Timer;
$Timer.Interval = 40;
$Timer.add_Tick(
    {
        # check y axis only move if the hight is less than 95 the animation in the wpf is from 100 to -200
        if($Translate.Y -lt 95)
        {
            if($goingRight)
            {
			    # check to see if we are going of the edge
                if(($window.Left + 1) -lt ($Screen.WorkingArea.Width - $window.Width))
                {
                    $window.Left = ($window.Left + 2)
                }
                else
                {
				    # flip image
                    $Scale.ScaleX = -1;
				    #change direction
                    $script:goingRight = !$goingRight;
                }
            }
            else
            {
			    # check to see if we are going of the edge
                if(($window.Left - 1) -gt 0)
                {
                    $window.Left = ($window.Left - 2)
                }
                else
                {                    
                    $Scale.ScaleX = 1;
                    $script:goingRight = !$goingRight;
                }
            }
        }
    }
); 
$Timer.Start();

$window.ShowDialog()
$Timer.Dispose()