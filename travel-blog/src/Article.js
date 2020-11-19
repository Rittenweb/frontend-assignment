import React from 'react';

export default function Article({ imgSrc }) {
  let p1 =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim tristique sapien. Donec ullamcorper turpis leo, et commodo eros fermentum et. Aenean a euismod dolor. Cras vel dolor non orci blandit condimentum. Curabitur rutrum nec turpis eget blandit. Vivamus id fringilla turpis. Donec fringilla hendrerit semper. Maecenas malesuada pretium urna, non consequat mauris pharetra at. In risus tortor, venenatis quis purus vel, feugiat vehicula ligula. Vivamus eget condimentum dolor. Vivamus et ipsum sit amet massa lacinia aliquam. Nam vel metus et tortor suscipit malesuada. Aenean nec velit ut justo ultrices lacinia sed auctor ligula. Ut aliquam ultricies dignissim.';
  let p2 =
    'In tempus dolor augue, eget euismod mauris ullamcorper ac. Vestibulum vitae justo tincidunt diam molestie sodales. Morbi dignissim consectetur nibh id egestas. Proin ut semper velit. In vitae placerat odio. Donec nulla nisl, luctus posuere sem a, consequat auctor nibh. Nam porta blandit porttitor. Duis et eros ultrices, mollis dui sit amet, sodales elit. Donec fringilla diam in euismod maximus. Vestibulum porta ultrices tempor. Mauris interdum sapien ut neque fermentum, et vulputate tellus vulputate. Fusce commodo augue dolor, laoreet hendrerit ante egestas ac.';
  let p3 =
    'Donec iaculis urna ex, eget commodo justo rhoncus a. Cras orci erat, pharetra sit amet pretium in, placerat eget odio. Nulla pharetra lectus consequat neque bibendum, vitae mollis sem porttitor. Vivamus eget sem a ligula tincidunt aliquet in in elit. Aenean suscipit nunc in ipsum egestas, ac sodales ipsum aliquam. Sed in ipsum augue. Ut egestas, sapien vel condimentum facilisis, lacus orci sollicitudin sapien, eget tempus velit turpis sit amet erat. Fusce a nibh nisi. Ut quis lobortis nisi. Ut et eros vitae lorem sodales fermentum sed ac lectus.';
  let p4 =
    'Mauris facilisis ligula nisl, sit amet gravida eros sagittis ut. Vivamus aliquam egestas pharetra. Nulla orci arcu, laoreet in libero sit amet, laoreet ultrices mauris. Nam at pulvinar nunc. Nullam bibendum, arcu nec aliquam semper, sem leo posuere turpis, eget facilisis eros urna ac mauris. Suspendisse quis hendrerit sem. Nulla euismod odio et ex interdum, eu convallis velit pulvinar. Pellentesque vel pulvinar orci, eu iaculis nisi.';

  return (
    <article className='article'>
      <img src={imgSrc} alt='Headshot of me' className='article__headshot'></img>
      <div className='article__text'>
        <h1>A little about me</h1>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
      </div>
    </article>
  );
}
