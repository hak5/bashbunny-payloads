## Requirements

Before using this Bash Bunny payload, please ensure you meet the following requirements:

- **Bash Bunny device**: This payload is designed to run on the Bash Bunny hardware platform. Make sure you have a Bash Bunny device available.
- **Installation of essential `adb` packages**: In order to enable `adb` functionality on the Bash Bunny, you need to install the following packages:
  - `android-liblog`
  - `android-libbase`
  - `android-libcutils`
  - `android-libadb`
  - `adb`

### Installing Essential `adb` Packages

To install the required `adb` packages on your Bash Bunny, follow these steps:

1. Connect your Bash Bunny to a computer.
2. Open a terminal window and navigate to the Bash Bunny storage directory.
3. Execute the following commands to download and install the essential `adb` packages:

```bash
wget --no-check-certificate https://archive.debian.org/debian/pool/main/a/android-platform-system-core/android-liblog_7.0.0+r33-1_armhf.deb
dpkg -i android-liblog_7.0.0+r33-1_armhf.deb

wget --no-check-certificate https://archive.debian.org/debian/pool/main/a/android-platform-system-core/android-libbase_7.0.0+r33-1_armhf.deb
dpkg -i android-libbase_7.0.0+r33-1_armhf.deb

wget --no-check-certificate https://archive.debian.org/debian/pool/main/a/android-platform-system-core/android-libcutils_7.0.0+r33-1_armhf.deb
dpkg -i android-libcutils_7.0.0+r33-1_armhf.deb

wget --no-check-certificate https://archive.debian.org/debian/pool/main/a/android-platform-system-core/android-libadb_7.0.0+r33-1_armhf.deb
dpkg -i android-libadb_7.0.0+r33-1_armhf.deb

wget --no-check-certificate https://archive.debian.org/debian/pool/main/a/android-platform-system-core/adb_7.0.0+r33-1_armhf.deb
dpkg -i adb_7.0.0+r33-1_armhf.deb
