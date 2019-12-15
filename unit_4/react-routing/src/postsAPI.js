const posts = [
  { id: "a234", title: "I ate an Oreo", content: "An Oreo is a cookie sandwich or cream biscuit. It is made by the Nabisco division of Mondelēz International. The cookie has a sweet, white filling of 'creme' or 'cream'. The creme is in between two circle-shaped chocolate or golden cookie pieces. Nearly 500 billion Oreos have been sold since they were first sold." },
  { id: "a345", title: "I am Sailor Luna", content: "Magna eget est lorem ipsum. Scelerisque varius morbi enim nunc faucibus a. Hac habitasse platea dictumst quisque sagittis purus sit amet. Dolor sit amet consectetur adipiscing elit." },
  { id: "b234", title: "Bell", content: "Amet mattis vulputate enim nulla aliquet porttitor lacus" },
  { id: "cda2", title: "Snowball", content: "" },
  { id: "def4", title: "Nibbles", content: "Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Ultrices eros in cursus turpis massa. Amet nisl purus in mollis nunc sed. Tristique magna sit amet purus gravida quis blandit turpis. Aenean et tortor at risus viverra adipiscing at in tellus. Facilisis volutpat est velit egestas dui. Magna eget est lorem ipsum. Scelerisque varius morbi enim nunc faucibus a. Hac habitasse platea dictumst quisque sagittis purus sit amet. Dolor sit amet consectetur adipiscing elit. Bibendum est ultricies integer quis auctor elit sed. Amet mattis vulputate enim nulla aliquet porttitor lacus." },
  { id: "sft2", title: "Bella", content: "chinchilla" },
  { id: "u46s", title: "HIJACKED", content: "Urna neque viverra justo nec ultrices. Amet consectetur adipiscing elit pellentesque habitant. Consequat semper viverra nam libero justo laoreet sit amet. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Integer malesuada nunc vel risus commodo viverra maecenas. Nulla facilisi morbi tempus iaculis. Ultrices dui sapien eget mi. Felis eget nunc lobortis mattis aliquam faucibus. Id diam vel quam elementum. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Blandit massa enim nec dui nunc mattis enim ut. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Imperdiet nulla malesuada pellentesque elit eget gravida." },
  { id: "edt2", title: "swann", content: "chikasdkjfnaksdjfk lasdklfanskdnjhbnvjsdnjvnsdkjfnvskjdnkjvs ndlkfjnsjlkdfmsjkdfhgksldljfksvmdlcfsjdhfckfjsdhfksvndcfklnchilla" },
  { id: "sfs2", title: "Coding Companies Hate This Guy", content: "MEt egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Felis imperdiet proin fermentum leo vel orci porta non. Aliquam sem fringilla ut morbi tincidunt augue. Gravida dictum fusce ut placerat orci nulla. Amet facilisis magna etiam tempor. Urna molestie at elementum eu facilisis sed odio. Nibh tortor id aliquet lectus proin nibh. Magna fringilla urna porttitor rhoncus dolor purus. Lobortis elementum nibh tellus molestie nunc non. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Quis viverra nibh cras pulvinar mattis. Lectus arcu bibendum at varius vel. Lectus sit amet est placerat in egestas. Vitae auctor eu augue ut lectus arcu bibendum at.y neck my back ..." },
  { id: "6nin", title: "vonielJenesh", content: "My neck, my back, my..." },

];

const getAll = () => posts;

const getOne = id => posts.find(post => post.id === id);

export default {
  getOne,
  getAll
};
