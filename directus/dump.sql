
--
-- Data for Name: languages; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.languages (code) VALUES ('en-US');
INSERT INTO public.languages (code) VALUES ('fr-FR');


--
-- Data for Name: association; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.association (id, name, email, phone, address, logo) VALUES (1, 'CLIC', 'clic@epfl.ch', '+41 21 693 81 28', 'CLIC, INN 132
Station 14
EPFL, CH-1015 Lausanne', NULL);


--
-- Data for Name: members; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.members (id, name, surname, email, sciper, link, picture) VALUES (1, 'Christelle', 'Lam', 'phi.lam@epfl.ch', '300000', 'https://people.epfl.ch/phi.lam', NULL);
INSERT INTO public.members (id, name, surname, email, sciper, link, picture) VALUES (2, 'Noé', 'Terrier', 'noe.terrier@epfl.ch', '300001', 'https://noeterrier.fr/', NULL);
INSERT INTO public.members (id, name, surname, email, sciper, link, picture) VALUES (3, 'Sarah', 'Badr', 'sarah.badr@epfl.ch', '300002', 'https://people.epfl.ch/sarah.badr', NULL);


--
-- Data for Name: association_memberships; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.association_memberships (id, member, level) VALUES (1, 1, 'committee');
INSERT INTO public.association_memberships (id, member, level) VALUES (2, 2, 'committee');
INSERT INTO public.association_memberships (id, member, level) VALUES (3, 3, 'committee');


--
-- Data for Name: association_memberships_translations; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.association_memberships_translations (id, association_memberships_id, languages_code, title) VALUES (1, 1, 'en-US', 'Copresident');
INSERT INTO public.association_memberships_translations (id, association_memberships_id, languages_code, title) VALUES (2, 1, 'fr-FR', 'Co-Présidente');
INSERT INTO public.association_memberships_translations (id, association_memberships_id, languages_code, title) VALUES (3, 2, 'en-US', 'Copresident');
INSERT INTO public.association_memberships_translations (id, association_memberships_id, languages_code, title) VALUES (4, 2, 'fr-FR', 'Co-Président');
INSERT INTO public.association_memberships_translations (id, association_memberships_id, languages_code, title) VALUES (5, 3, 'en-US', 'Administrator');
INSERT INTO public.association_memberships_translations (id, association_memberships_id, languages_code, title) VALUES (6, 3, 'fr-FR', 'Administratrice');


--
-- Data for Name: commissions; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.commissions (id, email, slug, logo) VALUES (3, 'ictravel.clic@epfl.ch', 'ic-travel', NULL);


--
-- Data for Name: partners; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.partners (id, name, logo, link, rank, start, "end", commission) VALUES (1, 'Infomaniak', NULL, 'https://infomaniak.ch', 2, '2024-03-01', '2025-03-01', NULL);


--
-- Data for Name: association_partners; Type: TABLE DATA; Schema: public; Owner: directus_user
--



--
-- Data for Name: social_links; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.social_links (id, link, logo, media_name, account_name) VALUES (6, 'https://t.me/clicnews', NULL, 'Telegram', '@clicnews');
INSERT INTO public.social_links (id, link, logo, media_name, account_name) VALUES (7, 'https://www.instagram.com/clicepfl/', NULL, 'Instagram', '@clicepfl');
INSERT INTO public.social_links (id, link, logo, media_name, account_name) VALUES (8, 'https://twitter.com/CLICepfl', NULL, 'X', 'clicepfl');
INSERT INTO public.social_links (id, link, logo, media_name, account_name) VALUES (9, 'https://www.instagram.com/ictravel.clic/', NULL, 'Instagram', '@ictravel');


--
-- Data for Name: association_social_links; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.association_social_links (id, association_id, social_links_id) VALUES (1, NULL, NULL);
INSERT INTO public.association_social_links (id, association_id, social_links_id) VALUES (3, 1, 6);
INSERT INTO public.association_social_links (id, association_id, social_links_id) VALUES (4, 1, 7);
INSERT INTO public.association_social_links (id, association_id, social_links_id) VALUES (5, 1, 8);


--
-- Data for Name: association_translations; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.association_translations (id, association_id, languages_code, description, banner) VALUES (2, 1, 'fr-FR', '# À propos
#### Qu''est-ce que la CLIC ?

La CLIC est l’Association des Étudiant.e.s en Informatique et Communications (incluant donc les programmes de Master) de l’École Polytechnique Fédérale de Lausanne ([EPFL](https://epfl.ch)).

Chaque année nous organisons plusieurs événements, la plupart gratuits, dans le but d’animer la Faculté IC : des petits-déjeuners, des conférences, de multiples apéros, une journée dédiée à la carrière future de nos étudiant.e.s, une distribution de vin chaud, le traditionnel Souper de Faculté, et bien plus !

La CLIC se donne également pour mission de soutenir les projets individuels de ses étudiant.e.s en fournissant un soutien logistique, financier, ou même organisationnel dans certains cas. Par exemple, [LauzHack](https://lauzhack.com/) a été créé en 2016 comme un événement de l’association. Contacte-nous si tu as une idée derrière la tête !

Enfin, n’hésite pas à passer nous faire un coucou dans notre bureau en [INN132](https://plan.epfl.ch/?room==INN%20132) ou sur nos réseaux-sociaux ! Nous serons ravi.e.s de faire ta connaissance 😁', NULL);
INSERT INTO public.association_translations (id, association_id, languages_code, description, banner) VALUES (1, 1, 'en-US', '# About
#### What is CLIC?

CLIC is the Computer Science and Communications Student Association (including Master''s programs) of the École Polytechnique Fédérale de Lausanne ([EPFL](https://epfl.ch)).

Every year we organize a number of events, most of them free, to liven up the IC Faculty: breakfasts, lectures, multiple aperitifs, a day dedicated to the future careers of our students, a mulled wine distribution, the traditional Faculty Dinner, and much more!

CLIC is also committed to supporting individual student projects by providing logistical, financial and, in some cases, organizational support. For example, [LauzHack](https://lauzhack.com/) was created in 2016 as an association event. Contact us if you have an idea in mind!

And don''t hesitate to drop by our office in [INN132](https://plan.epfl.ch/?room==INN%20132) or our social networks! We look forward to meeting you 😁', NULL);


--
-- Data for Name: commission_memberships; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.commission_memberships (id, commission, member, level) VALUES (2, 3, 3, 'committee');


--
-- Data for Name: commission_memberships_translations; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.commission_memberships_translations (id, commission_memberships_id, languages_code, title) VALUES (1, 2, 'en-US', 'Title');
INSERT INTO public.commission_memberships_translations (id, commission_memberships_id, languages_code, title) VALUES (2, 2, 'fr-FR', 'Titre');


--
-- Data for Name: commissions_members; Type: TABLE DATA; Schema: public; Owner: directus_user
--



--
-- Data for Name: commissions_social_links; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.commissions_social_links (id, commissions_id, social_links_id) VALUES (1, 3, 9);

--
-- Data for Name: commissions_translations; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.commissions_translations (id, commissions_id, languages_code, small_description, description, banner) VALUES (1, NULL, 'en-US', 'asdf', 'asdf', NULL);
INSERT INTO public.commissions_translations (id, commissions_id, languages_code, small_description, description, banner) VALUES (2, NULL, 'fr-FR', 'asdf', 'asdf', NULL);
INSERT INTO public.commissions_translations (id, commissions_id, languages_code, small_description, description, banner) VALUES (3, NULL, 'en-US', 'asdf', 'asdf', NULL);
INSERT INTO public.commissions_translations (id, commissions_id, languages_code, small_description, description, banner) VALUES (4, NULL, 'fr-FR', 'asdf', 'asdf', NULL);
INSERT INTO public.commissions_translations (id, commissions_id, languages_code, small_description, description, banner) VALUES (5, 3, 'en-US', 'To prepare you for a memorable journey', 'Hello dear student!

## Who are we?

We are IC Travel, the LINC committee organizing your study trip.

## Who is eligible for this trip?

Anyone in their third year of a Bachelor''s degree at the IC Faculty can take part in the trip.

## What is the destination?

This year''s destination is Amsterdam, and the trip will take place from July 10 to 17, 2023.

## How do I register?

Registration is now closed!', NULL);
INSERT INTO public.commissions_translations (id, commissions_id, languages_code, small_description, description, banner) VALUES (6, 3, 'fr-FR', 'Pour vous préparer un voyage mémorable', 'Salut cher·ère étudiant·e !

## Qui sommes-nous ?

Nous sommes IC Travel, la commission de la CLIC qui organise ton voyage d’études.

## Qui est concerné par ce voyage ?

Toute personne en troisième année de bachelor de la Faculté IC peut participer au voyage.

## Quelle est la destination ?

La destination de cette année est Amsterdam, et le voyage se déroulera du 10 au 17 juillet 2023.

## Comment s''inscrire ?

Les inscriptions sont fermées !', NULL);

--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.news (id, status, sort, user_created, date_created, date_updated, banner, slug) VALUES (2, 'published', NULL, NULL, '2024-02-15 04:02:43.255+00', '2024-02-15 04:05:41.422+00', NULL, 'secret-santa-2023');

INSERT INTO public.news_translations (id, news_id, languages_code, title, description, content) VALUES (3, 2, 'fr-FR', 'Secret Santa CLIC 2023', 'Viens offrir et recevoir un cadeau avec un verre de vin/chocolat chaud !', 'Ho Ho Ho !

La fin de l’année approche ! Bon courage à vous pour les derniers rendus et les finals💙 Il est temps de rattraper les retards, mais c’est aussi l’heure de vous installer devant la cheminée avec un chocolat chaud et de sortir vos emballages cadeaux 🎁

La CLIC organise un Secret Santa pour toute la Faculté IC ! Le principe est simple: amener un cadeau (d’une valeur de 10~15 CHF) le soir du 20 Décembre, au plus tard à 19h. Quand il y en aura suffisamment dans la hotte de la CLIC, on distribuera au hasard les cadeaux à chacun.e des participant.e.s ! Vous n’aurez pas de personne attribuée à l’avance, mais après la distribution, vous pourrez essayer de retrouver la personne qui vous a offert le cadeau 🎀

Et pour partager plus de kiff dans la bonne humeur des fêtes de fin d’année, il y aura une distribution de vin chaud, de chocolats chauds (avec l’aide experte de Chocopoly !) et de biscuits ! 🍪☕

📍 Lieu: Hall INM
🕰️ Date: 20 Décembre 2023 de 18h à 21h
🎁 Préparez un cadeau entre 10 et 15 CHF

La CLIC vous aime ❤️💙');
INSERT INTO public.news_translations (id, news_id, languages_code, title, description, content) VALUES (4, 2, 'en-US', 'Secret Santa CLIC 2023', 'Come give and receive a gift with a glass of wine/hot chocolate!', 'Ho Ho Ho!

The end of the year is approaching! Good luck to you with the projects and finals💙 It''s time to catch up, but it''s also time to settle down in front of the fireplace with a hot chocolate and get out your gift wrappings 🎁

CLIC is organizing a Secret Santa for the whole IC Faculty! The principle is simple: bring a gift (worth 10~15 CHF) on the evening of December 20, no later than 7pm. When there''s enough in the CLIC''s hood, we''ll randomly distribute the gifts to each participant! You won''t be assigned a person in advance, but after the distribution, you can try to find the person who gave you the gift 🎀

And to share more good vibes in holiday cheer, there''ll be a distribution of mulled wine, hot chocolates (with expert help from Chocopoly!) and cookies! 🍪☕

📍 Location: INM Hall
🕰️ Date: December 20th, 2023 from 6 p.m. to 9 p.m.
🎁 Prepare a gift between 10 and 15 CHF

Love from CLIC ❤️💙');


--
-- Data for Name: news_commissions; Type: TABLE DATA; Schema: public; Owner: directus_user
--

INSERT INTO public.news_commissions (id, news_id, commissions_id) VALUES (4, 2, 3);
