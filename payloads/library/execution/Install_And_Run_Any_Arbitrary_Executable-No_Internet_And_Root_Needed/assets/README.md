# Example

Executables have been removed for security reasons

## File list

- Python code: `example.py`
- Convert to hex script: `convert_to_hex.py`
- Executable file compiled using pyinstaller: `dist/example.exe`
- Hexadecimal code output: `example.hex`
- File compiled from hex code using certutil: `example.exe`

## Procedure

- This Python code create a Windows popup.

```python
import ctypes

ctypes.windll.user32.MessageBoxW(None, "Hello Hak5!", 'Info', 0x10 | 0x1)
```

- Create the executable

```powershell
pyinstaller --onefile C:/Users/Aleff/Documents/Install_And_Run_Any_Arbitrary_Executable-No_Internet_Needed/assets/example.py
```

- Create the hex code

```python
import binascii

def convert_to_hex(filename, output_file):
    with open(filename, 'rb') as file:
        binary_data = file.read()

    hex_code = binascii.hexlify(binary_data).decode()

    with open(output_file, 'w') as output:
        output.write(hex_code)

# Esempio di utilizzo
exe_filename = './example.exe'
output_filename = './example.hex'
convert_to_hex(exe_filename, output_filename)
```

- Use the DuckyScript payload