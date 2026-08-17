/**
 * Google Sheets Auto-Sync Utility for Fly Creative Solutions
 * Automatically forwards Leads, Career Applications, and Newsletter subscribers
 * to a Google Sheet via Google Apps Script Webhook.
 */

export type SheetSyncType = "INQUIRY" | "CAREER" | "NEWSLETTER";

export async function syncToGoogleSheets(type: SheetSyncType, payload: Record<string, any>) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycby12kMTOmeEkcnq7Noc866mVEcmUsIpoGQYMAj5ObhDukRfBVB4MIxMabrS6ajMyR90/exec";

  if (!webhookUrl) {
    console.log(`ℹ️ [GOOGLE SHEETS SYNC - ${type}]: Webhook URL not configured.`);
    return { synced: false, reason: "NO_WEBHOOK_URL" };
  }

  try {
    const response = await fetch(webhookUrl, {
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
      console.log(`✅ [GOOGLE SHEETS SYNC SUCCESS - ${type}]: Synced to spreadsheet.`);
      return { synced: true };
    } else {
      console.warn(`⚠️ [GOOGLE SHEETS SYNC WARNING - ${type}]: Webhook responded with status ${response.status}`);
      return { synced: false, status: response.status };
    }
  } catch (error) {
    console.error(`❌ [GOOGLE SHEETS SYNC ERROR - ${type}]:`, error);
    return { synced: false, error };
  }
}
