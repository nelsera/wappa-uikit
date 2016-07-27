/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-anosLOGO2': '&#xe935;',
		'icon-anos_LOGO': '&#xe936;',
		'icon-logo15anos': '&#xe901;',
		'icon-icone_seta': '&#xe933;',
		'icon-lamp_icon': '&#xe923;',
		'icon-van-512': '&#xe903;',
		'icon-relat-empresa-cliente': '&#xe91f;',
		'icon-eng2': '&#xe920;',
		'icon-cc-empre-cliente': '&#xe921;',
		'icon-financ-emp-cliente': '&#xe922;',
		'icon-black': '&#xe917;',
		'icon-ExPense-ico': '&#xe90c;',
		'icon-ExPense-vert': '&#xe90d;',
		'icon-ExPense-horiz': '&#xe90b;',
		'icon-vaimoto-ICO': '&#xe908;',
		'icon-vaimoto-HORIZ': '&#xe909;',
		'icon-vaimoto-VERT': '&#xe90a;',
		'icon-luxo': '&#xe904;',
		'icon-comum': '&#xe905;',
		'icon-especial': '&#xe906;',
		'icon-todos': '&#xe907;',
		'icon-ytube': '&#xe900;',
		'icon-logo2': '&#xe934;',
		'icon-taxi-circle': '&#xe819;',
		'icon-people-circle': '&#xe81a;',
		'icon-building-circle': '&#xe81b;',
		'icon-tw': '&#xe800;',
		'icon-gplus': '&#xe809;',
		'icon-in': '&#xe80a;',
		'icon-face': '&#xe80b;',
		'icon-play': '&#xe80c;',
		'icon-people-taxi': '&#xe80d;',
		'icon-premium2': '&#xe80e;',
		'icon-express': '&#xe80f;',
		'icon-phone': '&#xe810;',
		'icon-language': '&#xe811;',
		'icon-taxi': '&#xe812;',
		'icon-people': '&#xe813;',
		'icon-building': '&#xe814;',
		'icon-raio': '&#xe815;',
		'icon-shart': '&#xe816;',
		'icon-wallet': '&#xe817;',
		'icon-van': '&#xe632;',
		'icon-estrutura': '&#xe633;',
		'icon-relatorios': '&#xe634;',
		'icon-adm2': '&#xe635;',
		'icon-seta-cima': '&#xe627;',
		'icon-lock': '&#xe624;',
		'icon-adm': '&#xe618;',
		'icon-bberry': '&#xe622;',
		'icon-win': '&#xe621;',
		'icon-financeiro': '&#xe610;',
		'icon-premium': '&#xe601;',
		'icon-light': '&#xe602;',
		'icon-user-login': '&#xe603;',
		'icon-x': '&#xe604;',
		'icon-eng': '&#xe605;',
		'icon-bandeira': '&#xe606;',
		'icon-clock': '&#xe607;',
		'icon-pin': '&#xe608;',
		'icon-star': '&#xe609;',
		'icon-tel-2': '&#xe60a;',
		'icon-rateio': '&#xe60b;',
		'icon-dash': '&#xe60c;',
		'icon-sair': '&#xe60d;',
		'icon-logo': '&#xe60f;',
		'icon-download': '&#xe611;',
		'icon-calendar': '&#xe612;',
		'icon-justificar': '&#xe613;',
		'icon-carona': '&#xe614;',
		'icon-utilizacao': '&#xe615;',
		'icon-tel': '&#xe616;',
		'icon-msg': '&#xe617;',
		'icon-user': '&#xe600;',
		'icon-checkmark': '&#xe61c;',
		'icon-exit': '&#xe61e;',
		'icon-apple': '&#xe61f;',
		'icon-android': '&#xe620;',
		'icon-search': '&#xe61a;',
		'icon-menu': '&#xe625;',
		'icon-home': '&#xe926;',
		'icon-filial': '&#xe91c;',
		'icon-pencil': '&#xe90f;',
		'icon-camera': '&#xe63c;',
		'icon-film': '&#xe90e;',
		'icon-book': '&#xe646;',
		'icon-file': '&#xe925;',
		'icon-stack': '&#xe628;',
		'icon-credit': '&#xe927;',
		'icon-calendar2': '&#xe928;',
		'icon-colaboradores': '&#xe91d;',
		'icon-spinner': '&#xe62f;',
		'icon-lock2': '&#xe912;',
		'icon-pie': '&#xe62b;',
		'icon-stats': '&#xe647;',
		'icon-briefcase': '&#xe639;',
		'icon-lightning': '&#xe648;',
		'icon-numbered-list': '&#xe91a;',
		'icon-cloud': '&#xe649;',
		'icon-globe': '&#xe644;',
		'icon-planet': '&#xe91e;',
		'icon-flag': '&#xe640;',
		'icon-checkmark-circle': '&#xe913;',
		'icon-spam': '&#xe919;',
		'icon-checkmark2': '&#xe64b;',
		'icon-minus': '&#xe63a;',
		'icon-plus': '&#xe631;',
		'icon-backward': '&#xe62d;',
		'icon-forward': '&#xe62e;',
		'icon-loop2': '&#xe910;',
		'icon-loop': '&#xe914;',
		'icon-arrow-right3': '&#xe643;',
		'icon-arrow-right2': '&#xe63d;',
		'icon-arrow-left2': '&#xe915;',
		'icon-arrow-right': '&#xe62a;',
		'icon-arrow-down': '&#xe629;',
		'icon-arrow-left': '&#xe911;',
		'icon-table': '&#xe62c;',
		'icon-facebook2': '&#xe637;',
		'icon-flickr': '&#xe902;',
		'icon-file-pdf': '&#xe91b;',
		'icon-file-word': '&#xe63e;',
		'icon-file-excel': '&#xe63f;',
		'icon-lightbulb': '&#xe916;',
		'icon-add': '&#xe918;',
		'icon-close': '&#xe642;',
		'icon-logo-wappa': '&#xe636;',
		'icon-paperplane': '&#xe61d;',
		'icon-video': '&#xe64a;',
		'icon-mobile': '&#xe626;',
		'icon-facebook': '&#xe61b;',
		'icon-googleplus': '&#xe623;',
		'icon-linkedin': '&#xe619;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
