const yo = require('yo-yo');

if(!window.Intl){
    window.Intl = require('intl');
    require('intl/locale-data/jsonp/en-US.js');
    require('intl/locale-data/jsonp/es.js');
}

const IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');


let rf = new IntlRelativeFormat('es');
module.exports = function postCard(post) {
    var el;

    function render(post) {
        return yo `<article class="_8Rm4L M9sTE  L_LMM SgTZ1   ">
        <header class="Ppjfr UE9AK ">
            <div class="RR-M-  mrq0Z" role="button" tabindex="0">
                <canvas class="CfWVH" style="position: absolute; top: -5px; left: -5px; width: 40px; height: 40px;" width="36"
                    height="36"></canvas>
                <a class="_2dbep qNELH kIKUG" style="width: 30px; height: 30px;" href="/user/${post.user.urlperfil}">
                    <img class="_6q-tv" src="${post.user.avatar}"
                        alt="Foto del perfil"></a>
            </div>

            <div class="o-MQd  ">
                <div class=" ">
                    <div class="e1e1d"><a class="FPmhX notranslate nJAzx" title="${post.user.username}" href="/user/${post.user.urlperfil}">${post.user.username}</a></div>
                </div>
                <div class="M30cS"></div>
            </div>
        </header>

        <div class="_97aPb ">
            <div role="button" tabindex="0">
                <div class="eLAPa kPFhm">
                    <div style="padding-bottom:  84.1333%;" class="KL4Bh">
                        <img class="FFVAD" decoding="auto" sizes="613.7666625976562px" src="${post.url}"></div>
                    <div class="_9AhH0"></div>
                </div>
            </div>
        </div>

        <div class="eo2As ">

            <!-- botones -->
            <section class="ltpMr Slqrh">
                <span class="fr66n">
                    <button class="coreSpriteHeartOpen oF4XW dCJp8" onclick=${post.liked ? like.bind(null, false) : like.bind(null, true)}>
                        <span class="${post.liked ? 'glyphsSpriteHeart__filled__24__red_5' : 'glyphsSpriteHeart__outline__24__grey_9' } u-__7" aria-label="Me gusta"></span>
                    </button>
            </span>
            <span class="_15y0l">
                <button class="oF4XW dCJp8">
                    <span class="glyphsSpriteComment__outline__24__grey_9 u-__7" aria-label="Comentar"></span>
                </button>
            </span>
            <span class="_5e4p">
                    <button class="oF4XW dCJp8">
                        <span class="glyphsSpriteShare__outline__24__grey_9 u-__7" aria-label="Compartir publicación"></span>
                    </button>
                </span>
                <span class="wmtNn">
                    <button class="oF4XW dCJp8">
                        <span class="glyphsSpriteSave__outline__24__grey_9 u-__7" aria-label="Guardar"></span>
                    </button>
                </span>
            </section>
            <!-- me gustas -->
            <section class="EDfFK ygqzn">
                <div class="HbPOm y9v3U">
                    <a class="zV_Nj" href="/p/BoH8IsQD7pS/liked_by/"><span>${post.likes}</span> Me gusta</a>
                </div>
            </section>

            <div class="k_Q0X NnvRN">
                <a class="c-Yi7" href="/p/BoKkK8tnSCB/">
                    <time class="_1o9PC Nzb55" datetime="" title="">${rf.format(post.createdAt)}</time>
                </a>
            </div>

            <!-- agrega un comentario -->
            <section class="sH9wk  _JgwE ">
                <div class="RxpZH">
                    <form class="X7cDz">
                        <textarea aria-label="Agrega un comentario..." placeholder="Agrega un comentario..." class="Ypffh"
                            autocomplete="off" autocorrect="off"></textarea>
                    </form>
                </div>
            </section>
        </div>

        <div class="MEAGs">
            <button class="oF4XW dCJp8" >
                <span class="glyphsSpriteMore_horizontal__outline__24__grey_9 u-__7" aria-label="Más opciones">
                </span>
            </button>
        </div>

        </article>`;
    }

    function like(liked) {
        post.liked = liked;
        post.likes += liked ? 1 : -1;
        let newEl = render(post);
        yo.update(el, newEl);
        return false;
    }



    el = render(post);
    return el;
}