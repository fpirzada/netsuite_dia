{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

{{! Edited for Bridge Theme }}

{{#if showExtendedMenu}}
	<a class="header-profile-welcome-link" href="#" data-toggle="dropdown">
		<i class="header-profile-welcome-user-icon"></i>
		{{translate 'Welcome <strong class="header-profile-welcome-link-name">$(0)</strong>' displayName}}
		<i class="header-profile-welcome-carret-icon"></i>
	</a>

	{{#if showMyAccountMenu}}
		<ul class="header-profile-menu-myaccount-container">
			<li data-view="Header.Menu.MyAccount"></li>
		</ul>
	{{/if}}

{{else}}

	{{#if showLoginMenu}}
		{{#if showLogin}}
			<div class="header-profile-menu-login-container">
				<ul class="header-profile-menu-login">
					<!--li class="header-profile-login-list-icon">
						<i class="header-profile-login-icon"></i>
					</li-->
					<li>
						<a class="header-profile-login-link" data-touchpoint="login" data-hashtag="login-register" href="#">
						<img src="/core/media/media.nl?id=25447&c=4420736_SB1&h=PbYdUW_tzTLZa7wPq0-q2ZA1FzyAGu15u73dsCVx-gznTZRF" />
							<span class="icon-label">	{{translate 'Login'}} | {{translate 'Register'}}</span>
							
						</a>
					</li>
					{{#if showRegister}}
						<!--li class="header-profile-login-separator"> | </li>
						<li>
							<a class="header-profile-register-link" data-touchpoint="register" data-hashtag="login-register" href="#">
								{{translate 'Register'}}
							</a>
						</li-->
					{{/if}}
				</ul>
			</div>
		{{/if}}
	{{else}}
		<a class="header-profile-loading-link">
			<i class="header-profile-loading-icon"></i>
			<span class="header-profile-loading-indicator"></span>
		</a>
	{{/if}}

{{/if}}



{{!----
Use the following context variables when customizing this template:

	showExtendedMenu (Boolean)
	showLoginMenu (Boolean)
	showLoadingMenu (Boolean)
	showMyAccountMenu (Boolean)
	displayName (String)
	showLogin (Boolean)
	showRegister (Boolean)

----}}
