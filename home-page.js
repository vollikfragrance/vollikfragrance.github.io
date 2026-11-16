(() => {
  // i18n.js
  var phrases = {
    "\uAE30\uB85D\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694?": "Remove this archive entry?",
    "\uAE30\uB85D \uC0AD\uC81C": "Remove entry",
    "\uC218\uB7C9 \uC904\uC774\uAE30": "Decrease quantity",
    "\uC218\uB7C9 \uB298\uB9AC\uAE30": "Increase quantity",
    "\uC7A5\uB871\uC774 \uC5F4\uB9AC\uBA70 Moss \uC624\uBE0C\uC81C\uAC00 \uB098\uD0C0\uB098\uB294 Vollik \uC601\uC0C1": "A wardrobe opens to reveal the Moss object",
    "\uBCF8\uBB38\uC73C\uB85C \uAC74\uB108\uB6F0\uAE30": "Skip to content",
    "\uCEEC\uB809\uC158 \uBA54\uB274": "Collection menu",
    "\uCEEC\uB809\uC158 \uB610\uB294 \uC624\uBE0C\uC81C \uAC80\uC0C9": "Search collections or objects",
    "\uC7A5\uB871 \uC548\uC744 \uCC44\uC6B4 \uC774\uB07C\uC640 \uB9E4\uB2EC\uB9B0 Moss \uC624\uBE0C\uC81C": "A Moss object suspended inside a moss-lined wardrobe",
    "Moss \uD589\uC789\uC744 \uC6C0\uC9C1\uC774\uB294 Status \uCCB4\uD5D8": "Interactive Moss hanging object in Status",
    "\uC0C1\uD488 \uC774\uBBF8\uC9C0 \uD655\uB300": "Magnify product image",
    "\uCEEC\uB809\uC158 \uB458\uB7EC\uBCF4\uAE30": "Explore the shop",
    "\uB9C8\uC74C\uC5D0 \uB4DC\uB294 \uC624\uBE0C\uC81C\uB97C \uB2F4\uC544\uBCF4\uC138\uC694.": "Save your favourite objects here.",
    "\uCE74\uCE74\uC624\uB85C \uACC4\uC18D\uD558\uAE30": "Continue with Kakao",
    "Apple\uB85C \uACC4\uC18D\uD558\uAE30": "Continue with Apple",
    "\uACB0\uC81C \uD655\uC778 \uC911\u2026": "Confirming payment\u2026",
    "Status \uD654\uBA74\uC5D0\uC11C \uC624\uBE0C\uC81C\uB97C \uC7A1\uC544 \uC704\uC544\uB798, \uC88C\uC6B0\uB85C \uC6C0\uC9C1\uC5EC\uBCF4\uC138\uC694. \uB193\uC73C\uBA74 \uCCB4\uC778\uC774 \uD33D\uD33D\uD574\uC84C\uB2E4 \uB290\uC2A8\uD574\uC9C0\uBA70 \uD754\uB4E4\uB9BD\uB2C8\uB2E4.": "Drag the object in Status. Release it to see the chain tighten and sway.",
    "\uBA54\uC778 \uBA54\uB274": "Main menu",
    "Vollik \uC571 \uC124\uCE58": "Install Vollik",
    "\uCEEC\uB809\uC158": "collection",
    "\uC18C\uC7A5\uD55C \uC624\uBE0C\uC81C\uB97C \uC120\uD0DD\uD574 \uAE30\uB85D\uD558\uC138\uC694. \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.": "Choose an object to record. Saved in this browser.",
    "\uC81C\uD488 \uC790\uC138\uD788 \uBCF4\uAE30": "View product details",
    "\uC544\uCE74\uC774\uBE0C\uC5D0 \uAE30\uB85D\uD558\uAE30": "Add to Archive",
    "\uC624\uBE0C\uC81C \uC6C0\uC9C1\uC774\uAE30": "Move the object",
    "\uC0C8\uB85C\uC6B4 \uCEEC\uB809\uC158\uACFC \uACF5\uAC04\uC758 \uC774\uC57C\uAE30\uB97C \uC804\uD569\uB2C8\uB2E4.": "Discover new collections and stories of spaces.",
    "\uB274\uC2A4\uB808\uD130 \uC11C\uBE44\uC2A4\uB294 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.": "Our newsletter is coming soon.",
    "\uB274\uC2A4\uB808\uD130\uB97C \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4. \uC774\uBA54\uC77C\uC740 \uC800\uC7A5\uB418\uAC70\uB098 \uC804\uC1A1\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.": "Our newsletter is coming soon. Your email was not saved or sent.",
    "\uC624\uBE0C\uC81C, \uD5A5\uAE30, \uADF8\uB9AC\uACE0 \uACF5\uAC04.": "Objects, scent, and space.",
    "\uC8FC\uBB38 \uCCB4\uD5D8 \uBC84\uC804 \xB7 \uC2E4\uC81C \uACB0\uC81C \uBC0F \uBC30\uC1A1\uC740 \uC9C4\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Preview store \xB7 No real payments or shipments.",
    "\uC774\uB07C\uAC00 \uD758\uB7EC\uB0B4\uB9AC\uB294 \uB4EF\uD55C \uD615\uD0DC\uB97C \uB2F4\uC740 \uD589\uC789 \uC624\uBE0C\uC81C.": "A hanging object shaped like flowing moss.",
    "\uC775\uC219\uD55C \uACF5\uAC04\uC5D0 \uB0AF\uC120 \uC790\uC5F0\uC758 \uC7A5\uBA74\uC744 \uB354\uD574\uBCF4\uC138\uC694.": "Bring an unexpected scene of nature into your space.",
    "\uD615\uD0DC\uC640 \uD5A5\uAE30\uB85C \uAE30\uC5B5\uB418\uB294 Vollik\uC758 \uCCAB \uBC88\uC9F8 \uCEEC\uB809\uC158.": "The first Vollik collection, remembered in form and scent.",
    "\uACF5\uAC04\uC5D0 \uC740\uC740\uD55C \uD5A5\uAE30\uB97C \uB354\uD558\uB294 \uD589\uC789 \uC624\uBE0C\uC81C.": "A hanging object that brings a subtle scent to your space.",
    "\uD5A5\xB7\uC18C\uC7AC\xB7\uD06C\uAE30 \uBC0F \uC0C1\uC138 \uAD6C\uC131\uC740 \uCD9C\uC2DC \uC2DC \uC548\uB0B4\uB429\uB2C8\uB2E4.": "Scent, materials, dimensions and contents will be available at launch.",
    "\uC0AC\uC6A9 \uC804 \uC81C\uD488\uC5D0 \uB3D9\uBD09\uB41C \uC548\uB0B4\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694. \uC0C1\uC138 \uC0AC\uC6A9 \uC548\uB0B4\uB294 \uCD9C\uC2DC \uC2DC \uC81C\uACF5\uB429\uB2C8\uB2E4.": "Please read the instructions included with your product before use. Full care details will be available at launch.",
    "\uD604\uC7AC\uB294 \uC8FC\uBB38 \uCCB4\uD5D8 \uBC84\uC804\uC73C\uB85C \uC2E4\uC81C \uBC30\uC1A1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC815\uC2DD \uBC30\uC1A1\uBE44\uC640 \uAD50\uD658\xB7\uBC18\uD488 \uC815\uCC45\uC740 \uD310\uB9E4 \uC2DC\uC791 \uC804 \uC548\uB0B4\uB429\uB2C8\uB2E4.": "This preview does not ship products. Shipping, exchange and return policies will be published before sales begin.",
    "Vollik\uC758 \uC81C\uD488\uACFC \uC8FC\uBB38\uC5D0 \uAD00\uD55C \uBB38\uC758 \uCC44\uB110\uC744 \uC900\uBE44\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC815\uC2DD \uC624\uD508 \uC2DC \uC774\uACF3\uC5D0\uC11C \uC5F0\uB77D\uCC98\uC640 \uC6B4\uC601 \uC2DC\uAC04\uC744 \uC548\uB0B4\uD574\uB4DC\uB9BD\uB2C8\uB2E4.": "Our customer service channel is coming soon. Contact details and opening hours will be available here at launch.",
    "Vollik\uC744 \uC9C1\uC811 \uB9CC\uB0A0 \uC218 \uC788\uB294 \uACF5\uAC04\uC744 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4. \uB9E4\uC7A5\uACFC \uD31D\uC5C5 \uC18C\uC2DD\uC774 \uD655\uC815\uB418\uBA74 \uC774\uACF3\uC5D0\uC11C \uC548\uB0B4\uD574\uB4DC\uB9BD\uB2C8\uB2E4.": "Discover Vollik in person. Confirmed stores and pop-up announcements will be shared here.",
    "\uC774 \uC0AC\uC774\uD2B8\uB294 Vollik\uC758 \uB514\uC790\uC778 \uBC0F \uC0AC\uC6A9\uC790 \uD750\uB984\uC744 \uD655\uC778\uD558\uAE30 \uC704\uD55C \uD14C\uC2A4\uD2B8 \uBC84\uC804\uC785\uB2C8\uB2E4. \uD45C\uC2DC\uB41C \uC0C1\uD488 \uAC00\uACA9\uC740 \uD14C\uC2A4\uD2B8\uC6A9\uC774\uBA70 \uC2E4\uC81C \uD310\uB9E4 \uACC4\uC57D\uC774\uB098 \uACB0\uC81C\uB294 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "This is a preview of Vollik. Prices are for testing only. No purchase contract is formed and no real payment is made.",
    "\uC7A5\uBC14\uAD6C\uB2C8, \uC704\uC2DC\uB9AC\uC2A4\uD2B8, \uD14C\uC2A4\uD2B8 \uD504\uB85C\uD544\uACFC \uC8FC\uBB38 \uC815\uBCF4\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uBE44\uBC00\uBC88\uD638\uC640 \uCE74\uB4DC \uC815\uBCF4\uB294 \uC800\uC7A5\uD558\uAC70\uB098 \uC804\uC1A1\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uBC84\uD2BC\uC73C\uB85C \uC774 \uBE0C\uB77C\uC6B0\uC800\uC758 \uD14C\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uC0AD\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.": "Your bag, wishlist, demo profile and orders are saved in this browser. Passwords and card details are not saved or sent. Use the button below to delete your local test data.",
    "\uC5F0\uACB0\uD560 \uACF5\uC2DD \uC778\uC2A4\uD0C0\uADF8\uB7A8 \uC8FC\uC18C\uAC00 \uC544\uC9C1 \uB4F1\uB85D\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Our official Instagram link will be available at launch.",
    "\uC5F0\uACB0\uD560 \uACF5\uC2DD \uCE74\uCE74\uC624\uD1A1 \uCC44\uB110\uC774 \uC544\uC9C1 \uB4F1\uB85D\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Our official KakaoTalk channel will be available at launch.",
    "\uC774 \uCEEC\uB809\uC158\uC5D0 \uB4F1\uB85D\uB41C \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "This collection is coming soon.",
    "\uC81C\uD488\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.": "Product not found.",
    "\uC1FC\uD551\uBC31\uC5D0 \uCD94\uAC00\uB41C \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "Your shopping bag is empty.",
    "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0 \uCD94\uAC00\uB41C \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "Your wishlist is empty.",
    "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.": "No matching products.",
    "\uCD5C\uADFC \uBCF8 \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "No recently viewed products.",
    "\uC8FC\uBB38\uD560 \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "Your bag is empty.",
    "\uC644\uB8CC\uB41C \uD14C\uC2A4\uD2B8 \uC8FC\uBB38\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "No completed demo orders yet.",
    "\uC544\uC9C1 \uC8FC\uBB38 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "No orders yet.",
    "\uC0C1\uD488\uC744 \uB2F4\uACE0 \uD14C\uC2A4\uD2B8 \uACB0\uC81C\uB97C \uC9C4\uD589\uD574\uBCF4\uC138\uC694.": "Add an item to try the checkout.",
    "\uD14C\uC2A4\uD2B8 \uC8FC\uBB38\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.": "Demo orders are saved in this browser.",
    "\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC8FC\uBB38\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.": "This order was not found in this browser.",
    "\uD14C\uC2A4\uD2B8 \uB85C\uADF8\uC778 \uC0C1\uD0DC\uC785\uB2C8\uB2E4.": "You are signed into a demo account.",
    "\uD14C\uC2A4\uD2B8 \uB85C\uADF8\uC778 \xB7 \uC784\uC758\uC758 \uC774\uBA54\uC77C\uACFC 8\uC790 \uC774\uC0C1 \uC785\uB825": "Demo sign-in \xB7 Use a sample email and at least 8 characters.",
    "\uC678\uBD80 \uACC4\uC815\uC5D0 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC73C\uBA70 \uBE44\uBC00\uBC88\uD638\uB294 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "No external accounts are connected. Passwords are never saved.",
    "\uD14C\uC2A4\uD2B8 \uAC00\uC785 \xB7 \uC2E4\uC81C \uD68C\uC6D0 \uACC4\uC815\uC740 \uC0DD\uC131\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Demo registration \xB7 No real account is created.",
    "\uBE44\uBC00\uBC88\uD638\uB294 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Passwords are never saved.",
    "\uBAA8\uC758 \uACB0\uC81C \xB7 \uC2E4\uC81C \uCCAD\uAD6C\uC640 \uBC30\uC1A1\uC740 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Demo checkout \xB7 No actual charges or shipments.",
    "\uD14C\uC2A4\uD2B8 \uC815\uBCF4 \uC785\uB825 \uBC84\uD2BC\uC73C\uB85C \uBC30\uC1A1 \uC815\uBCF4\uB97C \uCC44\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.": "Use \u201CFill demo details\u201D to try checkout.",
    "\uD14C\uC2A4\uD2B8 \uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC2E4\uC81C \uBC30\uC1A1\uC740 \uC9C4\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Your demo payment is complete. No shipment will be made.",
    "\uC8FC\uBB38\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4": "Your order is complete",
    "\uBAA8\uC758 \uC8FC\uBB38\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uACB0\uC81C\xB7\uBC30\uC1A1 \uB0B4\uC5ED\uC774 \uC544\uB2D9\uB2C8\uB2E4.": "This is a demo order. No real payment or shipment.",
    "\uC2E4\uC81C\uB85C \uACB0\uC81C\uB418\uB098\uC694?": "Will I be charged?",
    "\uC544\uB2C8\uC694. \uBAA8\uB4E0 \uACB0\uC81C \uC218\uB2E8\uC740 \uBAA8\uC758 \uACB0\uC81C\uC774\uBA70 \uC2E4\uC81C \uCCAD\uAD6C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "No. All payment methods are simulated. You will not be charged.",
    "\uC8FC\uBB38 \uB0B4\uC5ED\uC740 \uC5B4\uB514\uC5D0 \uC800\uC7A5\uB418\uB098\uC694?": "Where are my orders saved?",
    "\uD604\uC7AC \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uB2E4\uB978 \uAE30\uAE30\uC5D0\uC11C\uB294 \uACF5\uC720\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Orders are stored in this browser and are not synced across devices.",
    "\uC624\uBE0C\uC81C\uB294 \uC5B4\uB5BB\uAC8C \uC6C0\uC9C1\uC774\uB098\uC694?": "How do I move the object?",
    "Status \uD654\uBA74\uC5D0\uC11C \uC624\uBE0C\uC81C\uB97C \uC7A1\uC544 \uC704\uC544\uB798, \uC88C\uC6B0\uB85C \uC6C0\uC9C1\uC5EC\uBCF4\uC138\uC694. \uB193\uC73C\uBA74 \uCCB4\uC778\uC774 \uD33D\uD33D\uD574\uC84C\uB2E4 \uB290\uC2A8\uD574\uC9C0\uBA70 \uD754\uB4E4\uB9BD\uB2C8\uB2E4.": "On Status, drag the object up, down or sideways. Release it to let the chains sway naturally.",
    "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0\uC11C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4.": "Removed from your wishlist.",
    "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4.": "Added to your wishlist.",
    "\uC1FC\uD551\uBC31\uC5D0 \uB2F4\uC558\uC2B5\uB2C8\uB2E4.": "Added to your bag.",
    "\uD14C\uC2A4\uD2B8 \uC624\uBE0C\uC81C\uB97C \uC544\uCE74\uC774\uBE0C\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.": "Add a demo object to your archive.",
    "\uD14C\uC2A4\uD2B8 \uBC30\uC1A1 \uC815\uBCF4\uB97C \uC785\uB825\uD588\uC2B5\uB2C8\uB2E4.": "Demo delivery details filled in.",
    "\uD604\uC7AC\uB294 \uD14C\uC2A4\uD2B8 \uB85C\uADF8\uC778\uC785\uB2C8\uB2E4. \uC784\uC758\uC758 \uC774\uBA54\uC77C\uACFC 8\uC790 \uC774\uC0C1\uC758 \uD14C\uC2A4\uD2B8 \uBE44\uBC00\uBC88\uD638\uB85C \uB85C\uADF8\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.": "This is a demo sign-in. Use a sample email and a demo password of at least 8 characters.",
    "\uD14C\uC2A4\uD2B8 \uC8FC\uBB38\uC744 \uCDE8\uC18C\uD560\uAE4C\uC694?": "Cancel this demo order?",
    "\uC8FC\uBB38 \uAE30\uB85D\uC740 \uB0A8\uACE0 \uC0C1\uD0DC\uAC00 \uCDE8\uC18C\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.": "The order will remain in your history with a cancelled status.",
    "\uD14C\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uCD08\uAE30\uD654\uD560\uAE4C\uC694?": "Reset your demo data?",
    "\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB41C \uC7A5\uBC14\uAD6C\uB2C8, \uC704\uC2DC\uB9AC\uC2A4\uD2B8, \uD14C\uC2A4\uD2B8 \uC8FC\uBB38\uACFC \uD504\uB85C\uD544\uC744 \uC0AD\uC81C\uD569\uB2C8\uB2E4.": "This removes the bag, wishlist, demo orders and profile saved in this browser.",
    "\uD14C\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uCD08\uAE30\uD654\uD588\uC2B5\uB2C8\uB2E4.": "Your demo data was reset.",
    "\uACB0\uC81C\uAC00 \uC2B9\uC778\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.": "Payment was not approved.",
    "\uACB0\uC81C \uC2E4\uD328 \uD14C\uC2A4\uD2B8\uC785\uB2C8\uB2E4. \uC7A5\uBC14\uAD6C\uB2C8\uC640 \uBC30\uC1A1 \uC815\uBCF4\uAC00 \uC720\uC9C0\uB429\uB2C8\uB2E4.": "This is a simulated failure. Your bag and delivery details are kept.",
    "\uACB0\uC81C\uB97C \uCDE8\uC18C\uD588\uC2B5\uB2C8\uB2E4. \uC785\uB825\uD55C \uC815\uBCF4\uB294 \uC720\uC9C0\uB429\uB2C8\uB2E4.": "Payment cancelled. Your details are kept.",
    "\uD14C\uC2A4\uD2B8 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD588\uC2B5\uB2C8\uB2E4.": "Signed into your demo account.",
    "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Passwords do not match.",
    "\uD14C\uC2A4\uD2B8 \uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.": "Demo registration complete.",
    "\uC5F0\uB77D\uCC98\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.": "Please check the phone number.",
    "\uC2E4\uC81C \uACB0\uC81C \uC815\uBCF4 \uC785\uB825 \uC5C6\uC774": "No real payment details are needed.",
    "\uC2B9\uC778\xB7\uC2E4\uD328\xB7\uCDE8\uC18C \uD750\uB984\uC744 \uD655\uC778\uD569\uB2C8\uB2E4.": "Try an approved, declined or cancelled payment.",
    "\uC8FC\uBB38 \uC815\uBCF4\uB97C \uD655\uC778\uD55C \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.": "Check your order details and try again.",
    "\uC800\uC7A5 \uACF5\uAC04\uC774 \uBD80\uC871\uD574 \uC774\uBC88 \uD654\uBA74\uC5D0\uC11C\uB9CC \uC720\uC9C0\uB429\uB2C8\uB2E4.": "Storage is full. Changes will only last for this session.",
    "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.": "Page not found.",
    "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694 (8\uC790 \uC774\uC0C1)": "Password (at least 8 characters)",
    "\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD558\uC138\uC694": "Re-enter your password",
    "\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694": "Your email address",
    "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694": "Your password",
    "\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694": "Your name",
    "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694": "Search products",
    "\uC5F0\uB77D\uCC98\uB97C \uC785\uB825\uD558\uC138\uC694": "Korean phone number",
    "\uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694": "Delivery address",
    "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?": "Forgot your password?",
    "\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?": "New to Vollik?",
    "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?": "Already have an account?",
    "\uC120\uD0DD\uD55C \uD328\uD0A4\uC9C0:": "Selected packaging:",
    "\uB3C4\uC6C0\uC774 \uD544\uC694\uD558\uC2E0\uAC00\uC694?": "Need help?",
    "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0\uC11C \uC0AD\uC81C": "Remove from wishlist",
    "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0 \uCD94\uAC00": "Add to wishlist",
    "\uC218\uB7C9 \uC904\uC774\uAE30": "Decrease quantity",
    "\uC218\uB7C9 \uB298\uB9AC\uAE30": "Increase quantity",
    "\uD14C\uC2A4\uD2B8 \uB370\uC774\uD130 \uCD08\uAE30\uD654": "Reset demo data",
    "\uD14C\uC2A4\uD2B8 \uACC4\uC815\uC73C\uB85C \uACC4\uC18D\uD558\uAE30": "Continue with demo account",
    "\uD14C\uC2A4\uD2B8 \uACB0\uC81C \uC2B9\uC778": "Approve demo payment",
    "\uACB0\uC81C \uC2E4\uD328 \uD14C\uC2A4\uD2B8": "Simulate decline",
    "\uD14C\uC2A4\uD2B8 \uC8FC\uBB38 \uCDE8\uC18C": "Demo order cancelled",
    "\uD14C\uC2A4\uD2B8 \uACB0\uC81C \uC644\uB8CC": "Demo payment complete",
    "\uACB0\uC81C \uD655\uC778 \uC911\u2026": "Confirming payment\u2026",
    "\uC8FC\uBB38 \uC0C1\uC138 \uBCF4\uAE30": "View order details",
    "\uC1FC\uD551 \uACC4\uC18D\uD558\uAE30": "Continue shopping",
    "\uACC4\uC18D \uB458\uB7EC\uBCF4\uAE30": "Continue browsing",
    "\uCE74\uCE74\uC624\uB85C \uACC4\uC18D\uD558\uAE30": "Continue with Kakao",
    "Apple\uB85C \uACC4\uC18D\uD558\uAE30": "Continue with Apple",
    "\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30": "Add to bag",
    "\uC1FC\uD551\uBC31 \uBCF4\uAE30": "View bag",
    "\uD328\uD0A4\uC9C0(\uC120\uD0DD)": "Packaging",
    "\uC81C\uD488 \uC138\uBD80 \uC815\uBCF4": "Product details",
    "\uCDE8\uAE09 \uC2DC \uC8FC\uC758\uC0AC\uD56D": "Product care",
    "\uBC30\uC1A1 & \uBC18\uD488 \uC815\uCC45": "Shipping & returns",
    "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68": "Privacy policy",
    "\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC57D\uAD00": "Terms of service",
    "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815": "Reset password",
    "\uBE44\uBC00\uBC88\uD638 \uD655\uC778": "Confirm password",
    "\uD14C\uC2A4\uD2B8 \uC815\uBCF4 \uC785\uB825": "Fill demo details",
    "\uB274\uC2A4\uB808\uD130 \uC774\uBA54\uC77C": "Newsletter email",
    "\uC774\uBA54\uC77C \uC785\uB825": "Email address",
    "\uCEEC\uB809\uC158 \uC0B4\uD3B4\uBCF4\uAE30": "Explore the collection",
    "\uC1FC\uD551\uBC31 \uB2EB\uAE30": "Close bag",
    "\uBA54\uB274 \uC5F4\uAE30": "Open menu",
    "\uBA54\uB274 \uB2EB\uAE30": "Close menu",
    "\uBA54\uC778 \uBA54\uB274": "Main navigation",
    "\uC5B8\uC5B4 \uC120\uD0DD": "Choose language",
    "\uC2E0\uC6A9\uCE74\uB4DC / \uCCB4\uD06C\uCE74\uB4DC": "Credit / debit card",
    "\uCE74\uCE74\uC624\uD398\uC774": "Kakao Pay",
    "\uB124\uC774\uBC84\uD398\uC774": "Naver Pay",
    "\uC560\uD50C\uD398\uC774": "Apple Pay",
    "\uAE30\uD504\uD2B8 \uC138\uD2B8": "Gift set",
    "\uC2A4\uD0E0\uB2E4\uB4DC": "Standard",
    "\uD5A5\uC218 \uC641\uC2A4\uD0C0\uBE14\uB81B": "Scented wax tablet",
    "\uD14C\uC2A4\uD2B8 \uACE0\uAC1D": "Demo customer",
    "\uD14C\uC2A4\uD2B8 \uACB0\uC81C": "Demo payment",
    "\uC804\uCCB4\uBCF4\uAE30": "View all",
    "\uBCA0\uC2A4\uD2B8\uC140\uB7EC": "Bestsellers",
    "\uC8FC\uBB38 \uD569\uACC4": "Order summary",
    "\uC0C1\uD488 \uAE08\uC561": "Subtotal",
    "\uBC30\uC1A1\uBE44": "Shipping",
    "\uD569\uACC4": "Total",
    "\uBB34\uB8CC": "Free",
    "\uB9C8\uC774\uD398\uC774\uC9C0": "My account",
    "\uC704\uC2DC\uB9AC\uC2A4\uD2B8": "Wishlist",
    "\uC7A5\uBC14\uAD6C\uB2C8": "Shopping bag",
    "\uC1FC\uD551\uBC31": "Shopping bag",
    "\uC8FC\uBB38\uD558\uAE30": "Checkout",
    "\uACB0\uC81C\uD558\uAE30": "Pay now",
    "\uACB0\uC81C \uC218\uB2E8": "Payment method",
    "\uACB0\uC81C \uC815\uBCF4": "Payment details",
    "\uBC30\uC1A1 \uC815\uBCF4": "Delivery details",
    "\uC8FC\uBB38 \uC0C1\uD488": "Your items",
    "\uC8FC\uBB38 \uC0C1\uC138": "Order details",
    "\uC8FC\uBB38 \uC644\uB8CC": "Order complete",
    "\uC8FC\uBB38 \uC870\uD68C": "Orders",
    "\uC8FC\uBB38\uBC88\uD638:": "Order number:",
    "\uC8FC\uBB38 \uCDE8\uC18C": "Cancel order",
    "\uACB0\uC81C \uCDE8\uC18C": "Cancel payment",
    "\uB274\uC2A4\uB808\uD130": "Newsletter",
    "\uAD6C\uB3C5\uD558\uAE30": "Subscribe",
    "\uBB38\uC758\uD558\uAE30": "Contact",
    "\uB9E4\uC7A5 \uC704\uCE58": "Stores",
    "\uBC95\uC801 \uACE0\uC9C0": "Legal notice",
    "\uC778\uC2A4\uD0C0\uADF8\uB7A8": "Instagram",
    "\uCE74\uCE74\uC624\uD1A1": "KakaoTalk",
    "\uCD94\uCC9C\uC0C1\uD488": "You may also like",
    "\uC120\uBB3C\uD558\uAE30": "Send as a gift",
    "\uC1FC\uD551\uC73C\uB85C": "Shop",
    "\uAC80\uC0C9 \uACB0\uACFC": "Results",
    "\uC778\uAE30 \uAC80\uC0C9\uC5B4": "Popular searches",
    "\uCD5C\uADFC \uBCF8 \uC81C\uD488": "Recently viewed",
    "\uAC80\uC0C9\uD558\uAE30": "Search",
    "\uAC80\uC0C9\uC5B4": "Search",
    "\uAC80\uC0C9": "Search",
    "\uB354\uBCF4\uAE30": "View more",
    "\uC0AD\uC81C\uD558\uAE30": "Clear",
    "\uB85C\uADF8\uC544\uC6C3": "Sign out",
    "\uB85C\uADF8\uC778": "Sign in",
    "\uD68C\uC6D0\uAC00\uC785": "Create account",
    "\uAC00\uC785\uD558\uAE30": "Create account",
    "\uC774\uBA54\uC77C": "Email",
    "\uBE44\uBC00\uBC88\uD638": "Password",
    "\uC218\uB839\uC778 \uC774\uB984": "Recipient name",
    "\uC774\uB984": "Name",
    "\uC5F0\uB77D\uCC98": "Phone",
    "\uBC30\uC1A1\uC9C0": "Address",
    "\uB610\uB294": "or",
    " \uBC0F ": " and ",
    "\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4": " \u2014 I agree",
    "\uCE74\uD14C\uACE0\uB9AC": "Category",
    "\uD544\uD130": "Filter",
    "\uC801\uC6A9\uD558\uAE30": "Apply",
    "\uB2E4\uC2DC \uC2DC\uB3C4\uD558\uAE30": "Try again",
    "\uB3CC\uC544\uAC00\uAE30": "Go back",
    "\uD655\uC778": "OK",
    "\uCD08\uAE30\uD654": "Reset",
    "\uB2EB\uAE30": "Close",
    "\uCD94\uAC00": "Add",
    "\uC0AD\uC81C": "Remove",
    "\uC218\uB7C9": "Qty",
    "\uC624\uBE0C\uC81C": "Object",
    "\uC81C\uD488 \uC774\uBBF8\uC9C0": "Product image",
    "\uC0C1\uC138 \uC774\uBBF8\uC9C0": "Detail image",
    "\uC0C1\uC138\uBCF4\uAE30": "View details",
    "\uC0C1\uC138 \uC0AC\uC9C4": "Detail photo",
    " \uBCF4\uAE30": " view",
    " \uC5F4\uAE30": " open",
    "Vollik \uD648": "Vollik home",
    "\uC774\uB07C\uB85C \uCC44\uC6CC\uC9C4 \uC564\uD2F0\uD06C \uC7A5\uB871\uC5D0 \uB9E4\uB2EC\uB9B0 Melted Moss": "Melted Moss hanging in an antique wardrobe filled with moss",
    "\uC6C0\uC9C1\uC774\uB294 Melted Moss \uC624\uBE0C\uC81C": "Interactive Melted Moss object",
    "\uC624\uBE0C\uC81C \uC6C0\uC9C1\uC774\uAE30. \uC0C1\uD558\uC88C\uC6B0\uB85C \uB4DC\uB798\uADF8\uD558\uC138\uC694. \uBC29\uD5A5\uD0A4\uB85C \uC6C0\uC9C1\uC774\uACE0 Home \uD0A4\uB85C \uCD08\uAE30\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.": "Move the object. Drag in any direction, use arrow keys, or press Home to reset."
  };
  var entries = Object.entries(phrases).sort((a, b) => b[0].length - a[0].length);
  function translate(value, lang = "ko") {
    if (lang !== "en") return value;
    let text = value;
    for (const [ko, en] of entries) text = text.split(ko).join(en);
    return text.replace(/([\d,]+)원/g, "\u20A9$1").replace(/님(?=\s*$)/, "");
  }

  // store.js
  var products = {
    moss: { id: "moss", name: "Melted Moss", price: 68e3, category: "Hanging", collection: "01", image: "assets/moss-hanging.webp", studio: true, descriptionEn: "A hanging scent object shaped like flowing moss.<br>It brings a small scene of nature into a familiar space.<br>The first Vollik collection pairs sculptural form with scent.", gallery: ["assets/moss-hanging.webp", ...Array.from({ length: 8 }, (_, i) => `media/moss-${i + 1}.png`)], description: "\uC774\uB07C\uAC00 \uD758\uB7EC\uB0B4\uB9AC\uB294 \uB4EF\uD55C \uD615\uD0DC\uB97C \uB2F4\uC740 \uD589\uC789 \uC624\uBE0C\uC81C.<br>\uC775\uC219\uD55C \uACF5\uAC04\uC5D0 \uB0AF\uC120 \uC790\uC5F0\uC758 \uC7A5\uBA74\uC744 \uB354\uD574\uBCF4\uC138\uC694.<br>\uD615\uD0DC\uC640 \uD5A5\uAE30\uB85C \uAE30\uC5B5\uB418\uB294 Vollik\uC758 \uCCAB \uBC88\uC9F8 \uCEEC\uB809\uC158." }
  };
  Object.assign(products, {
    "moss-badge": {
      "id": "moss-badge",
      "name": "Moss Badge",
      "price": 68e3,
      "category": "Badge",
      "collection": "01",
      "image": "assets/moss-badge.webp",
      "gallery": [
        "assets/moss-badge.webp"
      ],
      "studio": true,
      "description": "\uBCF4\uC1A1\uD55C \uC774\uB07C\uC758 \uD45C\uBA74\uACFC \uC720\uAE30\uC801\uC778 \uACE1\uC120\uC744 \uB2F4\uC740 \uC790\uC11D \uBC30\uC9C0. \uC637\uACFC \uAC00\uBC29 \uC704\uC5D0 \uC791\uC740 \uC790\uC5F0\uC758 \uD615\uD0DC\uB97C \uB354\uD569\uB2C8\uB2E4.",
      "descriptionEn": "A magnetic badge with a soft moss-like surface and organic curves. A small fragment of nature for clothing and bags."
    },
    "moss-stack": {
      "id": "moss-stack",
      "name": "Moss Stack",
      "price": 68e3,
      "category": "Stack",
      "collection": "01",
      "image": "assets/moss-stack.webp",
      "gallery": [
        "assets/moss-stack.webp"
      ],
      "studio": true,
      "description": "\uB2E8\uB2E8\uD55C \uBC1B\uCE68 \uC704\uB85C \uBD80\uB4DC\uB7EC\uC6B4 \uC774\uB07C\uAC00 \uD758\uB7EC\uB0B4\uB9AC\uB294 \uC2A4\uD0DD \uC624\uBE0C\uC81C. \uC11C\uB85C \uB2E4\uB978 \uC9C8\uAC10\uC774 \uB9CC\uB4DC\uB294 \uC791\uC740 \uD48D\uACBD\uC785\uB2C8\uB2E4.",
      "descriptionEn": "Soft moss-like forms flow over a solid base. A tabletop landscape shaped by contrasting textures."
    },
    "dopamine-hanging": {
      "id": "dopamine-hanging",
      "name": "Dopamine Hanging",
      "price": 68e3,
      "category": "Hanging",
      "collection": "02",
      "image": "assets/dopamine-hanging.webp",
      "gallery": [
        "assets/dopamine-hanging.webp"
      ],
      "studio": true,
      "description": "\uBD89\uC740 \uBA74\uC774 \uC911\uC2EC\uC5D0\uC11C \uC0AC\uBC29\uC73C\uB85C \uBED7\uC5B4 \uB098\uAC00\uB294 \uBCC4 \uBAA8\uC591\uC758 \uD589\uC789 \uC624\uBE0C\uC81C.",
      "descriptionEn": "Red facets radiate from the centre of this starburst hanging object."
    },
    "dopamine-hanging2": {
      "id": "dopamine-hanging2",
      "name": "Dopamine Hanging 2",
      "price": 68e3,
      "category": "Hanging",
      "collection": "02",
      "image": "assets/dopamine-hanging2-shop.webp",
      "gallery": [],
      "studio": true,
      "description": "\uB450 \uC778\uBB3C\uC774 \uB9DE\uC7A1\uC740 \uC190\uC5D0 \uCCB4\uC778\uC744 \uAC78\uC5C8\uC2B5\uB2C8\uB2E4. \uBD89\uC740 \uC2E4\uB8E8\uC5E3\uC774 \uD55C \uC30D\uC73C\uB85C \uD754\uB4E4\uB9BD\uB2C8\uB2E4.",
      "descriptionEn": "Two figures swing together, suspended by a chain from their joined hands."
    },
    "dopamine-badge": {
      "id": "dopamine-badge",
      "name": "Dopamine Badge",
      "price": 68e3,
      "category": "Badge",
      "collection": "02",
      "image": "assets/dopamine-badge.webp",
      "gallery": [
        "assets/dopamine-badge.webp"
      ],
      "studio": true,
      "description": "\uD55C\uC21C\uAC04\uC5D0 \uD37C\uC9C0\uB294 \uC790\uADF9\uC744 \uC120\uBA85\uD55C \uB808\uB4DC\uB85C \uB2F4\uC740 \uC790\uC11D \uBC30\uC9C0. \uC791\uC740 \uD615\uD0DC\uB85C \uC77C\uC0C1\uC5D0 \uAC15\uB82C\uD55C \uB9AC\uB4EC\uC744 \uB354\uD569\uB2C8\uB2E4.",
      "descriptionEn": "A vivid red magnetic badge capturing a sudden burst of sensation. A small form with an intense rhythm."
    },
    "dopamine-stack": {
      "id": "dopamine-stack",
      "name": "Dopamine Stack",
      "price": 68e3,
      "category": "Stack",
      "collection": "02",
      "image": "assets/dopamine-stack.webp",
      "gallery": [
        "assets/dopamine-stack.webp"
      ],
      "studio": true,
      "description": "\uBC14\uB2E5\uC5D0 \uB2FF\uC740 \uAC00\uB290\uB2E4\uB780 \uAF2C\uB9AC\uAC00 \uC810\uCC28 \uB450\uAED8\uB97C \uC5BB\uC73C\uBA70 \uBD89\uC740 \uBCC4\uB85C \uC774\uC5B4\uC9D1\uB2C8\uB2E4.",
      "descriptionEn": "A fine tail rests on the surface and gradually thickens into a red star."
    },
    "rains-hanging": {
      "id": "rains-hanging",
      "name": "Rains Hanging",
      "price": 68e3,
      "category": "Hanging",
      "collection": "03",
      "image": "assets/rains-hanging.webp",
      "gallery": [
        "assets/rains-hanging.webp"
      ],
      "studio": true,
      "description": "\uBE57\uBC29\uC6B8\uC774 \uB0A8\uAE34 \uD30C\uBB38\uC744 \uACB9\uACB9\uC758 \uACE1\uC120\uC73C\uB85C \uB2F4\uC740 \uD589\uC789 \uC624\uBE0C\uC81C. \uC9D9\uC740 \uBE14\uB8E8 \uADF8\uB808\uC774 \uC0AC\uC774\uB85C \uACF5\uAC04\uC774 \uBE44\uCE69\uB2C8\uB2E4.",
      "descriptionEn": "Layered curves trace the ripples left by rain. Openings reveal the space through a deep blue-gray hanging object."
    },
    "rains-badge": {
      "id": "rains-badge",
      "name": "Rains Badge",
      "price": 68e3,
      "category": "Badge",
      "collection": "03",
      "image": "assets/rains-badge.webp",
      "gallery": [
        "assets/rains-badge.webp"
      ],
      "studio": true,
      "description": "\uD769\uC5B4\uC9C4 \uBB3C\uBC29\uC6B8\uC774 \uD558\uB098\uB85C \uC774\uC5B4\uC9C0\uB294 \uC21C\uAC04\uC744 \uB2F4\uC740 \uC2E4\uBC84 \uADF8\uB808\uC774 \uC790\uC11D \uBC30\uC9C0. \uD750\uB974\uB294 \uB4EF\uD55C \uACE1\uC120\uC774 \uBE5B\uC744 \uBD80\uB4DC\uB7FD\uAC8C \uBC1B\uC2B5\uB2C8\uB2E4.",
      "descriptionEn": "A silver-gray magnetic badge capturing scattered droplets coming together. Flowing curves catch the light softly."
    },
    "rains-stack": {
      "id": "rains-stack",
      "name": "Rains Stack",
      "price": 68e3,
      "category": "Stack",
      "collection": "03",
      "image": "assets/rains-stack.webp",
      "gallery": [
        "assets/rains-stack.webp"
      ],
      "studio": true,
      "description": "\uBE44\uAC00 \uB0A8\uAE34 \uBB3C\uACB0 \uC0AC\uC774\uB85C \uBC14\uB2E5\uC774 \uBE44\uCE69\uB2C8\uB2E4. \uB465\uADFC \uAC00\uC7A5\uC790\uB9AC\uC5D0 \uCC28\uCF5C\uBE5B \uBC18\uC0AC\uAC00 \uB9FA\uD799\uB2C8\uB2E4.",
      "descriptionEn": "The surface beneath shows through open ripples. Charcoal edges catch the light."
    }
  });
  function defaults() {
    return { scentIndex: 0, lang: "ko", cart: [], wish: [], recent: [], orders: [], archive: ["moss", "moss-badge", "rains-hanging", "rains-stack", "dopamine-hanging"].map((product, i) => ({ id: "sample-" + i, product, name: products[product].name })), user: null, subscribed: false };
  }
  function normalize(raw) {
    const d = defaults();
    if (!raw || typeof raw !== "object") return d;
    d.scentIndex = Number.isInteger(raw.scentIndex) && raw.scentIndex >= 0 && raw.scentIndex < 5 ? raw.scentIndex : 0;
    d.lang = raw.lang === "en" ? "en" : "ko";
    d.cart = (Array.isArray(raw.cart) ? raw.cart : []).filter((i) => i && Object.hasOwn(products, i.id)).map((i) => ({ id: i.id, pack: i.pack === "gift" ? "gift" : "standard", qty: Math.max(1, Math.min(99, Math.trunc(+i.qty) || 1)) }));
    d.wish = [...new Set((Array.isArray(raw.wish) ? raw.wish : []).filter((id) => Object.hasOwn(products, id)))];
    d.recent = [...new Set((Array.isArray(raw.recent) ? raw.recent : []).filter((id) => Object.hasOwn(products, id)))].slice(0, 6);
    d.orders = (Array.isArray(raw.orders) ? raw.orders : []).filter((o) => o && typeof o.id === "string" && o.shipping && Array.isArray(o.items) && o.items.length && o.items.every((i) => i && Object.hasOwn(products, i.id) && Number.isInteger(i.qty) && i.qty > 0));
    d.archive = (Array.isArray(raw.archive) ? raw.archive : d.archive).filter((i) => i && Object.hasOwn(products, i.product));
    if (d.archive.length === 3 && d.archive.every((o, i) => o.id === "initial-" + (i + 1) && o.product === "moss" && o.name === "Vollik")) d.archive = defaults().archive;
    d.user = raw.user && typeof raw.user.name === "string" ? { name: raw.user.name, email: String(raw.user.email || "") } : null;
    d.subscribed = !!raw.subscribed;
    return d;
  }
  var collections = {
    "01": { name: "Moss", image: "assets/moss-stack.webp", description: "\uC774\uB07C\uC758 \uBD80\uB4DC\uB7EC\uC6B4 \uD45C\uBA74\uACFC \uD758\uB7EC\uB0B4\uB9AC\uB294 \uD615\uD0DC.", descriptionEn: "Soft moss textures and flowing forms." },
    "02": { name: "Dopamine", image: "assets/dopamine-stack-shop.webp", description: "\uAC10\uAC01\uC774 \uAE68\uC5B4\uB098\uB294 \uC21C\uAC04\uC758 \uC120\uBA85\uD55C \uC0C9\uACFC \uAE34\uC7A5.", descriptionEn: "Vivid color and tension as the senses awaken." },
    "03": { name: "Rains", image: "assets/rains-stack-shop.webp", description: "\uC138\uCC28\uAC8C \uB0B4\uB9B0 \uBE44\uAC00 \uB0A8\uAE34 \uBB3C\uACB0\uC758 \uD754\uC801.", descriptionEn: "Traces of rippling water after heavy rain." }
  };
  for (const product of Object.values(products)) {
    const slug = product.id === "moss" ? "moss-hanging" : product.id;
    const base = "assets/" + slug + "-shop";
    product.image = base + ".webp";
    if (["dopamine-hanging", "dopamine-hanging2", "dopamine-stack", "rains-stack"].includes(slug)) {
      product.gallery = [product.image, base + "-detail.webp", "assets/" + slug + "-study.webp"];
      if (product.category === "Stack") product.gallery.push("assets/" + slug + "-gallery.webp");
      continue;
    }
    const original = "assets/" + slug;
    const sceneIndex = { Hanging: 0, Badge: 1, Stack: 2 }[product.category];
    const series = "assets/" + slug.split("-")[0] + "-exhibit-";
    product.gallery = [original + ".webp"];
    if (product.category !== "Badge") {
      const studio = ["moss-hanging", "dopamine-stack", "rains-stack"].includes(slug);
      product.gallery.push(studio ? original + "-studio.webp" : series + sceneIndex + ".webp");
    }
    product.gallery.push(series + (sceneIndex + 3) + ".webp");
  }
  for (const p of Object.values(products)) {
    p.name = `${collections[p.collection].name} (${{ Hanging: "H", Stack: "S", Badge: "B" }[p.category]})`;
  }
  products["dopamine-hanging2"].name = "Dopamine (H2)";

  // desktop-common.js
  function read() {
    try {
      return normalize(JSON.parse(localStorage.getItem("vollik-test-v2")));
    } catch {
      return defaults();
    }
  }
  function save(d) {
    try {
      localStorage.setItem("vollik-test-v2", JSON.stringify(d));
      return true;
    } catch {
      return false;
    }
  }
  var menu = document.querySelector("#site-menu");
  var search = document.querySelector("#search-dialog");
  document.querySelector(".menu-toggle").onclick = () => menu.showModal();
  document.querySelector(".menu-dismiss").onclick = () => menu.close();
  document.querySelector(".search-open").onclick = () => search.showModal();
  document.querySelector(".search-dismiss").onclick = () => search.close();
  for (const dialog of [menu, search]) dialog.addEventListener("click", (e) => {
    if (e.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  });
  function counts() {
    const d = read();
    const wish = document.querySelector('.utilities a[href*="wishlist"]'), bag = document.querySelector('.utilities a[href*="#cart"]');
    const en = d.lang === "en";
    if (wish) wish.setAttribute("aria-label", `${en ? "Wishlist" : "\uC704\uC2DC\uB9AC\uC2A4\uD2B8"} (${d.wish.length})`);
    if (bag) bag.setAttribute("aria-label", `${en ? "Shopping bag" : "\uC1FC\uD551\uBC31"} (${d.cart.reduce((s, i) => s + i.qty, 0)})`);
  }
  counts();
  window.addEventListener("storage", counts);
  var translations = { "\uD5A5\uC740 \uC605\uC5B4\uC9C0\uACE0 \uD615\uD0DC\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.": "Scent fades. Form remains.", "\uD5A5\uACFC \uD615\uD0DC\uB85C \uAE30\uC5B5\uB418\uB294 \uC624\uBE0C\uC81C.": "Objects remembered through scent and form.", "\uC190\uC5D0 \uB2FF\uB294 \uD45C\uBA74\uBD80\uD130 \uACF5\uAC04\uC5D0 \uB0A8\uB294 \uC778\uC0C1\uAE4C\uC9C0.": "From the texture in your hand to the impression in your space.", "Vollik\uC740 \uC77C\uC0C1\uC758 \uAC10\uAC01\uC744 \uC0C8\uB85C\uC6B4 \uD615\uD0DC\uB85C \uC81C\uC548\uD569\uB2C8\uB2E4.": "Vollik gives everyday sensations a new form.", "\uB0B4 \uACC4\uC815": "My account", "\uBB38\uC758\uD558\uAE30": "Contact", "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38": "FAQ", "\uC8FC\uBB38 \uC870\uD68C": "Orders", "\uC704\uC2DC\uB9AC\uC2A4\uD2B8": "Wishlist", "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68": "Privacy", "\uC774\uC6A9 \uC548\uB0B4": "Information", "\uC0F5 \uBC14\uB85C\uAC00\uAE30": "Shop now", "\uBAA8\uB4E0 \uC624\uBE0C\uC81C \uBCF4\uAE30": "Explore all objects", "\uD5A5\uC774 \uC605\uC5B4\uC9C4 \uB4A4\uC5D0\uB3C4 \uD615\uD0DC\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.": "The scent fades. The form remains.", "\uD589\uC789\uC744 \uC7A1\uC544 \uC6C0\uC9C1\uC778 \uB4A4 \uB193\uC544\uBCF4\uC138\uC694.": "Drag the hanging object, then release it.", "\uC571 \uCCB4\uD5D8\uD558\uAE30 \u2197": "Explore the app \u2197", "\uD5A5\uC774 \uBA38\uBB38 \uC790\uB9AC.": "Where scent lingers.", "\uC775\uC219\uD55C \uACF5\uAC04\uC5D0 \uB193\uC778 \uB0AF\uC120 \uC790\uC5F0.": "Unexpected nature in a familiar space.", "\uC11C\uB85C \uB2E4\uB978 \uAC10\uAC01\uC758 \uD615\uD0DC": "Three expressions of the senses", "\uC18C\uC7A5\uD55C \uC624\uBE0C\uC81C\uB97C \uAE30\uB85D\uD558\uACE0, \uAC10\uAC01\uC744 \uC774\uC5B4\uAC00\uC138\uC694.": "Collect your objects. Keep the feeling.", "\uC8FC\uBB38 \uCCB4\uD5D8 \uBC84\uC804 \xB7 \uC2E4\uC81C \uACB0\uC81C \uBC0F \uBC30\uC1A1\uC740 \uC9C4\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Preview shopping experience. No payment or delivery takes place." };
  function localizeStatic() {
    const en = read().lang === "en";
    document.documentElement.lang = en ? "en" : "ko";
    if (!en) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while (n = walker.nextNode()) {
      if (["SCRIPT", "STYLE"].includes(n.parentElement?.tagName)) continue;
      const s = n.textContent.trim();
      if (s && !n.parentElement.closest("[data-i18n-skip], .language-switch")) n.textContent = n.textContent.replace(s, () => translations[s] || translate(s, "en"));
    }
    for (const el of document.querySelectorAll("[aria-label],[title],[alt]")) {
      for (const attr of ["aria-label", "title", "alt"]) {
        const value = el.getAttribute(attr);
        if (value) el.setAttribute(attr, translations[value] || translate(value, "en"));
      }
    }
    const input = document.querySelector(".site-search input");
    if (input) input.placeholder = "Search collections or objects";
  }
  document.querySelectorAll(".language-switch").forEach((b) => b.onclick = () => {
    const d = read();
    d.lang = d.lang === "en" ? "ko" : "en";
    save(d);
    location.reload();
  });
  localizeStatic();
  function renderVisualMenu(id = "01") {
    const slug = { "01": "moss", "02": "dopamine", "03": "rains" }[id];
    menu.querySelectorAll("[data-menu-collection]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.menuCollection === id)));
    menu.querySelector(".visual-menu-grid").innerHTML = [["all", read().lang === "en" ? "View all" : "\uC804\uCCB4\uBCF4\uAE30"], ["Hanging", "Hanging"], ["Badge", "Badge"], ["Stack", "Stack"]].map(([type, label]) => `<a href="desktop-shop.html?collection=${id}${type === "all" ? "" : "&type=" + type}"><span class="visual-menu-image"><img src="assets/${slug}-${type === "all" ? "stack-gallery" : type.toLowerCase() + "-shop"}.webp" alt=""></span><span>${label}</span></a>`).join("");
  }
  menu.querySelectorAll("[data-menu-collection]").forEach((b) => b.addEventListener("click", () => renderVisualMenu(b.dataset.menuCollection)));
  renderVisualMenu();

  // platform.js
  var installEvent;
  var standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  var english = () => document.documentElement.lang === "en";
  function showInstall() {
    const modal = document.createElement("dialog");
    modal.className = "platform-dialog";
    modal.innerHTML = english() ? "<h2>Install Vollik</h2><p>On iPhone or iPad, open this page in Safari, choose Share \u2192 Add to Home Screen \u2192 Add.</p><p>On Android or desktop, choose Install app from your browser menu when available.</p><button>Close</button>" : "<h2>Vollik \uC571 \uC124\uCE58</h2><p>\uC544\uC774\uD3F0\xB7\uC544\uC774\uD328\uB4DC: Safari\uC5D0\uC11C \uC774 \uC8FC\uC18C\uB97C \uC5F4\uACE0 \uACF5\uC720 \u2192 \uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00 \u2192 \uCD94\uAC00\uB97C \uC120\uD0DD\uD558\uC138\uC694.</p><p>Android\xB7PC: \uBE0C\uB77C\uC6B0\uC800 \uBA54\uB274\uC5D0\uC11C \uC571 \uC124\uCE58\uB97C \uC120\uD0DD\uD558\uC138\uC694. \uC124\uCE58 \uBA54\uB274\uB294 \uBE0C\uB77C\uC6B0\uC800\uC640 \uC811\uC18D \uD658\uACBD\uC5D0 \uB530\uB77C \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p><button>\uB2EB\uAE30</button>";
    document.body.append(modal);
    modal.querySelector("button").onclick = () => modal.close();
    modal.onclose = () => modal.remove();
    modal.showModal();
  }
  function addInstall() {
    if (standalone) return;
    document.querySelectorAll(".footer-bottom,footer:not(.footer),.menu-account,.menu-bottom").forEach((host2) => {
      if (host2.querySelector(".install-link")) return;
      const b = document.createElement("button");
      b.className = "install-link";
      b.textContent = english() ? "Install Vollik" : "Vollik \uC571 \uC124\uCE58";
      b.onclick = async () => {
        if (installEvent) {
          await installEvent.prompt();
          installEvent = null;
        } else showInstall();
      };
      host2.append(b);
    });
  }
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    installEvent = e;
    addInstall();
  });
  window.addEventListener("appinstalled", () => document.querySelectorAll(".install-link").forEach((b) => b.remove()));
  new MutationObserver(addInstall).observe(document.body, { childList: true, subtree: true });
  addInstall();
  var network = document.createElement("div");
  network.className = "network-status";
  network.setAttribute("role", "status");
  document.body.append(network);
  function connectivity() {
    network.hidden = navigator.onLine;
    network.textContent = english() ? "Offline. Previously loaded pages may still be available." : "\uC624\uD504\uB77C\uC778\uC785\uB2C8\uB2E4. \uC774\uC804\uC5D0 \uC5F4\uC5C8\uB358 \uD654\uBA74\uB9CC \uD45C\uC2DC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.";
  }
  connectivity();
  window.addEventListener("online", connectivity);
  window.addEventListener("offline", connectivity);
  if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {
  }));
  window.addEventListener("hashchange", () => {
    if (document.documentElement.dataset.experience === "web") {
      const r = location.hash.slice(1).split("?")[0];
      if (["shop", "collection", "status", "archive"].includes(r) || r.startsWith("product/")) location.reload();
    }
  });

  // shop-video.js
  function mountShopVideo(root2, lang = "ko") {
    if (!root2) return () => {
    };
    const video = root2.querySelector("video");
    const source = video.querySelector("source");
    let disposed = false, visible = true, failed = false, pending = false;
    let userStarted = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    const play = async () => {
      if (disposed || failed || pending) return;
      pending = true;
      try {
        await video.play();
      } catch {
        if (!disposed && visible && !document.hidden && !video.muted) {
          video.muted = true;
          try {
            await video.play();
          } catch {
          }
        }
      } finally {
        pending = false;
        if (!disposed) {
          if (!visible || document.hidden) video.pause();
        }
      }
    };
    const click = () => {
      if (failed || disposed) return;
      userStarted = true;
      if (video.ended) video.currentTime = 0;
      video.muted = false;
      play();
    };
    const keydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        click();
      }
    };
    const failure = () => {
      if (disposed) return;
      failed = true;
      video.pause();
      video.hidden = true;
      root2.style.backgroundImage = `url("${video.poster}")`;
      root2.querySelector(".shop-film-error").hidden = false;
    };
    const visibility = () => {
      if (document.hidden) video.pause();
      else if (visible && userStarted) play();
    };
    video.loop = true;
    video.muted = false;
    const observer = new IntersectionObserver((entries2) => {
      visible = entries2[0].isIntersecting;
      if (!visible) video.pause();
      else if (!document.hidden && userStarted) play();
    }, { threshold: 0.2 });
    video.addEventListener("error", failure);
    source.addEventListener("error", failure);
    video.addEventListener("click", click);
    video.addEventListener("keydown", keydown);
    document.addEventListener("visibilitychange", visibility);
    observer.observe(root2);
    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      video.removeEventListener("error", failure);
      source.removeEventListener("error", failure);
      video.removeEventListener("click", click);
      video.removeEventListener("keydown", keydown);
      video.pause();
      video.removeAttribute("src");
      source.removeAttribute("src");
      video.load();
    };
  }

  // mobile-web-film.js
  var host = document.querySelector(".mobile-web-film");
  var mobile = matchMedia("(max-width:700px)");
  var dispose;
  function update() {
    if (dispose) {
      dispose();
      dispose = null;
    }
    host.replaceChildren();
    host.hidden = false;
    const poster = mobile.matches ? "media/wardrobe-mobile-poster.jpg" : "media/wardrobe-desktop-v8-poster.jpg";
    const film = mobile.matches ? "media/wardrobe-mobile-sound.mp4" : "media/wardrobe-desktop-v8.mp4";
    const en = read().lang === "en";
    host.innerHTML = `<div class="shop-film"><video class="shop-film-video" tabindex="0" loop playsinline preload="metadata" poster="${poster}" aria-label="${en ? "Vollik wardrobe film" : "\uC7A5\uB871\uC774 \uC5F4\uB9AC\uBA70 Moss \uC624\uBE0C\uC81C\uAC00 \uB098\uD0C0\uB098\uB294 Vollik \uC601\uC0C1"}"><source src="${film}" type="video/mp4"></video><span class="shop-film-error" hidden>${en ? "The film could not load. Visit the shop below." : "\uC601\uC0C1\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC544\uB798\uC5D0\uC11C \uC0F5\uC73C\uB85C \uC774\uB3D9\uD574 \uC8FC\uC138\uC694."}</span></div>`;
    dispose = mountShopVideo(host.querySelector(".shop-film"), en ? "en" : "ko");
    if (!mobile.matches) {
      const video = host.querySelector("video");
      video.style.objectFit = "contain";
      video.parentElement.style.overflow = "hidden";
      const detailShots = [
        { start: 55, end: 84, x: 0.5, y: 0.5, width: 0.96 },
        { start: 84, end: 111, x: 0.72, y: 0.4, width: 0.51 },
        { start: 111, end: 139, x: 0.5, y: 0.65, width: 0.48 },
        { start: 166, end: 173, x: 0.57, y: 0.49, width: 0.72 },
        { start: 173, end: 180, x: 0.5, y: 0.5, width: 0.96 },
        { start: 180, end: 187, x: 0.23, y: 0.76, width: 0.32 },
        { start: 187, end: 195, x: 0.71, y: 0.4, width: 0.5 },
        { start: 201, end: 208, x: 0.42, y: 0.43, width: 0.66 },
        { start: 208, end: 215, x: 0.78, y: 0.72, width: 0.31 },
        { start: 215, end: 222, x: 0.5, y: 0.5, width: 0.96 }
      ];
      let frame2;
      const syncFraming = (time = video.currentTime) => {
        const { clientWidth: w, clientHeight: h } = video;
        if (!w || !h) return;
        const aspect = (video.videoWidth || 3840) / (video.videoHeight || 2160);
        const ratio = w / h / aspect;
        const coverScale = Math.max(ratio, 1 / ratio);
        const sourceFrame = Math.floor(time * 30 + 1e-3);
        const shot = detailShots.find((cut) => sourceFrame >= cut.start && sourceFrame < cut.end);
        if (shot) {
          const scale = coverScale / shot.width;
          const pictureW = Math.min(w, h * aspect);
          const pictureH = pictureW / aspect;
          const pan = (centre, size, viewport) => {
            const limit = Math.max(0, (size * scale - viewport) / 2);
            return Math.max(-limit, Math.min(limit, (0.5 - centre) * size * scale));
          };
          video.style.transform = `translate(${pan(shot.x, pictureW, w)}px,${pan(shot.y, pictureH, h)}px) scale(${scale})`;
          return;
        }
        const progress = Math.min(1, Math.max(0, (time - 6) / 1.2));
        const ease = progress * progress * (3 - 2 * progress);
        video.style.transform = `scale(${1 + (coverScale - 1) * (1 - ease)})`;
      };
      const resize = () => syncFraming();
      const byFrame = typeof video.requestVideoFrameCallback === "function";
      const cancel2 = () => byFrame ? video.cancelVideoFrameCallback(frame2) : cancelAnimationFrame(frame2);
      const tick = (_, metadata) => {
        syncFraming(metadata?.mediaTime ?? video.currentTime);
        if (!video.paused) frame2 = byFrame ? video.requestVideoFrameCallback(tick) : requestAnimationFrame(tick);
      };
      const start = () => {
        cancel2();
        tick();
      };
      const observer = new ResizeObserver(resize);
      observer.observe(video);
      video.addEventListener("playing", start);
      video.addEventListener("seeked", resize);
      start();
      const disposeFilm = dispose;
      dispose = () => {
        cancel2();
        observer.disconnect();
        video.removeEventListener("playing", start);
        video.removeEventListener("seeked", resize);
        disposeFilm();
      };
    }
  }
  mobile.addEventListener("change", update);
  update();

  // status-preview.js
  var screen = document.querySelector(".phone-screen");
  function fitPreview() {
    screen.style.setProperty("--preview-scale", screen.getBoundingClientRect().width / 393);
  }
  fitPreview();
  new ResizeObserver(fitPreview).observe(screen);
  window.addEventListener("message", (event) => {
    if (event.origin === location.origin && event.source === screen.querySelector("iframe").contentWindow && event.data === "vollik:status-moved")
      document.querySelector(".archive-story-copy p").style.visibility = "hidden";
  });

  // slide-navigation.js
  var root = document.documentElement;
  var panels = [...document.querySelectorAll("#main > section, .site-footer")];
  var reduced = matchMedia("(prefers-reduced-motion: reduce)");
  var frame = 0;
  var destination = -1;
  var previousTime = 0;
  var direction = 0;
  var travel = 0;
  var consumed = false;
  function positions() {
    const header = document.querySelector(".top").offsetHeight;
    const bottom = root.scrollHeight - innerHeight;
    return panels.map((panel) => Math.min(bottom, Math.max(0, scrollY + panel.getBoundingClientRect().top - header)));
  }
  function cancel() {
    cancelAnimationFrame(frame);
    frame = 0;
    destination = -1;
    root.classList.remove("slide-moving");
  }
  function animate(index, end) {
    cancel();
    destination = index;
    root.classList.add("slide-moving");
    const start = scrollY, began = performance.now();
    function step(now) {
      const t = Math.min(1, (now - began) / 510);
      const ease = t * t * (3 - 2 * t);
      window.scrollTo({ top: start + (end - start) * ease, behavior: "instant" });
      if (t < 1) frame = requestAnimationFrame(step);
      else cancel();
    }
    frame = requestAnimationFrame(step);
  }
  function wheel(e) {
    if (reduced.matches || !e.cancelable || e.ctrlKey || Math.abs(e.deltaX) >= Math.abs(e.deltaY) || document.querySelector("dialog[open]")) return;
    const sign = Math.sign(e.deltaY), now = performance.now();
    if (sign !== direction || now - previousTime > 160) {
      consumed = false;
      travel = 0;
    }
    previousTime = now;
    direction = sign;
    const stops = positions();
    const current = destination >= 0 ? destination : stops.reduce((best, p, i) => Math.abs(p - scrollY) < Math.abs(stops[best] - scrollY) ? i : best, 0);
    const panel = panels[current].getBoundingClientRect();
    const header = document.querySelector(".top").offsetHeight;
    if (!frame && (sign > 0 && panel.bottom > innerHeight + 3 || sign < 0 && panel.top < header - 3)) return;
    if (consumed) {
      e.preventDefault();
      return;
    }
    const next = current + sign;
    if (next < 0 || next >= stops.length) return;
    e.preventDefault();
    travel += Math.abs(e.deltaY) * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1);
    if (travel < 20) return;
    consumed = true;
    animate(next, stops[next]);
  }
  window.addEventListener("wheel", wheel, { passive: false });
  for (const event of ["touchstart", "keydown", "resize"]) window.addEventListener(event, cancel, { passive: true });
  var preview = document.querySelector(".phone-screen iframe");
  function bindPreview() {
    preview.contentWindow.addEventListener("wheel", (e) => {
      if (preview.contentWindow.location.hash === "#status" && !preview.contentDocument.querySelector("dialog[open]")) wheel(e);
    }, { passive: false });
  }
  preview.addEventListener("load", bindPreview);
  bindPreview();
})();
