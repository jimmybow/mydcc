from setuptools import setup

exec (open('mydcc/version.py').read())

setup(
    name='mydcc',
    version=__version__,
    author='jimmybow',
    author_email='jimmybow@hotmail.com.tw',
    packages=['mydcc'],
    url = 'https://github.com/jimmybow/mydcc',
    include_package_data = True,
    license='MIT',
    description='mydcc',
    install_requires=[],
    classifiers=[
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6'
    ]                 
)