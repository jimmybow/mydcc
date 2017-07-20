from setuptools import setup

exec (open('mydcc/version.py').read())

setup(
    name='mydcc',
    version=__version__,
    author='jimmybow',
    author_email='jimmybow@hotmail.com.tw',
    packages=['mydcc'],
    url = 'https://github.com/jimmybow/mydcc',
    include_package_data=True,
    license='MIT',
    description='mydcc',
    install_requires=[]
)