Phishing Website Detection Browser Extension

Overview

This project is a phishing site detection system that integrates machine learning (ML) models into a browser extension to detect malicious websites. It uses:

URL-based feature analysis (XGBoost model trained on phishing datasets)

Webpage content analysis (TF-IDF vectorized text classification)

SSL certificate validation

Behavioral analysis (detecting suspicious user interactions)

Features

Machine Learning-Powered Detection – Uses trained models to classify websites as phishing or safe.Multi-Layered Security – Combines URL-based, text-based, SSL, and behavior analysis for accurate classification.Real-Time Browser Extension – Provides instant feedback to users when they visit a potentially malicious site.Customizable Thresholds – Reduces false positives with improved classification logic.Fast and Efficient – Optimized for minimal performance impact.

Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/aditi-acharya/CodeBullfrogs.git
cd your-repo

2️⃣ Install Dependencies

Make sure you have Python installed, then run:

pip install -r requirements.txt

3️⃣ Train the Model (Optional)

If needed, retrain the text-based ML model:

python ai_model/model2.py
python ai_model/model.py

4️⃣ Run the Flask Backend

python app.py

5️⃣ Load the Chrome Extension

Open Chrome and go to chrome://extensions/.

Enable Developer Mode (top right corner).

Click Load Unpacked and select the browser_extension folder.

Usage

When browsing, the extension will automatically check each visited website.

If a site is classified as phishing, a warning notification appears.

The extension also logs user interactions for behavioral analysis.
