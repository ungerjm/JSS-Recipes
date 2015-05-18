<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Description</key>
	<string>Downloads updates for Adobe Acrobat Pro X or XI and imports them 
into your JSS.</string>
	<key>Identifier</key>
	<string>com.github.ungerjm.jss.AdobeAcrobatProXUpdate</string>
	<key>Input</key>
	<dict>
		<key>MAJOR_VERSION</key>
		<string>10</string>
		<key>VERSION</key>
		<string>latest</string>
		<key>NAME</key>
		<string>AdobeAcrobatProX_Update</string>
       	 	<key>JSS_INVENTORY_NAME</key>
        	<string>Adobe Acrobat Pro.app</string>
		<key>CATEGORY</key>
		<string>Productivity</string>
		<key>POLICY_CATEGORY</key>
		<string>Testing</string>
		<key>POLICY_TEMPLATE</key>
		<string>%RECIPE_DIR%/PolicyTemplate.xml</string>
		<key>ICON</key>
		<string>%RECIPE_DIR%/AdobeAcrobat.png</string>
		<key>GROUP_NAME</key>
		<string>Needs Update %NAME&</string>
		<key>GROUP_TEMPLATE</key>
		<string>%RECIPE_DIR%/SmartGroupTemplate.xml</string>
		<key>DESCRIPTION</key>
		<string>Adobe Acrobat Pro lets you deliver professional PDF communications. Create and edit PDF files with rich media included, share information more securely, and gather feedback more efficiently.</string>
	</dict>
	<key>MinimumVersion</key>
	<string>0.4.0</string>
	<key>ParentRecipe</key>
	<string>com.github.golbiga.pkg.AdobeAcrobatProXUpdate</string>
	<key>Process</key>
	<array>
		<dict>
			<key>Arguments</key>
			<dict>
				<key>prod_name</key>
				<string>%NAME%</string>
				<key>jss_inventory_name</key>
				<string>%JSS_INVENTORY_NAME%</string>
				<key>category</key>
				<string>%CATEGORY%</string>
				<key>policy_category</key>
				<string>%POLICY_CATEGORY%</string>
				<key>policy_template</key>
				<string>%POLICY_TEMPLATE%</string>
				<key>self_service_icon</key>
				<string>%ICON%</string>
				<key>self_service_description</key>
				<string>%DESCRIPTION%</string>
				<key>groups</key>
				<array>
					<dict>
						<key>name</key>
						<string>%GROUP_NAME%</string>
						<key>smart</key>
						<true/>
						<key>template_path</key>
						<string>%GROUP_TEMPLATE%</string>
					</dict>
				</array>
			</dict>
			<key>Processor</key>
			<string>JSSImporter</string>
		</dict>
	</array>
</dict>
</plist>
