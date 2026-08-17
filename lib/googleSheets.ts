/**
 * Fly Creative Solutions - Google Sheets Master CRM Sync Engine
 * Real-time non-blocking synchronization to Google Sheets
 */

export type SheetSyncType = "INQUIRY" | "CAREER" | "NEWSLETTER";

const GOOGLE_SHEETS_CRM_URL = "https://script.google.com/macros/s/AKfycbwvVK4EI877-3aZmjZCXbdvBr2aP3JQWGJKb8D8bNcE9nUCIOFE1DHrn71j5jD8ZEWepg/exec";

export async function syncToGoogleSheets(type: SheetSyncType, payload: Record<string, any>) {
  try {
    const response = await fetch(GOOGLE_SHEETS_CRM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({
        type,
        data: payload,
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      }),
      redirect: "follow"
    });

    if (response.ok) {
      console.log(`✅ [CRM SYNC SUCCESS - ${type}]: Recorded in Google Sheet.`);
      return { synced: true };
    } else {
      console.warn(`⚠️ [CRM SYNC WARNING - ${type}]: Status ${response.status}`);
      return { synced: false, status: response.status };
    }
  } catch (error) {
    console.error(`❌ [CRM SYNC ERROR - ${type}]:`, error);
    return { synced: false, error };
  }
}
