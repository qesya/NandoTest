package com.nandotest;

import android.content.pm.PackageManager;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class GetAppInfoModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    private static final String APP_VERSION = "appVersion";

    public GetAppInfoModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "GetAppInfo";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        final PackageManager packageManager = this.reactContext.getPackageManager();
        final String packageName = this.reactContext.getPackageName();
        try {
            constants.put(APP_VERSION, packageManager.getPackageInfo(packageName, 0).versionName);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        return constants;
    }
}
