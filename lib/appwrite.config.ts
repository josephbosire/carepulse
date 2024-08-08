import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66aa8bb60031edde8697")
  .setKey(
    "95ba060e7d59e1ffde67b5aa909edd4da0342da1d645159b98e481ecb55d5cc7f090530873fcd15cbb114506c85af64dca16cf988897a77e28909f25698364233bcaa3a7aee881a9789043846ef3f908d3926bb992736f8ea0d9b368b2779bb05d0d1432ee8860b82d1e59bbc6962236c6be6af2adf5904ca2226a270517fa93",
  );

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
