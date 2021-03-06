

function WPSetAsXMLDoc(id, nonce){
	var $link = jQuery('a#wp-xml-document-' + id);

	$link.text( 'Saving...' );
	jQuery.post(ajaxurl, {
		action:"set-xml-document", post_id: post_id, xml_id: id, _ajax_nonce: nonce, cookie: encodeURIComponent(document.cookie)
		}, function(str){
			var win = window.dialogArguments || opener || parent || top;
			$link.text( 'Use as XML document' );
			
			if ( str == '0' ) {
				alert( 'Could not set as XML document. Try a different attachment.' );
			} else {
				str = JSON.parse(str);
				jQuery('a.wp-xml-document').show();
				$link.text( 'Done' );
				$link.fadeOut( 2000 );

				// update screen content...
				win.WPSetDocHTML(str.html, 'xml');

			}
		}
	);
}


function WPSetAsXSLDoc(id, nonce){
	var $link = jQuery('a#wp-xsl-document-' + id);

	$link.text( 'Saving...' );
	jQuery.post(ajaxurl, {
		action:"set-xsl-document", post_id: post_id, xsl_id: id, _ajax_nonce: nonce, cookie: encodeURIComponent(document.cookie)
		}, function(str){
			var win = window.dialogArguments || opener || parent || top;
			$link.text( 'Use as XSL document' );
			
			if ( str == '0' ) {
				alert( 'Could not set as XSL document. Try a different attachment.' );
			} else {
				str = JSON.parse(str);
				jQuery('a.wp-xsl-document').show();
				$link.text( 'Done' );
				$link.fadeOut( 2000 );

				// update screen content...
				win.WPSetDocHTML(str.html, 'xsl');

			}
		}
	);
}

