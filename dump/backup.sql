PGDMP         '                {            floure    14.6    14.6 #               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    49487    floure    DATABASE     c   CREATE DATABASE floure WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE floure;
                postgres    false            �            1259    49516    catalog    TABLE       CREATE TABLE public.catalog (
    id integer NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    price integer NOT NULL,
    photo character varying(200),
    "isActive" boolean DEFAULT true NOT NULL,
    "categoryId" integer
);
    DROP TABLE public.catalog;
       public         heap    postgres    false            �            1259    49515    catalog_id_seq    SEQUENCE     �   CREATE SEQUENCE public.catalog_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.catalog_id_seq;
       public          postgres    false    216                       0    0    catalog_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.catalog_id_seq OWNED BY public.catalog.id;
          public          postgres    false    215            �            1259    49489    category    TABLE     �   CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying(500) NOT NULL,
    "order" integer NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL
);
    DROP TABLE public.category;
       public         heap    postgres    false            �            1259    49488    category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.category_id_seq;
       public          postgres    false    210                       0    0    category_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
          public          postgres    false    209            �            1259    49508    images    TABLE     �   CREATE TABLE public.images (
    id integer NOT NULL,
    image character varying(100) NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "catalogId" integer
);
    DROP TABLE public.images;
       public         heap    postgres    false            �            1259    49507    images_id_seq    SEQUENCE     �   CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.images_id_seq;
       public          postgres    false    214                       0    0    images_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;
          public          postgres    false    213            �            1259    49499 	   parametrs    TABLE     �   CREATE TABLE public.parametrs (
    id integer NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    "catalogId" integer
);
    DROP TABLE public.parametrs;
       public         heap    postgres    false            �            1259    49498    parametrs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.parametrs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.parametrs_id_seq;
       public          postgres    false    212                       0    0    parametrs_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.parametrs_id_seq OWNED BY public.parametrs.id;
          public          postgres    false    211            p           2604    49519 
   catalog id    DEFAULT     h   ALTER TABLE ONLY public.catalog ALTER COLUMN id SET DEFAULT nextval('public.catalog_id_seq'::regclass);
 9   ALTER TABLE public.catalog ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            k           2604    49492    category id    DEFAULT     j   ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
 :   ALTER TABLE public.category ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            n           2604    49511 	   images id    DEFAULT     f   ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);
 8   ALTER TABLE public.images ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            m           2604    49502    parametrs id    DEFAULT     l   ALTER TABLE ONLY public.parametrs ALTER COLUMN id SET DEFAULT nextval('public.parametrs_id_seq'::regclass);
 ;   ALTER TABLE public.parametrs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212                      0    49516    catalog 
   TABLE DATA           a   COPY public.catalog (id, title, description, price, photo, "isActive", "categoryId") FROM stdin;
    public          postgres    false    216   9'       	          0    49489    category 
   TABLE DATA           A   COPY public.category (id, name, "order", "isActive") FROM stdin;
    public          postgres    false    210   &1                 0    49508    images 
   TABLE DATA           D   COPY public.images (id, image, "isActive", "catalogId") FROM stdin;
    public          postgres    false    214   �1                 0    49499 	   parametrs 
   TABLE DATA           H   COPY public.parametrs (id, title, description, "catalogId") FROM stdin;
    public          postgres    false    212    2                  0    0    catalog_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.catalog_id_seq', 9, true);
          public          postgres    false    215                       0    0    category_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.category_id_seq', 6, true);
          public          postgres    false    209                       0    0    images_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.images_id_seq', 1, false);
          public          postgres    false    213                       0    0    parametrs_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.parametrs_id_seq', 26, true);
          public          postgres    false    211            w           2606    49514 %   images PK_1fe148074c6a1a91b63cb9ee3c9 
   CONSTRAINT     e   ALTER TABLE ONLY public.images
    ADD CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.images DROP CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9";
       public            postgres    false    214            u           2606    49506 (   parametrs PK_73d9c16a55260f1c7799fc8d863 
   CONSTRAINT     h   ALTER TABLE ONLY public.parametrs
    ADD CONSTRAINT "PK_73d9c16a55260f1c7799fc8d863" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.parametrs DROP CONSTRAINT "PK_73d9c16a55260f1c7799fc8d863";
       public            postgres    false    212            y           2606    49524 &   catalog PK_782754bded12b4e75ad4afff913 
   CONSTRAINT     f   ALTER TABLE ONLY public.catalog
    ADD CONSTRAINT "PK_782754bded12b4e75ad4afff913" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.catalog DROP CONSTRAINT "PK_782754bded12b4e75ad4afff913";
       public            postgres    false    216            s           2606    49497 '   category PK_9c4e4a89e3674fc9f382d733f03 
   CONSTRAINT     g   ALTER TABLE ONLY public.category
    ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.category DROP CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03";
       public            postgres    false    210            |           2606    49535 &   catalog FK_0d955af2855edca0662f514cfaa    FK CONSTRAINT     �   ALTER TABLE ONLY public.catalog
    ADD CONSTRAINT "FK_0d955af2855edca0662f514cfaa" FOREIGN KEY ("categoryId") REFERENCES public.category(id);
 R   ALTER TABLE ONLY public.catalog DROP CONSTRAINT "FK_0d955af2855edca0662f514cfaa";
       public          postgres    false    210    216    3187            z           2606    49525 (   parametrs FK_48105ee28aacf3c25052a3184d6    FK CONSTRAINT     �   ALTER TABLE ONLY public.parametrs
    ADD CONSTRAINT "FK_48105ee28aacf3c25052a3184d6" FOREIGN KEY ("catalogId") REFERENCES public.catalog(id) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.parametrs DROP CONSTRAINT "FK_48105ee28aacf3c25052a3184d6";
       public          postgres    false    3193    212    216            {           2606    49530 %   images FK_8bf9219a450f9f824f0342f52d7    FK CONSTRAINT     �   ALTER TABLE ONLY public.images
    ADD CONSTRAINT "FK_8bf9219a450f9f824f0342f52d7" FOREIGN KEY ("catalogId") REFERENCES public.catalog(id);
 Q   ALTER TABLE ONLY public.images DROP CONSTRAINT "FK_8bf9219a450f9f824f0342f52d7";
       public          postgres    false    3193    214    216               �	  x��YKr��]�O��5� �woI���@Q-�;���=;�vx�� !���p�>�d��BU�Z=�B�S������d��+�����߇�>�xy���!?�[��[���W�U�wyJ�y�o~��g����^K=z������ǯ�z�|N�p3O��]9�{��6O�����	���/��|I2�兗->�R��AX|�'������3�[׼��y�ͼ|O{��Z��_y���S1+�^z�.�{���fؼ�^N��|MKL��GZ����_x�Yq����|%�˪NJ��gK��}Zц���:��!��|.�/8 m>�1�D?Oʱ|^8r˜���{�:;�c��?�|W<ҭ���x���J�Ϋ n8���䌈�?���.nxϔ�[�t�w��t1��������}6�F8��9�Sa=��+�Ȱ�NɁ�+]�B��Z]�s9������P���	�2��ݞ�c�W����=�}���'>�����4��3�����7�;�x��k�4CN=�X�{�oѭ;�&=���*̳�IS7
�{Ćȵ��N���7���ۻ��$��Q��w�8���E'�����?���
>D� �n���WNpH	�J�`��&)�߰	�B'�3�R�\OX��Xl�F�FX�+~��
�@ ����'69����<��^�����pȊc��XX����������!���)y.��#g�PbI6XK�dV���*��T7,Do�v�D�T�>�UE�d�J��d�|f��ڣB_����r�\Q�yW`�lDЀ3%^β)%�z�Y"��b�����3��ԃ�t��FXٵA��A��yP
�)B�pY��↟_xfO���� �p�$H����n�'��w����#7�qﰝ�#2k>�$�Yᆝ������\*gp�Rg��cg�2A4�ǽ��JoD,��h4�q�����rp^�L�,��o�̼�]��SLu(5�3���S��0L9�����&6��2�i�C�4q^O�)�VR��P�%U���JS���ۂYg��#�"�(��̉ܩ��9c���WL���i��׳2D�͕�Vl�#j���>ܓF�F�e�.*n��h�*���Z@ЎOx�a��.T��d�M?��b���%�K�5_cC<�"UN.Nj�	���έd��LG���aW�Ҿ��|TBR�+�����xU�*�5�GL��h�}Hď&��O�s?��0�\���D���R1�&�#UV�hv�Mt�9m�A�G��P���3����UU���2�U2�)�}��юZ��YkTn[4���,Yo�.�7؅����<#RĨ ���U�h=T�����5�C
�lٽ�dh� 9�aK;�=0Lu6��js����+��; ���G�k�� �|.M=�[� 6�eٴn~�:YqsZ��J�YV�7���VzS5#[M��V.�9����+�_H"�@�#�R%i�|�7�Ī��k;ڿz��Щ���e�a�e��Ү��t#%��q������H$5�pZ�:3����[�y����
n��kІ����Y�t����m��:�}�o�X���f/�8�����ҏ�a��:���.�h������;x�W�M2�+�\��6uGJS��7-�v:X�
S&�pr��j��J�K�#�Y�f�L��3�o��U��V����>���b�)���;�F�(9 [x�t���%S��]~=�J*�8���b��TU�9���R�Z@�F=�Y�H�O��x-E�ғO|�����J%�:F�4��SQ���Xv^jW'�Zk���ި��np�J��w�1ɑJ�0�:41��uk�m%8�X������Tkυp/@4e䵙�W���n�r�"�*�A�%�w��xԛ��q��3���0�'Ѹs���)9h����vkK��"��kHs�Sp��WA�N�0G\c4�jLY9'��?�xg8����h�I˖	j�l��u���5�+:�}���F�����aCyK{m�.�f�)���I#Y�����v�k��':��bn�C��e��7�뷘)����ePL�MM�fO>�P�u�:7�x*����y\i��-)eRv��LH�ΰ
q�C�ޠ��8/�?�����@���5�b�p�4���s�"O�*�zzzB�  �����p}Z��U�t]�|u���E�0r�U�F��k`dłq4O��O��s?�Dc4d�q|щ;�d��;Xp��,��OJ�������SfY�ު�q��0C2~��=���b�2�q��8�N��ۘ�&�JU'�r�O�URb�c�t�L[Z�j��Rں!Y��_¾`�+E��g�r���i�Lo*
�j
�)p5OPk%�˸���gS��K|��̞����Z(FS}���6/��^�q�K�U1n�������%�e��%i�W��DA�Ewr]^��~8��^8�G��N��`4���nIA:�����pJ      	   �   x�u�;�@Dk�)��|O�18@�(i�葢H�FD�3�o����f-�ߌ�������b�3��ǈ��ɶ�w��At����@n@!���g�H�4%<?�Jal)�qk���ȿ�K�+;3�s�g�|̠;�_�z�z��b�(�EԂ;�����<��ڐ��9��w��            x������ � �         �   x���Mj�0��Z�R"Y��]z�ąnͶ�.����Ib�
on�'���0�7��5��p���]��w���\#����%��ћ�7��~�߈3f�X����g���W_f�������s�xp��ˆ��gMv��=��
j+��ik+�t5�IzC�$D��%45��I�q������=�e���N�P�I�P����c({�8��Ab�eOk@y�'�d҄     