import qrcode
import urllib.parse

# === Configuration ===
recipients = ["andreagiovanni.reina@uni-konstanz.de", "paolo.leopardi@uni-konstanz.de", "sindiso.mkhatshwa@uni-konstanz.de", "mohammad-nomaan.2.husain@uni-konstanz.de"]
subject = "Add me to the SCYPHY seminar list"
body = "Hello,\nI am happy to be added to the SCYPHY seminar list and receive updates on the upcoming seminars."

# === Build mailto URL ===
mailto = "mailto:" + ",".join(recipients)
params = {
    "subject": subject,
    "body": body
}
encoded_params = urllib.parse.urlencode(params)
mailto_url = f"{mailto}?{encoded_params}"
print(mailto_url)
# === Generate QR Code ===
qr = qrcode.make(mailto_url)

# === Save or show the QR code ===
qr.save("mailing_list_qr.png")
qr.show()  # optionally open it in default viewer
