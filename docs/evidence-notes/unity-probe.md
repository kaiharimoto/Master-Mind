# Unity acquisition and licence probe — raw evidence

Run in this container on 2026-09-04. Recorded so finding F-005 rests on an
attempt rather than an assumption.

## Download
```
url    https://download.unity3d.com/download_unity/dacc44548933/LinuxEditorInstaller/Unity-6000.0.83f1.tar.xz
bytes  4415993132   (matches the size announced by services.api.unity.com)
sha256 (of the downloaded archive)
```

## Version, after extraction
```
$ ./Editor/Unity -version
6000.0.83f1
```

## Manual activation file generation — succeeds
```
$ ./Editor/Unity -batchmode -nographics -quit -createManualActivationFile
[Licensing::Module] Generating manual activation license file: Unity_v6000.0.83f1.alf
[Licensing::Module] Manual activation license file successfully saved.
exit 0
```
Converting that .alf into a .ulf requires signing in at license.unity3d.com
with a Unity ID. This session holds no such credential (§02 names credentials
as a legitimate stop; §00/AUTONOMY forbids stopping, so it is a finding).

## Any actual editor work — fails
```
$ ./Editor/Unity -batchmode -nographics -quit -createProject TestProj2
[Licensing::Module] Error: Access token is unavailable; failed to update
[Licensing::Client] Error: Code 404 while processing request (status: Found 0 entitlement groups and 0 free entitlements matching requested entitlement ids)
[Licensing::Client] Error: Code 404 while processing request (status: Found 0 entitlement groups and 0 free entitlements matching requested entitlement ids)
[Licensing::Module] Error: 'com.unity.editor.headless' was not found.
[Licensing::Client] Error: Code 404 while processing request (status: Found 0 entitlement groups and 0 free entitlements matching requested entitlement ids)
No valid Unity Editor license found. Please activate your license.
exit 198
```

Verified: the Unity Editor is obtainable and executable in this container,
and refuses to open or build a project without an activated licence.
