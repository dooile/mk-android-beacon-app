package org.altbeacon.beaconreference;

import java.io.IOException;
import java.util.Collection;

import android.app.Activity;

import android.os.Bundle;
import android.os.RemoteException;
import android.util.Log;
import android.widget.EditText;

import org.altbeacon.beacon.AltBeacon;
import org.altbeacon.beacon.Beacon;
import org.altbeacon.beacon.BeaconConsumer;
import org.altbeacon.beacon.BeaconManager;
import org.altbeacon.beacon.BeaconParser;
import org.altbeacon.beacon.RangeNotifier;
import org.altbeacon.beacon.Region;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class RangingActivity extends Activity implements BeaconConsumer {
    protected static final String TAG = "RangingActivity";
    private BeaconManager beaconManager = BeaconManager.getInstanceForApplication(this);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ranging);
    }

    @Override 
    protected void onDestroy() {
        super.onDestroy();
    }

    @Override
    protected void onPause() {
        super.onPause();
        beaconManager.unbind(this);
    }

    @Override 
    protected void onResume() {
        super.onResume();
        beaconManager.bind(this);
    }
    boolean notified = false;

    @Override
    public void onBeaconServiceConnect() {
        RangeNotifier rangeNotifier = new RangeNotifier() {
           @Override
           public void didRangeBeaconsInRegion(Collection<Beacon> beacons, Region region) {
              if (beacons.size() > 0) {
                  if(!notified) {
                      notified = true;

                      new Thread(new Runnable() {
                            public void run() {
                                OkHttpClient client = new OkHttpClient();

                                Request request = new Request.Builder()
                                    .url("https://jsonplaceholder.typicode.com/photos/1")
                                    .get()
                                    .build();

                                try {
                                    Response response = client.newCall(request).execute();

                                    NotificationUtils.notifyBeaconHasBeenFound(RangingActivity.this, response.body().string());
                                } catch (IOException e) {
                                    e.printStackTrace();
                                }
                            }
                        }).start();
                  }
                  Log.d(TAG, "didRangeBeaconsInRegion called with beacon count:  "+beacons.size());
                  Beacon firstBeacon = beacons.iterator().next();

                  String message = "The first beacon " + firstBeacon.toString() + " is about " + firstBeacon.getDistance() + " meters away.";
                  Log.d(TAG, message);
                  logToDisplay(message);
              }
           }

        };
        try {
            beaconManager.startRangingBeaconsInRegion(new Region("myRangingUniqueId", null, null, null));
            beaconManager.addRangeNotifier(rangeNotifier);
            beaconManager.startRangingBeaconsInRegion(new Region("myRangingUniqueId", null, null, null));
            beaconManager.addRangeNotifier(rangeNotifier);
        } catch (RemoteException e) {   }
    }

    private void logToDisplay(final String line) {
        runOnUiThread(new Runnable() {
            public void run() {
                EditText editText = (EditText)RangingActivity.this.findViewById(R.id.rangingText);
                editText.append(line+"\n");
            }
        });
    }
}
