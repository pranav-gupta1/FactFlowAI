def detect_misinformation(text):
    """
    Simulates the detection of misinformation within a given text.
    Returns whether the content is flagged as misinformation and provides a reason and correction.
    """
    fake_keywords = ["microchips", "5G conspiracy", "flat earth", "government surveillance"]
    
    for keyword in fake_keywords:
        if keyword.lower() in text.lower():
            return {
                "flagged": True,
                "reason": f"The claim '{keyword}' is associated with common misinformation theories.",
                "correction": "No credible scientific evidence supports this claim."
            }
    
    return {
        "flagged": False,
        "reason": None,
        "correction": None
    }

if __name__ == "__main__":
    content = "Vaccines contain microchips to track people."
    result = detect_misinformation(content)
    if result['flagged']:
        print(f"Content flagged: {result['reason']}")
        print(f"Correction: {result['correction']}")
    else:
        print("Content is likely accurate.")