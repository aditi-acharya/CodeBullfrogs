from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier

# Example training data
urls = ["http://legit.com", "http://phishy.com"]
labels = [0, 1]  # 0 = safe, 1 = phishing

# Extract features
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(urls)

# Train a model
model = RandomForestClassifier()
model.fit(X, labels)

# Predict
def predict_phishing(url):
    features = vectorizer.transform([url])
    return model.predict(features)[0]