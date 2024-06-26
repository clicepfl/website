


INSERT INTO public.directus_folders (id, name, parent) VALUES ('48e39cd0-878d-4850-a6d5-5f903bd0c2fb', 'public', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_folders (id, name, parent) VALUES ('9dcbb848-a25a-4e75-af0a-abbd1c4555ea', 'members', '48e39cd0-878d-4850-a6d5-5f903bd0c2fb') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_folders (id, name, parent) VALUES ('8890baa5-447e-45a3-a573-95c76830e876', 'news', '48e39cd0-878d-4850-a6d5-5f903bd0c2fb') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_folders (id, name, parent) VALUES ('24a99ee1-4eee-48e1-9960-d51b5a105016', 'partners', '48e39cd0-878d-4850-a6d5-5f903bd0c2fb') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_folders (id, name, parent) VALUES ('82caf9c9-995b-404f-ba7e-76f704a6dd3e', 'association', '48e39cd0-878d-4850-a6d5-5f903bd0c2fb') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_folders (id, name, parent) VALUES ('07d9aa98-227f-4d9a-916f-e19f30cda26a', 'commissions', '48e39cd0-878d-4850-a6d5-5f903bd0c2fb') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_folders (id, name, parent) VALUES ('2fd1d075-83a4-40b7-902e-b46a0d861dfe', 'gallery', '48e39cd0-878d-4850-a6d5-5f903bd0c2fb') ON CONFLICT DO NOTHING;


INSERT INTO public.directus_users (id) VALUES ('49733485-a937-4776-a34b-914ed2b5ce16') ON CONFLICT DO NOTHING;


INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('3ccde633-f47f-4d6c-b09b-9060748ba6e3', 'local', '3ccde633-f47f-4d6c-b09b-9060748ba6e3.jpg', 'Titanfall_2_A.jpg', 'Titanfall 2 A', 'image/jpeg', '2fd1d075-83a4-40b7-902e-b46a0d861dfe', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:36:42.128142+00', NULL, '2024-06-26 20:36:42.18+00', NULL, 179236, 1000, 563, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('6521a3b8-b039-4643-bf26-500221131805', 'local', '6521a3b8-b039-4643-bf26-500221131805.webp', 'FractureBattle.webp', 'Fracture Battle', 'image/webp', '8890baa5-447e-45a3-a573-95c76830e876', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:07:55.64177+00', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:25:43.617+00', NULL, 225862, 1000, 569, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('0ed7b730-158b-4c78-9fb0-7340d2b4e0d9', 'local', '0ed7b730-158b-4c78-9fb0-7340d2b4e0d9.webp', 'TF2_Invasion_Concept.webp', 'T F2 Invasion Concept', 'image/webp', '8890baa5-447e-45a3-a573-95c76830e876', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:07:55.658544+00', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:25:43.617+00', NULL, 15444, 349, 98, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('525d475c-24a0-45cb-947f-c70eca52c3b6', 'local', '525d475c-24a0-45cb-947f-c70eca52c3b6.jpg', 'apps.60051.71235344842593874.68f78909-514c-463a-90da-25844a0d69c7.jpg', 'Apps.60051.71235344842593874.68f78909 514c 463a 90da 25844a0d69c7', 'image/jpeg', '9dcbb848-a25a-4e75-af0a-abbd1c4555ea', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 19:53:54.269471+00', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:25:57.872+00', NULL, 17916, 480, 270, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('77eb9ef9-3549-4788-a9aa-5d567cc3fd9f', 'local', '77eb9ef9-3549-4788-a9aa-5d567cc3fd9f.jpg', 'apps.53167.64302060751336384.06dcc399-689f-4591-91ef-d0720a2cc135.jpg', 'Apps.53167.64302060751336384.06dcc399 689f 4591 91ef D0720a2cc135', 'image/jpeg', '9dcbb848-a25a-4e75-af0a-abbd1c4555ea', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 19:54:29.566365+00', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:25:57.872+00', NULL, 17459, 480, 270, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('eb4d7ae6-bb29-458d-a3ef-0b8470f16931', 'local', 'eb4d7ae6-bb29-458d-a3ef-0b8470f16931.jpg', 'apps.43922.70110853215030129.c1993ea8-ba45-45c6-9e14-ba63fc9d1852.jpg', 'Apps.43922.70110853215030129.c1993ea8 Ba45 45c6 9e14 Ba63fc9d1852', 'image/jpeg', '9dcbb848-a25a-4e75-af0a-abbd1c4555ea', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 19:54:29.58415+00', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:25:57.872+00', NULL, 112024, 1920, 1080, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('c44d5d98-9bbc-4351-975c-88b1f8b67d9c', 'local', 'c44d5d98-9bbc-4351-975c-88b1f8b67d9c.jpg', 'apps.49477.71802554219234428.1e128826-bd72-4f27-b5b4-d204d17c8692.jpg', 'Apps.49477.71802554219234428.1e128826 Bd72 4f27 B5b4 D204d17c8692', 'image/jpeg', '9dcbb848-a25a-4e75-af0a-abbd1c4555ea', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 19:54:29.575931+00', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:25:57.872+00', NULL, 122965, 1920, 1080, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('df7992b2-955e-4b18-b0d5-45d58da4e373', 'local', 'df7992b2-955e-4b18-b0d5-45d58da4e373.jpg', 'apps.9740.67611127219854234.0a5f5ed1-3c93-46bb-a0cc-22e900e79598.jpg', 'Apps.9740.67611127219854234.0a5f5ed1 3c93 46bb A0cc 22e900e79598', 'image/jpeg', '9dcbb848-a25a-4e75-af0a-abbd1c4555ea', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 19:54:29.59841+00', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:25:57.872+00', NULL, 134537, 1920, 1080, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('431a4d8a-046e-4bbc-a7e0-d9bc3cd51cde', 'local', '431a4d8a-046e-4bbc-a7e0-d9bc3cd51cde.webp', '6-4_Logo.webp', '6 4 Logo', 'image/webp', '07d9aa98-227f-4d9a-916f-e19f30cda26a', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 19:59:12.287896+00', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:26:04.16+00', NULL, 10260, 233, 237, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('76c2e55a-6348-457f-a335-cf60e91b2950', 'local', '76c2e55a-6348-457f-a335-cf60e91b2950.svg', 'clic_color_info.svg', 'Clic Color Info', 'image/svg+xml', '82caf9c9-995b-404f-ba7e-76f704a6dd3e', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 19:34:49.409417+00', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:26:11.853+00', NULL, 27331, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('3f53fb20-e623-42f0-8ad1-68bbc0ea923d', 'local', '3f53fb20-e623-42f0-8ad1-68bbc0ea923d.svg', 'epfl-logo.svg', 'Epfl Logo', 'image/svg+xml', '24a99ee1-4eee-48e1-9960-d51b5a105016', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 19:32:59.318131+00', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:27:01.291+00', NULL, 1254, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('8e8245ea-0903-4573-8e89-5d3c86a848de', 'local', '8e8245ea-0903-4573-8e89-5d3c86a848de.jpg', 'TF_AngelCity_Loadscreen.jpg', 'Tf Angel City Loadscreen', 'image/jpeg', '2fd1d075-83a4-40b7-902e-b46a0d861dfe', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:36:42.17774+00', NULL, '2024-06-26 20:36:42.264+00', NULL, 183263, 1000, 563, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('1b5dc9b4-71b7-424b-ac70-2b151912469f', 'local', '1b5dc9b4-71b7-424b-ac70-2b151912469f.jpg', 'Titanfall_2_B.jpg', 'Titanfall 2 B', 'image/jpeg', '2fd1d075-83a4-40b7-902e-b46a0d861dfe', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:36:42.166895+00', NULL, '2024-06-26 20:36:42.265+00', NULL, 209017, 1000, 563, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('2ad31395-05d2-48f3-9e9d-52f48f423697', 'local', '2ad31395-05d2-48f3-9e9d-52f48f423697.jpg', 'Titanfall_2_C.jpg', 'Titanfall 2 C', 'image/jpeg', '2fd1d075-83a4-40b7-902e-b46a0d861dfe', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:36:42.187429+00', NULL, '2024-06-26 20:36:42.267+00', NULL, 193522, 1000, 563, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('3af2d6ac-1afe-418c-9893-ae8a1e97ee26', 'local', '3af2d6ac-1afe-418c-9893-ae8a1e97ee26.jpg', 'TF2_PromoArt_2.jpg', 'T F2 Promo Art 2', 'image/jpeg', '2fd1d075-83a4-40b7-902e-b46a0d861dfe', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:36:42.068034+00', NULL, '2024-06-26 20:36:42.145+00', NULL, 176641, 1000, 563, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('aca98033-26ae-4117-b411-e94c119ebd95', 'local', 'aca98033-26ae-4117-b411-e94c119ebd95.jpg', 'TF2_BT-7274_Loadscreen_1.jpg', 'T F2 Bt 7274 Loadscreen 1', 'image/jpeg', '2fd1d075-83a4-40b7-902e-b46a0d861dfe', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:36:42.081318+00', NULL, '2024-06-26 20:36:42.147+00', NULL, 114733, 1000, 563, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('74f0392e-c190-40f6-986c-9b1ba293910d', 'local', '74f0392e-c190-40f6-986c-9b1ba293910d.jpg', 'TF2_PromoArt_1.jpg', 'T F2 Promo Art 1', 'image/jpeg', '2fd1d075-83a4-40b7-902e-b46a0d861dfe', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:36:42.114345+00', NULL, '2024-06-26 20:36:42.149+00', NULL, 153694, 1000, 617, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('96a1234f-4fe9-42dc-89b2-8607142d7c09', 'local', '96a1234f-4fe9-42dc-89b2-8607142d7c09.jpg', 'Titanfall_2_D.jpg', 'Titanfall 2 D', 'image/jpeg', '2fd1d075-83a4-40b7-902e-b46a0d861dfe', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:36:42.10359+00', NULL, '2024-06-26 20:36:42.151+00', NULL, 175666, 1000, 563, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata, focal_point_x, focal_point_y) VALUES ('27ff8468-d7ae-4911-acf6-de0c425b7e48', 'local', '27ff8468-d7ae-4911-acf6-de0c425b7e48.jpg', 'TF2_BoxArtFull.jpg', 'T F2 Box Art Full', 'image/jpeg', '2fd1d075-83a4-40b7-902e-b46a0d861dfe', '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:36:42.133082+00', NULL, '2024-06-26 20:36:42.167+00', NULL, 189144, 1000, 558, NULL, NULL, NULL, NULL, NULL, '{}', NULL, NULL) ON CONFLICT DO NOTHING;



INSERT INTO public.association (id, name, email, phone, address, logo, preview_image, public_files) VALUES (1, 'CLIC', 'clic@epfl.ch', '+41 21 693 81 28', NULL, '76c2e55a-6348-457f-a335-cf60e91b2950', NULL, NULL) ON CONFLICT DO NOTHING;


INSERT INTO public.association_poles (id, slug, mail) VALUES (1, 'presidency', 'presidence.clic@epfl.ch') ON CONFLICT DO NOTHING;
INSERT INTO public.association_poles (id, slug, mail) VALUES (2, 'it', 'it.clic@epfl.ch') ON CONFLICT DO NOTHING;


INSERT INTO public.members (id, name, surname, email, sciper, link, picture, poll_count) VALUES (1, 'John', 'Doe', NULL, NULL, NULL, 'eb4d7ae6-bb29-458d-a3ef-0b8470f16931', 0) ON CONFLICT DO NOTHING;
INSERT INTO public.members (id, name, surname, email, sciper, link, picture, poll_count) VALUES (2, 'Jack', 'Cooper', NULL, NULL, NULL, '525d475c-24a0-45cb-947f-c70eca52c3b6', 0) ON CONFLICT DO NOTHING;
INSERT INTO public.members (id, name, surname, email, sciper, link, picture, poll_count) VALUES (3, 'Tai', 'Lastimosa', NULL, NULL, NULL, 'df7992b2-955e-4b18-b0d5-45d58da4e373', 0) ON CONFLICT DO NOTHING;
INSERT INTO public.members (id, name, surname, email, sciper, link, picture, poll_count) VALUES (4, 'Droz', '(6-4)', NULL, NULL, NULL, '77eb9ef9-3549-4788-a9aa-5d567cc3fd9f', 0) ON CONFLICT DO NOTHING;
INSERT INTO public.members (id, name, surname, email, sciper, link, picture, poll_count) VALUES (5, 'Davis', '(6-4)', NULL, NULL, NULL, 'c44d5d98-9bbc-4351-975c-88b1f8b67d9c', 0) ON CONFLICT DO NOTHING;


INSERT INTO public.association_memberships (id, member, level, pole) VALUES (1, 1, 'committee', 1) ON CONFLICT DO NOTHING;
INSERT INTO public.association_memberships (id, member, level, pole) VALUES (2, 2, 'committee', 1) ON CONFLICT DO NOTHING;
INSERT INTO public.association_memberships (id, member, level, pole) VALUES (3, 3, 'committee', 2) ON CONFLICT DO NOTHING;


INSERT INTO public.languages (code, name) VALUES ('en-US', 'English') ON CONFLICT DO NOTHING;
INSERT INTO public.languages (code, name) VALUES ('fr-FR', 'Français') ON CONFLICT DO NOTHING;


INSERT INTO public.association_memberships_translations (id, association_memberships_id, languages_code, title) VALUES (1, 1, 'en-US', 'President') ON CONFLICT DO NOTHING;
INSERT INTO public.association_memberships_translations (id, association_memberships_id, languages_code, title) VALUES (2, 1, 'fr-FR', 'President') ON CONFLICT DO NOTHING;
INSERT INTO public.association_memberships_translations (id, association_memberships_id, languages_code, title) VALUES (3, 2, 'en-US', 'Co-President') ON CONFLICT DO NOTHING;
INSERT INTO public.association_memberships_translations (id, association_memberships_id, languages_code, title) VALUES (4, 2, 'fr-FR', 'Co-Présidente') ON CONFLICT DO NOTHING;
INSERT INTO public.association_memberships_translations (id, association_memberships_id, languages_code, title) VALUES (5, 3, 'en-US', 'IT Manager') ON CONFLICT DO NOTHING;
INSERT INTO public.association_memberships_translations (id, association_memberships_id, languages_code, title) VALUES (6, 3, 'fr-FR', 'Responsable Informatique') ON CONFLICT DO NOTHING;


INSERT INTO public.commissions (id, email, slug, logo, name) VALUES (1, '6_4@epfl.ch', '6-4', NULL, 'The 6-4') ON CONFLICT DO NOTHING;


INSERT INTO public.partner_category (id, rank) VALUES (1, 0) ON CONFLICT DO NOTHING;
INSERT INTO public.partner_category (id, rank) VALUES (2, 1) ON CONFLICT DO NOTHING;


INSERT INTO public.partners (id, name, logo, link, start, "end", commission, category) VALUES (2, 'EPFL', '3f53fb20-e623-42f0-8ad1-68bbc0ea923d', 'https://epfl.ch', '2024-06-01', '2030-06-01', NULL, 2) ON CONFLICT DO NOTHING;
INSERT INTO public.partners (id, name, logo, link, start, "end", commission, category) VALUES (1, 'CLIC', '76c2e55a-6348-457f-a335-cf60e91b2950', 'https://clic.epfl.ch', '2024-06-01', '2030-06-01', NULL, 1) ON CONFLICT DO NOTHING;



INSERT INTO public.association_poles_translations (id, association_poles_id, languages_code, name, description) VALUES (1, 1, 'en-US', 'Presidency', 'The role of the co-presidents is to coordinate the association internally and represent it externally. They ensure cohesion within their committee and with the CLIC commissions, and that the association is moving in the right direction, according to the goals set and the vision of the association.

Without going into too much detail, this involves ensuring compliance with the association''s official documents, chairing committee meetings and general assemblies, ensuring a good distribution of the tasks, and supporting committee members where necessary.

These are very rewarding, all-round jobs that require a constant global vision!') ON CONFLICT DO NOTHING;
INSERT INTO public.association_poles_translations (id, association_poles_id, languages_code, name, description) VALUES (2, 1, 'fr-FR', 'Présidence', 'Le duo des co-président·e·s a pour rôle de coordonner l’association en interne et de la représenter à l’externe. Elles/ils veillent à une bonne cohésion au sein de leur comité et avec les commissions de la CLIC, et à ce que l''association avance dans la bonne direction, selon les buts fixés et la vision de l''association.

Sans trop rentrer dans les détails, il s''agit de s’assurer du respect des documents officiels de l’association, diriger les réunions du comité et les assemblées générales, veiller à une bonne répartition des tâches, et accompagner les membres du comité si besoin.

Ce sont des postes très enrichissants et touche-à-tout qui demandent une vision globale constante !') ON CONFLICT DO NOTHING;
INSERT INTO public.association_poles_translations (id, association_poles_id, languages_code, name, description) VALUES (3, 2, 'en-US', 'IT', 'The IT department looks after the association''s IT infrastructure. It''s a department in constant motion, with no shortage of ideas and projects! Its day-to-day work ranges from adding new tools and applications to the CLIC committee''s artillery (or even the IC student''s), to developing our magnificent website on which you are reading these lines.

### System administrator

Often abbreviated to sysadmin, the system administrator''s job is to set up, update and, above all, maintain IT services. In the case of CLIC, we have a small server hosted at Infomaniak on which our year-round services reside, whether they be internal tools (Mattermost, Nextcloud, etc.) or external (website) to the committee. Generally speaking, the management of this server is a very basic set of tasks, and above all an educational one for anyone interested in IT.

### Web development

The association''s website contains information on CLIC, its commissions, committees and team members. In the near future, we''d like to extend these functionalities to services for IC students, such as an equipment loan system, a registration system, a shared calendar for  IC associations and commissions, etc. The possibilities are infinite...') ON CONFLICT DO NOTHING;
INSERT INTO public.association_poles_translations (id, association_poles_id, languages_code, name, description) VALUES (4, 2, 'fr-FR', 'IT', 'Le pôle informatique s''occupe de l''infrastructure informatique de l''association. C''est un département en perpétuel mouvement, qui ne manque pas d''idées et de projets ! Son travail quotidien va de l''ajout de nouveaux outils et applications à l''artillerie du comité CLIC (ou même des étudiants IC), au développement de notre magnifique site web sur lequel vous lisez ces lignes.

### Administrateur système

Souvent abrégé en sysadmin, l''administrateur système a pour mission de mettre en place, de mettre à jour et surtout de maintenir les services informatiques. Dans le cas du CLIC, nous disposons d''un petit serveur hébergé chez Infomaniak sur lequel résident nos services à l''année, qu''il s''agisse d''outils internes (Mattermost, Nextcloud, etc.) ou externes (site web) au comité. D''une manière générale, la gestion de ce serveur est un ensemble de tâches très basiques, et surtout éducatives pour toute personne intéressée par l''informatique.

### Développement web

Le site web de l''association contient des informations sur le CLIC, ses commissions, ses comités et les membres de l''équipe. Dans un futur proche, nous aimerions étendre ces fonctionnalités à des services pour les étudiants de l''IC, tels qu''un système de prêt de matériel, un système d''inscription, un calendrier partagé pour les associations et commissions de l''IC, etc. Les possibilités sont infinies...') ON CONFLICT DO NOTHING;



INSERT INTO public.social_links (id, link, logo, media_name, account_name) VALUES (1, 'https://t.me/clicepfl', NULL, 'Telegram', '@clicepfl') ON CONFLICT DO NOTHING;


INSERT INTO public.association_social_links (id, association_id, social_links_id) VALUES (1, 1, 1) ON CONFLICT DO NOTHING;


INSERT INTO public.association_translations (id, association_id, languages_code, description, banner) VALUES (1, 1, 'en-US', '# About
## What is CLIC ?

CLIC came into being in 2011, when the IC faculty was facing difficulties it couldn''t solve on its own. With the help of the delegates, who had to go beyond their role, the CDIC was born. It soon became the CLIC (because it''s classier). The association was mainly made of delegates, and worked in close collaboration with the coaching. The faculty, delighted with this collaboration, provided us with an office close to the administration for rapid communication. This was INN132, where we are still based.
  
As the problems were solved, it was time to think about the fun. A faculty dinner, a field trip, a bar at Balélec (BarIC), and other fun stuff were on the agenda. Then the years passed, and the events multiplied : December mulled wine, free breakfasts, faculty clothing sales, video game evenings and much more.
  
Then, like LudIC or LauzHack, events became commissions, then became big enough to stand on their own two feet, and were transformed into fully-fledged associations.
  
Today, CLIC has grown, but has not lost sight of its original mission: to bring the faculty to life with free or low-cost events, and to ensure that the monotony of classes and exams is regularly broken. In recent years, we have also tried to offer more serious content such as conferences, talks and contacts with industry, as these are also needs of IC faculty students.', '76c2e55a-6348-457f-a335-cf60e91b2950') ON CONFLICT DO NOTHING;
INSERT INTO public.association_translations (id, association_id, languages_code, description, banner) VALUES (2, 1, 'fr-FR', '# À propos
## Qu''est-ce que la CLIC ?

La CLIC est née en 2011, alors que la faculté IC rencontrait des difficultés qu’elle ne pouvait pas résoudre seule. Il fallait l’aide des délégués, mais ils devaient aller au-delà de leur rôle. C’est ainsi qu’est née la CDIC. Très rapidement devenue la CLIC (parce que c''est quand même plus classe), l’association était composée de délégués principalement, et travaillait en étroite collaboration avec le coaching. La Faculté, enchantée de cette collaboration, nous a fourni un bureau proche de l’administration pour une communication rapide. Il s’agissait du bureau INN132, où nous logeons d’ailleurs toujours.

Une fois les problèmes résolus, il devenait temps de penser au fun. Souper de faculté, voyage d’études, bar à Balélec (BarIC), et autres joyeusetés étaient dans l’agenda. Puis les années ont passé, et les événements se sont multipliés : vin chaud en décembre, petits-déjeuners gratuits, ventes d’habits de faculté, soirées jeux-vidéos et bien d’autres.

Ensuite, à l’image de la LudIC ou de LauzHack, des événements sont devenus des commissions, puis sont devenus assez grands pour battre de leurs propres ailes et se sont transformés en associations à part entière.

Aujourd’hui, la CLIC a bien grandi, mais ne perd pas de vue sa mission originale : faire vivre la faculté avec des événements gratuits ou à faible coût, et s’assurer de régulièrement casser la monotonie des cours et des examens. Depuis quelques années, nous tentons également de proposer en supplément du contenu plus sérieux comme des conférences, des talks ou des contacts avec l’industrie, car il s’agit aussi là de besoins des étudiants de la faculté IC.', '76c2e55a-6348-457f-a335-cf60e91b2950') ON CONFLICT DO NOTHING;


INSERT INTO public.commission_memberships (id, commission, member, level) VALUES (1, 1, 4, 'committee') ON CONFLICT DO NOTHING;
INSERT INTO public.commission_memberships (id, commission, member, level) VALUES (2, 1, 5, 'committee') ON CONFLICT DO NOTHING;


INSERT INTO public.commission_memberships_translations (id, commission_memberships_id, languages_code, title) VALUES (1, 1, 'en-US', 'Coordinator') ON CONFLICT DO NOTHING;
INSERT INTO public.commission_memberships_translations (id, commission_memberships_id, languages_code, title) VALUES (2, 1, 'fr-FR', 'Coordinateur') ON CONFLICT DO NOTHING;
INSERT INTO public.commission_memberships_translations (id, commission_memberships_id, languages_code, title) VALUES (3, 2, 'en-US', 'Coordinator') ON CONFLICT DO NOTHING;
INSERT INTO public.commission_memberships_translations (id, commission_memberships_id, languages_code, title) VALUES (4, 2, 'fr-FR', 'Coordinateur') ON CONFLICT DO NOTHING;





INSERT INTO public.commissions_translations (id, commissions_id, languages_code, small_description, description, banner) VALUES (1, 1, 'en-US', 'Comprised of freelance pilots, The 6-4 operates on a code unique among bounty hunters. Instead of selling their services to the highest bidder, Frontier freedom, on their terms, is a higher priority. ', 'The 6-4''s history prior to the Battle of Typhon is unknown. During the engagement, however, the 6-4 made their debut during the later stages of the battle following the reactivation of an IMC Interstellar Beacon by Jack Cooper. As part of Blackbird Squadron, given callsign Blackbird 6-4, they assisted Marauder Corps forces in chasing down and boarding the IMS Draconis, in an effort to secure the Ark.

During the air battle, the 6-4 would assist Pilot Cooper in taking control of the IMS Malta. They helped Cooper clear the infantry surrounding the ship''s anti air guns, then joined him on the ship to clear its main hangar and bridge. After the Malta changed course, they provided cover fire during Cooper''s battle with Viper. The 6-4 would keep control of the IMC battleship, and eventually proceed to utilise the Malta to prevent Cooper from being surrounded by IMC forces during his confrontation with Slone. The 6-4 were able to escape Typhon prior to its destruction at the hands of the IMC superweapon.

Sometime following the Battle of Typhon, members Droz and Davis left the 6-4 for presently unknown reasons, forming The Last Resort. ', '431a4d8a-046e-4bbc-a7e0-d9bc3cd51cde') ON CONFLICT DO NOTHING;
INSERT INTO public.commissions_translations (id, commissions_id, languages_code, small_description, description, banner) VALUES (2, 1, 'fr-FR', 'Composé de pilotes indépendants, les 6-4 fonctionne selon un code unique parmi les chasseurs de primes. Au lieu de vendre leurs services au plus offrant, la liberté de Frontier, selon leurs conditions, est une priorité absolue. ', 'L''histoire des 6-4 avant la bataille de Typhon
 est inconnue. Au cours de l''engagement, cependant, les 6-4 a fait ses débuts 
au cours des dernières phases de la bataille, suite à la réactivation d''une balise interstellaire de l''IMC par Jack Cooper. 
balise interstellaire de l''IMC par Jack Cooper. Faisant partie de l''escadron Blackbird et portant l''indicatif Blackbird 6-4, ils ont aidé les forces du Marauder Corps à poursuivre et à aborder l''IMS Draconis, dans le but de sécuriser l''Arche. 
Pendant la bataille aérienne, les 6-4 a aidé le pilote Cooper à prendre le contrôle de l''IMS Malta.
 Ils ont aidé Cooper à se débarrasser de l''infanterie entourant les canons antiaériens du navire, puis l''ont rejoint sur le navire. 
Ils l''ont ensuite rejoint sur le navire pour dégager le hangar principal et le pont. 
Après que le Malte a changé de cap, ils ont fourni des tirs de couverture pendant le combat de Cooper contre Viper. Les 6-4 ont gardé le contrôle du cuirassé de l''IMC, et ont finalement utilisé le Malta pour empêcher Cooper d''être encerclé par les forces de l''IMC lors de sa confrontation avec Slone. Les 6-4 ont réussi à s''échapper de Typhon avant sa destruction par la super-arme de l''IMC.
Après la bataille de Typhon, Droz et Davis quittent le 6-4 pour des raisons inconnues à ce jour et forment The Last Resort.', '431a4d8a-046e-4bbc-a7e0-d9bc3cd51cde') ON CONFLICT DO NOTHING;


INSERT INTO public.directus_translations (id, language, key, value) VALUES ('6fca2524-46a0-4523-afda-dff8465ee316', 'fr-FR', 'association', 'association') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('b5783fb7-0e36-4860-986a-ce0a925afd7e', 'en-US', 'association', 'association') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('07dae072-42e3-471b-a158-8d88d79bba8e', 'fr-FR', 'by', 'par') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('0927aefd-c0bd-4615-8d32-3782d539e350', 'en-US', 'readMore', 'read more') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('0a18e5b7-19fa-468f-8721-fb6c5e6586e1', 'fr-FR', 'news', 'news') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('0d4bf19a-19d9-4992-8948-b46e551dcd72', 'en-US', 'commission', 'commission') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('0d9453b5-b866-485c-b97c-5188759b9a9b', 'en-US', 'committee', 'committee') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('107cafa9-dff7-466b-a656-47c0c7b91ecb', 'fr-FR', 'association', 'association') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('182bf381-fe71-4e88-8afe-f455162c22d1', 'fr-FR', 'committee', 'comité') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('23204f96-3693-4e6e-a3e0-be22ac98b62b', 'en-US', 'dateIndicator', 'on') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('31ac8e8d-8a67-4d73-ba3f-a0ae14c86634', 'en-US', 'association', 'association') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('3d3c7445-1659-4b6c-ae3f-366c28fc4d86', 'en-US', 'relatedContent', 'related content') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('40162d9d-51c8-4050-8e63-25c74cba90ad', 'en-US', 'contact', 'Contact us : ') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('4186e212-cee3-43ef-b958-d12669ea4702', 'en-US', 'commissions', 'commissions') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('48b5fbc7-4d20-428f-8017-dca1fbddb92d', 'fr-FR', 'timeIndicator', 'à') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('4cefbfc5-1dcd-4998-bc86-3ca1ed9f9d5a', 'en-US', 'news', 'news') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('51c213c4-8c5a-45cf-aaeb-a7474bc1da6b', 'en-US', 'partners', 'partners') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('58f126d8-08c6-4ef8-9661-f197ae1d75c6', 'en-US', 'bob-cassettes', 'Bob cassettes') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('6d459c95-0eca-44e2-bb09-fb1380285914', 'en-US', 'timeIndicator', 'at') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('6f438d0d-bc02-4079-bc85-454354e45237', 'en-US', 'by', 'by') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('7b1d7310-d3c4-4c64-b9d3-54b848c4dd2a', 'fr-FR', 'commission', 'commission') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('7d819173-4b7a-46a6-8b79-97a88ed6b160', 'fr-FR', 'coffee-filter', 'Filtres café') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('7f719165-8b7f-4567-a5ac-4b61569934bf', 'fr-FR', 'moreNews', 'plus de news') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('80c9327a-2043-4980-a8e2-64a53dfb652a', 'en-US', 'coffee-filter', 'Coffee filter') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('8b185a96-ad69-41c4-b40b-94c89976162a', 'fr-FR', 'readMore', 'lire plus') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('a914324c-16da-4bc8-8f4e-f07c60eca6ad', 'en-US', 'digitec', 'Digitec') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('abc26ae0-7b8d-4cd0-849b-87c3a2e3d1fe', 'fr-FR', 'need-to-order', 'Besoin de commander ?') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('b0cada77-a089-4d05-b268-7c4da8a00e90', 'en-US', 'pole', 'positions') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('b4445d8e-7e27-40ac-8919-869348eeb0a5', 'fr-FR', 'dateIndicator', 'le') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('b6d433f1-dfad-40cf-ba0e-9aa8c4f584fd', 'fr-FR', 'slogan', 'Association des étudiant.e.s en Informatique et Systèmes de communication') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('bbd1d417-142e-4872-b438-aec1e02a9a2e', 'fr-FR', 'digitec', 'Digitec') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('c0bc71c5-74cf-4935-92c0-d1398747a5e3', 'en-US', 'moreNews', 'more news') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('c52ed780-7b7d-4358-88c8-acde17ce8063', 'fr-FR', 'pole', 'pôles') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('c803e359-2b6a-44d7-8dfb-ff26e3a7a615', 'fr-FR', 'gallery', 'galerie') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('cb240957-bf9e-42a7-93b9-402cab0104c0', 'en-US', 'need-to-order', 'Need to order?') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('cb8efc84-68bc-4a28-9cb6-c6634597528b', 'br-FR', 'bob-cassettes', 'Cassettes Bob') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('d75f6d82-02cb-4a21-99c3-a62285f28e78', 'fr-FR', 'relatedContent', 'voir aussi ...') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('e12f32e4-7a06-4bbf-86f0-53ed45c05c85', 'fr-FR', 'contact', 'Nous contacter : ') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('e99c2922-927e-44c2-a865-496673d64620', 'fr-FR', 'commissions', 'commissions') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('efa360e8-5937-44b2-9ec5-ad9eb1a7f3fb', 'fr-FR', 'partners', 'partenaires') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('f7a64a82-6059-4a54-9d17-9c24a5a40252', 'en-US', 'slogan', 'Association of students in Computer science and Communication systems') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_translations (id, language, key, value) VALUES ('fdb3302f-96c9-44c9-a00e-513828b9d426', 'en-US', 'gallery', 'gallery') ON CONFLICT DO NOTHING;





INSERT INTO public.news (id, user_created, date_created, date_updated, status, sort, slug, video_link) VALUES (1, '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 19:16:51.215+00', '2024-06-26 20:08:12.904+00', 'published', NULL, 'typhon-battle', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.news (id, user_created, date_created, date_updated, status, sort, slug, video_link) VALUES (2, '49733485-a937-4776-a34b-914ed2b5ce16', '2024-06-26 20:07:32.92+00', '2024-06-26 20:08:27.676+00', 'published', NULL, 'fracture-operation', NULL) ON CONFLICT DO NOTHING;





INSERT INTO public.news_translations (id, news_id, languages_code, title, description, content, banner) VALUES (1, 1, 'en-US', 'Battle of Typhon', 'The Battle of Typhon was an event, a conflict spread out over several days across the surface of Typhon.', 'The Battle of Typhon was an event, a conflict spread out over several days across the surface of Typhon, the planet the battle was named for. It was part of the Frontier Militia''s Operation: Broadsword - a large Frontier-wide push to remove the Interstellar Manufacturing Corporation from the Frontier.

The central objective and focus of the battle was the Fold Weapon, an ancient interstellar superweapon of alien origin with the power to annihilate a planet ON CONFLICT DO NOTHING; the IMC intended to use the Fold Weapon to obliterate Militia planets, beginning with the home world of Harmony, while the Militia - upon discovering the weapon''s existence - sought to prevent its use at all costs. While many Militia vessels were lost, the battle ended with the Militia successfully destroying the Fold Weapon, inadvertently devastating Typhon itself in the process. ', '0ed7b730-158b-4c78-9fb0-7340d2b4e0d9') ON CONFLICT DO NOTHING;
INSERT INTO public.news_translations (id, news_id, languages_code, title, description, content, banner) VALUES (2, 1, 'fr-FR', 'Bataille de Typhon', 'La bataille de Typhon est un événement, un conflit qui s''étend sur plusieurs jours à la surface de Typhon.', 'La bataille de Typhon est un événement, un conflit qui s''étend sur plusieurs jours à la surface de Typhon, la planète dont elle porte le nom. Elle s''inscrivait dans le cadre de l''opération "Broadsword" de la milice frontalière : Broadsword de la Milice de la Frontière - une vaste opération à l''échelle de la Frontière visant à éliminer l''Interstellar Manufacturing Corporation de la Frontière.

L''objectif central de la bataille était l''Arme de Pli, une ancienne super-arme interstellaire d''origine extraterrestre ayant le pouvoir d''anéantir une planète. L''IMC avait l''intention d''utiliser l''Arme de Pli pour anéantir les planètes de la Milice, en commençant par le monde d''Harmony, tandis que la Milice, après avoir découvert l''existence de l''arme, a cherché à empêcher son utilisation à tout prix. Bien que de nombreux vaisseaux de la Milice aient été perdus, la bataille s''est terminée par la destruction de l''Arme de Pli par la Milice, dévastant par inadvertance Typhon lui-même. ', '0ed7b730-158b-4c78-9fb0-7340d2b4e0d9') ON CONFLICT DO NOTHING;
INSERT INTO public.news_translations (id, news_id, languages_code, title, description, content, banner) VALUES (3, 2, 'en-US', 'Fracture Operation', 'The Fracture Operation, also known as The Refueling Raid, was an operation conducted by the Marauder Corps (M-COR) of the 1st Militia Fleet.', '# Prelude

The raid was conducted at the apex of the months of pursuit conducted by Marcus Graves. Low on fuel and supplies, the Militia First Fleet was forced into a confrontation at Site M41 on the Planet Victor, the only viable refuelling facility within three jumps of the Militia''s current location.

General Anderson was killed in action shortly before the battle, leading to the promotion of Sarah Briggs and Cheng "Bish" Lorck to field commanders of the M-COR. 

# The Battle

The battle involved both naval and ground warfare, with Militia civilian vessels being targeted by the IMC Colonial Navy. Due to Site M41''s strategic significance as a refuelling station, the Militia Fleet''s main goals were to use the site''s fuel pumps to refuel their vessels.

However, IMC forces would mount a heavy defence at three rally points ON CONFLICT DO NOTHING; Alpha, Bravo and Charlie. Utilising Mobile Hardpoints to control of both Heavy Turrets and Fuel Pumps, ground troops would fight for control of the three main buildings, with the Militia fighting to keep air defences offline and the IMC fighting to shoot down as many Militia ships as possible.

Depending on outcome, it is possible that the Militia vessel Redeye was shot down. ', '6521a3b8-b039-4643-bf26-500221131805') ON CONFLICT DO NOTHING;
INSERT INTO public.news_translations (id, news_id, languages_code, title, description, content, banner) VALUES (4, 2, 'fr-FR', 'Opération Fracture', 'L''opération Fracture, également connue sous le nom de Raid de ravitaillement, est une opération menée par le Marauder Corps (M-COR) de la 1ère Flotte de la Milice.', '# Prélude

Le raid a été mené à l''apogée des mois de poursuite menés par Marcus Graves. À court de carburant et de provisions, la première flotte de la Milice a été contrainte de s''affronter sur le site M41 de la planète Victor, la seule installation de ravitaillement viable à moins de trois sauts de l''emplacement actuel de la Milice.

Le général Anderson a été tué au combat peu avant la bataille, ce qui a conduit à la promotion de Sarah Briggs et de Cheng "Bish" Lorck en tant que commandants de terrain du M-COR. 

# La bataille

La bataille a impliqué une guerre navale et terrestre, les navires civils de la Milice étant pris pour cible par la marine coloniale de l''IMC. En raison de l''importance stratégique du site M41 en tant que station de ravitaillement, les principaux objectifs de la flotte de la Milice étaient d''utiliser les pompes à carburant du site pour ravitailler leurs navires.

Cependant, les forces de l''IMC allaient mettre en place une défense lourde à trois points de ralliement : Alpha, Bravo et Charlie. En utilisant des points d''appui mobiles pour contrôler les tourelles lourdes et les pompes à carburant, les troupes terrestres se battraient pour le contrôle des trois bâtiments principaux, la Milice s''efforçant de maintenir les défenses aériennes hors ligne et l''IMC d''abattre le plus grand nombre possible de vaisseaux de la Milice.

En fonction des résultats, il est possible que le vaisseau de la Milice Redeye ait été abattu. ', '6521a3b8-b039-4643-bf26-500221131805') ON CONFLICT DO NOTHING;


INSERT INTO public.partner_category_translations (id, partner_category_id, languages_code, name) VALUES (1, 1, 'en-US', 'Tier 1') ON CONFLICT DO NOTHING;
INSERT INTO public.partner_category_translations (id, partner_category_id, languages_code, name) VALUES (2, 1, 'fr-FR', 'Tier 1') ON CONFLICT DO NOTHING;
INSERT INTO public.partner_category_translations (id, partner_category_id, languages_code, name) VALUES (3, 2, 'en-US', 'Tier 2') ON CONFLICT DO NOTHING;
INSERT INTO public.partner_category_translations (id, partner_category_id, languages_code, name) VALUES (4, 2, 'fr-FR', 'Tier 2') ON CONFLICT DO NOTHING;


INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100001, NULL, 'inventory', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100002, NULL, 'social_links', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100003, NULL, 'partners', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100004, NULL, 'association_translations', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100005, NULL, 'news', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100006, NULL, 'association_social_links', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100007, NULL, 'members', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100008, NULL, 'association_partners', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100009, NULL, 'news_translations', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100010, NULL, 'languages', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100011, NULL, 'commissions_translations', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100012, NULL, 'association_public_files', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100013, NULL, 'news_commissions', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100014, NULL, 'commissions_social_links', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100015, NULL, 'commissions', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100016, NULL, 'commission_memberships_translations', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100017, NULL, 'association_memberships', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100018, NULL, 'partner_category_translations', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100019, NULL, 'partner_category', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100020, NULL, 'news_partners', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100021, NULL, 'commissions_members', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100022, NULL, 'commission_memberships', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100023, NULL, 'association_public_files_translations', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100024, NULL, 'association_poles_translations', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100025, NULL, 'association_poles', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100026, NULL, 'association_memberships_translations', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100027, NULL, 'association', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100028, NULL, 'directus_files', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100029, NULL, 'directus_folders', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields) VALUES (100030, NULL, 'directus_translations', 'read', '{}', '{}', NULL, '*') ON CONFLICT DO NOTHING;
